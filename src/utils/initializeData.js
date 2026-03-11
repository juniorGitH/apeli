/**
 * Utilitaires pour initialiser les données du système
 */

export const initializeData = () => {
  // Créer l'admin par défaut s'il n'existe pas
  const adminUser = {
    id: 1,
    name: "Admin Apeli",
    email: "admin@apeli.com",
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