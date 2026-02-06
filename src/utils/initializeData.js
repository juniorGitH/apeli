/**
 * Utilitaires pour initialiser les données du système
 */

export const initializeData = () => {
  // Créer l'admin par défaut s'il n'existe pas
  const adminUser = {
    id: 1,
    name: "Emmanuel Admin",
    email: "admin@emmanuel.com",
    password: "admin123",
    userType: "admin",
    createdAt: new Date().toISOString()
  };

  // Initialiser les données si elles n'existent pas
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([adminUser]));
  }
  
  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]));
  }
  
  if (!localStorage.getItem('adminResources')) {
    localStorage.setItem('adminResources', JSON.stringify([]));
  }
  
  if (!localStorage.getItem('mentoringSessions')) {
    localStorage.setItem('mentoringSessions', JSON.stringify([]));
  }

  // Créer quelques données de démonstration pour les ressources
  const resources = JSON.parse(localStorage.getItem('adminResources') || '[]');
  if (resources.length === 0) {
    const demoResources = [
      {
        id: 1,
        title: "Guide complet React Hooks",
        description: "Tout ce que vous devez savoir sur les hooks React, avec des exemples pratiques et des cas d'utilisation avancés.",
        type: "tutorial",
        category: "React",
        date: new Date().toISOString(),
        author: "Emmanuel AMELA",
        status: "published"
      },
      {
        id: 2,
        title: "Package NPM: utils-js",
        description: "Collection d'utilitaires JavaScript réutilisables pour les projets modernes.",
        type: "package",
        category: "JavaScript",
        date: new Date().toISOString(),
        author: "Emmanuel AMELA",
        status: "published"
      },
      {
        id: 3,
        title: "Snippet: Hook useFetch personnalisé",
        description: "Hook React pour gérer les appels API avec gestion d'état (loading, error, data).",
        type: "snippet",
        category: "React",
        date: new Date().toISOString(),
        author: "Emmanuel AMELA",
        status: "published"
      }
    ];
    
    localStorage.setItem('adminResources', JSON.stringify(demoResources));
  }
};

// Fonction pour obtenir l'utilisateur courant
export const getCurrentUser = () => {
  const savedUser = localStorage.getItem('currentUser');
  return savedUser ? JSON.parse(savedUser) : null;
};

// Fonction pour vérifier si l'utilisateur est admin
export const isAdmin = () => {
  const user = getCurrentUser();
  return user && user.userType === 'admin';
};

// Fonction pour formater les dates
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

// Fonction pour formater les heures
export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};