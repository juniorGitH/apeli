/**
 * Chatbot component - Interface style ChatGPT pour la cuisine connectée
 * Connecté au foyer amélioré Apeli via MCP Server
 */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([
    { id: 1, title: "Nouvelle conversation", date: new Date().toISOString() },
  ]);
  const [activeConversation, setActiveConversation] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Données IoT simulées du foyer Apeli
  const [iotData, setIotData] = useState({
    temperature: 180,
    poids: 2.5,
    ventilateur: "auto",
    statut: "connecté",
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Vérifier l'authentification
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (!savedUser) {
      navigate("/");
      return;
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simuler les mises à jour IoT en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setIotData((prev) => ({
        ...prev,
        temperature: Math.round(prev.temperature + (Math.random() - 0.5) * 5),
        poids: Math.round((prev.poids + (Math.random() - 0.5) * 0.1) * 100) / 100,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll vers le dernier message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Message de bienvenue
  useEffect(() => {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          "Bonjour ! Je suis **ApeliChef**, votre assistant cuisine intelligent connecté au foyer amélioré Apeli.\n\nJe peux vous aider à :\n- **Cuire des plats** en contrôlant la température du foyer\n- **Surveiller** la température et le poids de votre marmite en temps réel\n- **Ajuster le ventilateur** d'aération via le serveur MCP\n- **Vous guider** étape par étape dans vos recettes\n\nQue souhaitez-vous cuisiner aujourd'hui ?",
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  // Réponses simulées du LLM cuisine
  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("riz") || msg.includes("rice")) {
      return `## Cuisson du Riz au Foyer Apeli\n\n**Température recommandée :** 100°C\n**Temps de cuisson :** 20-25 minutes\n\n### Étapes :\n1. Versez **${iotData.poids}kg** d'eau dans la marmite (détecté par le capteur)\n2. *J'ajuste le ventilateur à 70% pour atteindre 100°C*\n3. Quand l'eau bout, ajoutez le riz lavé\n4. Réduisez à feu doux — *ventilateur à 30%*\n5. Couvrez et laissez cuire 20 min\n\n**Température actuelle :** ${iotData.temperature}°C\n**Poids marmite :** ${iotData.poids}kg\n\n> *Commande MCP envoyée : ventilateur → 70%*`;
    }

    if (msg.includes("pâte") || msg.includes("pate") || msg.includes("fufu")) {
      return `## Préparation de la Pâte (Fufu)\n\n**Température recommandée :** 95-100°C\n**Temps :** 15-20 minutes\n\n### Étapes :\n1. L'eau est en cours de chauffe sur le foyer\n2. *Ventilateur ajusté à 80% pour ébullition rapide*\n3. Versez la farine progressivement en remuant\n4. Réduisez le feu — *ventilateur à 40%*\n5. Tournez vigoureusement jusqu'à consistance lisse\n\n**Température actuelle :** ${iotData.temperature}°C\n**Poids marmite :** ${iotData.poids}kg\n\n> *Commande MCP envoyée : ventilateur → 80%*`;
    }

    if (msg.includes("sauce") || msg.includes("tomate")) {
      return `## Sauce Tomate Maison\n\n**Température recommandée :** 85-90°C\n**Temps :** 30-40 minutes\n\n### Étapes :\n1. Faites chauffer l'huile — *ventilateur à 60%*\n2. Ajoutez les oignons et laissez revenir 5 min\n3. Ajoutez les tomates mixées\n4. *Réduction ventilateur à 45% pour mijotage doux*\n5. Assaisonnez et laissez mijoter 25 min\n\n**Température actuelle :** ${iotData.temperature}°C\n**Poids marmite :** ${iotData.poids}kg\n\n> *Commande MCP envoyée : ventilateur → 60%*`;
    }

    if (msg.includes("température") || msg.includes("temp")) {
      return `## État actuel du Foyer Apeli\n\n| Paramètre | Valeur |\n|---|---|\n| Température | **${iotData.temperature}°C** |\n| Poids marmite | **${iotData.poids}kg** |\n| Ventilateur | **${iotData.ventilateur}** |\n| Statut | **${iotData.statut}** |\n\nTout fonctionne normalement. Le foyer est prêt pour la cuisson !`;
    }

    if (msg.includes("ventilateur") || msg.includes("vent")) {
      return `## Contrôle du Ventilateur d'Aération\n\nLe ventilateur du foyer Apeli est actuellement en mode **${iotData.ventilateur}**.\n\nVia le serveur MCP, je peux :\n- **Augmenter** la ventilation (monter la température)\n- **Réduire** la ventilation (baisser la température)\n- Passer en mode **auto** (régulation intelligente)\n\n> *Serveur MCP connecté et opérationnel*\n\nQuel réglage souhaitez-vous ?`;
    }

    if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")) {
      return `Bonjour ! Je suis ravi de vous aider avec votre cuisine sur le foyer Apeli.\n\n**État du foyer :** ${iotData.statut}\n**Température :** ${iotData.temperature}°C\n\nQue souhaitez-vous préparer ? Je peux vous guider pas à pas tout en contrôlant automatiquement la température du foyer via le ventilateur d'aération.`;
    }

    return `Je comprends votre demande concernant "${userMessage}".\n\nEn tant qu'assistant cuisine du foyer Apeli, je peux vous aider avec :\n\n- **Recettes africaines et internationales** adaptées au foyer amélioré\n- **Contrôle de la température** via le ventilateur MCP\n- **Suivi en temps réel** du poids et de la température\n\nFoyer : **${iotData.statut}** | ${iotData.temperature}°C | ${iotData.poids}kg\n\nPourriez-vous préciser ce que vous souhaitez cuisiner ?`;
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simuler le délai de réponse du LLM
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewConversation = () => {
    const newConv = {
      id: Date.now(),
      title: "Nouvelle conversation",
      date: new Date().toISOString(),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConversation(newConv.id);
    setMessages([
      {
        id: 1,
        role: "assistant",
        content:
          "Nouvelle conversation ! Que souhaitez-vous cuisiner sur le foyer Apeli ?",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  // Rendu simple du markdown
  const renderMarkdown = (text) => {
    return text
      .replace(/## (.*)/g, '<h3 style="margin: 0.8rem 0 0.5rem; color: #2c3e50;">$1</h3>')
      .replace(/### (.*)/g, '<h4 style="margin: 0.6rem 0 0.3rem; color: #34495e;">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n- /g, "<br/>• ")
      .replace(/\n(\d+)\. /g, "<br/>$1. ")
      .replace(/\n> (.*)/g, '<blockquote style="border-left: 3px solid #e67e22; padding: 0.5rem 1rem; margin: 0.5rem 0; background: rgba(230,126,34,0.08); border-radius: 0 6px 6px 0;">$1</blockquote>')
      .replace(/\| (.*?) \|/g, (match) => `<code style="background: rgba(0,0,0,0.05); padding: 0.1rem 0.3rem; border-radius: 3px;">${match}</code>`)
      .replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>");
  };

  const sidebarWidth = isMobile ? "100%" : "260px";

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 70px)",
        marginTop: "70px",
        background: "#f7f7f8",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      {(sidebarOpen || !isMobile) && (
        <div
          style={{
            width: sidebarWidth,
            minWidth: isMobile ? "100%" : "260px",
            background: "#1a1a2e",
            color: "white",
            display: "flex",
            flexDirection: "column",
            position: isMobile ? "fixed" : "relative",
            top: isMobile ? "70px" : "auto",
            left: 0,
            bottom: 0,
            zIndex: isMobile ? 100 : 1,
          }}
        >
          {/* Nouveau chat button */}
          <button
            onClick={handleNewConversation}
            style={{
              margin: "1rem",
              padding: "0.75rem 1rem",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            ✚ Nouvelle conversation
          </button>

          {/* IoT Status Panel */}
          <div
            style={{
              margin: "0 1rem",
              padding: "0.8rem",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              fontSize: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#e67e22",
                fontSize: "0.85rem",
              }}
            >
              Foyer Apeli
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Temp.</span>
              <span style={{ color: iotData.temperature > 200 ? "#e74c3c" : "#2ecc71", fontWeight: "600" }}>
                {iotData.temperature}°C
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Poids</span>
              <span style={{ fontWeight: "600" }}>{iotData.poids}kg</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span>Ventilo</span>
              <span style={{ fontWeight: "600" }}>{iotData.ventilateur}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Statut</span>
              <span style={{ color: "#2ecc71", fontWeight: "600" }}>● {iotData.statut}</span>
            </div>
          </div>

          {/* Conversations list */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0 0.5rem" }}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => {
                  setActiveConversation(conv.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                style={{
                  padding: "0.7rem 0.8rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: activeConversation === conv.id ? "rgba(255,255,255,0.1)" : "transparent",
                  marginBottom: "0.2rem",
                  fontSize: "0.85rem",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {conv.title}
              </div>
            ))}
          </div>

          {/* MCP Server Status */}
          <div
            style={{
              padding: "1rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#2ecc71", fontSize: "0.6rem" }}>●</span>
              Serveur MCP connecté
            </div>
            <div style={{ marginTop: "0.3rem" }}>
              Ventilateur d'aération: Actif
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Chat header */}
        <div
          style={{
            padding: isMobile ? "0.6rem 0.8rem" : "0.8rem 1rem",
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0, flex: 1 }}>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  padding: "0.3rem",
                  flexShrink: 0,
                }}
              >
                ☰
              </button>
            )}
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: "600", fontSize: isMobile ? "0.85rem" : "1rem", color: "#2c3e50", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                ApeliChef — Assistant Cuisine IA
              </div>
              {!isMobile && (
                <div style={{ fontSize: "0.75rem", color: "#7f8c8d" }}>
                  RAG + LLM Cuisine • Connecté au foyer amélioré Apeli
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: isMobile ? "0.5rem" : "1rem",
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              color: "#7f8c8d",
              flexShrink: 0,
            }}
          >
            <span style={{ background: "#f0f0f0", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>{iotData.temperature}°C</span>
            <span style={{ background: "#f0f0f0", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>{iotData.poids}kg</span>
          </div>
        </div>

        {/* Messages area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: isMobile ? "0.5rem" : "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  maxWidth: isMobile ? "90%" : "70%",
                  padding: "1rem 1.2rem",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: msg.role === "user" ? "#e67e22" : "white",
                  color: msg.role === "user" ? "white" : "#2c3e50",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  wordBreak: "break-word",
                }}
              >
                {msg.role === "assistant" ? (
                  <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
                ) : (
                  msg.content
                )}
                <div
                  style={{
                    fontSize: "0.65rem",
                    marginTop: "0.5rem",
                    opacity: 0.5,
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  {new Date(msg.timestamp).toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "18px 18px 18px 4px",
                  background: "white",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  fontSize: "0.9rem",
                  color: "#7f8c8d",
                }}
              >
                <span className="typing-dots">
                  ApeliChef réfléchit
                  <span style={{ animation: "blink 1.4s infinite" }}>.</span>
                  <span style={{ animation: "blink 1.4s infinite 0.2s" }}>.</span>
                  <span style={{ animation: "blink 1.4s infinite 0.4s" }}>.</span>
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div
          style={{
            padding: isMobile ? "0.6rem 0.5rem" : "1rem",
            borderTop: "1px solid #e5e5e5",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              maxWidth: "800px",
              margin: "0 auto",
              alignItems: "flex-end",
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isMobile ? "Posez votre question..." : "Demandez une recette, vérifiez la température, contrôlez le ventilateur..."}
              rows={1}
              style={{
                flex: 1,
                padding: isMobile ? "0.6rem 0.8rem" : "0.8rem 1rem",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontSize: isMobile ? "16px" : "0.9rem",
                resize: "none",
                outline: "none",
                fontFamily: "inherit",
                maxHeight: "120px",
                minHeight: "44px",
                lineHeight: "1.4",
                WebkitAppearance: "none",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              style={{
                padding: "0.8rem 1.2rem",
                background: input.trim() && !isLoading ? "#e67e22" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: input.trim() && !isLoading ? "pointer" : "default",
                fontSize: "1rem",
                transition: "background 0.2s",
                minHeight: "44px",
                minWidth: "44px",
              }}
            >
              ➤
            </button>
          </div>
          {!isMobile && (
            <p
              style={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: "#999",
                margin: "0.5rem 0 0",
              }}
            >
              ApeliChef — IA cuisine connectée au foyer amélioré Apeli • Innovation Crunch Time 2026
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
