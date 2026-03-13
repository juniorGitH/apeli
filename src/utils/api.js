/**
 * Service API pour communiquer avec le backend Apeli
 */

const API_BASE_URL = process.env.API_URL || "https://apeli-api-app.azurewebsites.net/api";

// Récupérer le token JWT stocké
const getToken = () => {
  const user = localStorage.getItem("currentUser");
  if (user) {
    try {
      return JSON.parse(user).token;
    } catch {
      return null;
    }
  }
  return null;
};

// Headers par défaut avec auth
const authHeaders = () => {
  const token = getToken();
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

// === AUTHENTIFICATION ===

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_BASE_URL}/utilisateur/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Identifiants incorrects.");
  }
  const data = await res.json();
  // Stocker l'utilisateur avec le token dans localStorage
  const user = {
    id: data.userId,
    name: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    company: data.company,
    position: data.position,
    bio: data.bio,
    skills: data.skills,
    website: data.website,
    userType: (data.role || "Client").toLowerCase() === "admin" ? "admin" : "client",
    token: data.token,
  };
  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
};

export const registerUser = async ({ name, email, password }) => {
  // Séparer le nom en firstName / lastName
  const parts = (name || "").trim().split(" ");
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";

  const res = await fetch(`${API_BASE_URL}/utilisateur`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      role: "Client",
    }),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Erreur lors de l'inscription.");
  }
  // Après inscription, connecter automatiquement
  return await loginUser(email, password);
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

// === PROFIL UTILISATEUR ===

export const getProfile = async (userId) => {
  const res = await fetch(`${API_BASE_URL}/utilisateur/${userId}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Impossible de charger le profil.");
  return await res.json();
};

export const updateProfile = async (profileData) => {
  const res = await fetch(`${API_BASE_URL}/utilisateur/profile`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(profileData),
  });
  if (!res.ok) throw new Error("Erreur lors de la mise à jour du profil.");
  const data = await res.json();
  // Mettre à jour le localStorage avec le nouveau token
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const updatedUser = {
    ...currentUser,
    name: `${data.utilisateur?.firstName || profileData.firstName || ""} ${data.utilisateur?.lastName || profileData.lastName || ""}`.trim(),
    firstName: data.utilisateur?.firstName || profileData.firstName,
    lastName: data.utilisateur?.lastName || profileData.lastName,
    email: data.utilisateur?.email || profileData.email,
    phone: data.utilisateur?.phone || profileData.phone,
    company: data.utilisateur?.company || profileData.company,
    position: data.utilisateur?.position || profileData.position,
    bio: data.utilisateur?.bio || profileData.bio,
    skills: data.utilisateur?.skills || profileData.skills,
    website: data.utilisateur?.website || profileData.website,
    token: data.token || currentUser.token,
  };
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  return updatedUser;
};

export const deleteAccount = async () => {
  const res = await fetch(`${API_BASE_URL}/utilisateur/profile`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression du compte.");
  localStorage.removeItem("currentUser");
};

// === ARTICLES ===

export const getArticles = async () => {
  const res = await fetch(`${API_BASE_URL}/article`);
  if (!res.ok) throw new Error("Impossible de charger les articles.");
  return await res.json();
};

export const getArticlesByCategory = async (category) => {
  const res = await fetch(`${API_BASE_URL}/article/categorie/${category}`);
  if (!res.ok) throw new Error("Impossible de charger les articles.");
  return await res.json();
};

// === CONTENU DU SITE ===

export const getSiteContent = async () => {
  const res = await fetch(`${API_BASE_URL}/sitecontent`);
  if (!res.ok) throw new Error("Impossible de charger le contenu.");
  return await res.json();
};

// === CHATBOT ===

/**
 * Envoie un message au chatbot et retourne la réponse complète
 */
export const sendChatMessage = async (messages) => {
  const res = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error("Erreur de communication avec ApeliChef.");
  const data = await res.json();
  return data.content;
};

/**
 * Envoie un message au chatbot en mode streaming (SSE)
 * @param {Array} messages - Historique des messages
 * @param {Function} onChunk - Callback appelé pour chaque token reçu
 * @param {Function} onDone - Callback appelé quand la réponse est complète
 * @param {Function} onError - Callback appelé en cas d'erreur
 * @param {Function} onMcp - Callback appelé quand une commande MCP est exécutée
 */
export const sendChatMessageStream = async (messages, onChunk, onDone, onError, onMcp) => {
  try {
    const res = await fetch(`${API_BASE_URL}/chat/stream`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      throw new Error("Erreur de communication avec ApeliChef.");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (line.startsWith("event: done")) {
          onDone();
          return;
        }
        if (line.startsWith("event: mcp")) {
          // Ligne suivante contient les données MCP
          continue;
        }
        if (line.startsWith("data: ") && !line.includes("[DONE]")) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.content) onChunk(data.content);
            if (data.tool && onMcp) onMcp(data);
          } catch {
            // ignore parse errors
          }
        }
      }
    }
    onDone();
  } catch (err) {
    onError(err.message);
  }
};

// === SERVEUR MCP (IoT Foyer) ===

/**
 * Obtenir le statut complet du foyer Apeli
 */
export const getMcpStatus = async () => {
  const res = await fetch(`${API_BASE_URL}/mcp/status`, {
    headers: authHeaders(),
  });
  if (!res.ok) return null;
  return await res.json();
};

/**
 * Régler le ventilateur
 */
export const setMcpFan = async (speed) => {
  const res = await fetch(`${API_BASE_URL}/mcp/ventilateur`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ speed }),
  });
  if (!res.ok) throw new Error("Erreur MCP ventilateur.");
  return await res.json();
};

/**
 * Activer le mode auto
 */
export const setMcpAuto = async (targetTemperature) => {
  const res = await fetch(`${API_BASE_URL}/mcp/auto`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ targetTemperature }),
  });
  if (!res.ok) throw new Error("Erreur MCP auto.");
  return await res.json();
};

/**
 * Obtenir l'historique des commandes MCP
 */
export const getMcpHistory = async () => {
  const res = await fetch(`${API_BASE_URL}/mcp/historique`, {
    headers: authHeaders(),
  });
  if (!res.ok) return [];
  return await res.json();
};
