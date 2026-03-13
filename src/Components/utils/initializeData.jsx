/**
 * Utilitaires pour initialiser les données du système
 * L'authentification est désormais gérée par le backend API
 */

export const initializeData = () => {
  // Les utilisateurs sont gérés par le backend — plus de seeding localStorage
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