/**
 * ScheduleMentoring component - Formulaire de planification d'une session de mentorat
 * Version responsive
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScheduleMentoring = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [sessionData, setSessionData] = useState({
    topic: "",
    description: "",
    dateTime: "",
    duration: "60",
    sessionType: "video",
    objectives: "",
    projectId: "",
    urgency: "medium"
  });
  const [userProjects, setUserProjects] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Détecter la taille de l'écran
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
      navigate('/');
      return;
    }
    
    const user = JSON.parse(savedUser);
    setCurrentUser(user);
    
    // Charger les projets de l'utilisateur
    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const userProjects = allProjects.filter(p => p.clientId === user.id);
    setUserProjects(userProjects);
    
    // Générer des créneaux disponibles (démonstration)
    generateAvailableSlots();
    
    // Définir la date par défaut (demain à 14h)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(14, 0, 0, 0);
    
    setSessionData(prev => ({
      ...prev,
      dateTime: tomorrow.toISOString().slice(0, 16)
    }));
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [navigate]);

  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    
    // Générer des créneaux pour les 7 prochains jours
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Ajouter des créneaux à 9h, 14h, 16h
      [9, 14, 16].forEach(hour => {
        const slotDate = new Date(date);
        slotDate.setHours(hour, 0, 0, 0);
        
        slots.push({
          value: slotDate.toISOString().slice(0, 16),
          label: `${slotDate.toLocaleDateString('fr-FR', { 
            day: '2-digit', 
            month: 'short' 
          })} à ${hour}h00`
        });
      });
    }
    
    setAvailableSlots(slots);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!sessionData.topic.trim()) {
      alert("Veuillez donner un titre à votre session");
      return;
    }
    
    if (!sessionData.dateTime) {
      alert("Veuillez sélectionner une date et heure");
      return;
    }
    
    if (!sessionData.description.trim()) {
      alert("Veuillez décrire l'objectif de la session");
      return;
    }
    
    setIsSubmitting(true);
    
    // Générer un lien de réunion (simulé)
    const meetingLink = `https://meet.google.com/${Math.random().toString(36).substring(7)}`;
    
    const newSession = {
      id: Date.now(),
      clientId: currentUser.id,
      clientName: currentUser.name,
      clientEmail: currentUser.email,
      ...sessionData,
      link: meetingLink,
      status: "scheduled",
      createdAt: new Date().toISOString(),
      confirmed: false
    };

    // Sauvegarder la session
    const existingSessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
    const updatedSessions = [...existingSessions, newSession];
    localStorage.setItem('mentoringSessions', JSON.stringify(updatedSessions));

    // Simuler un délai d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Session planifiée avec succès !\n\nEmmanuel a été notifié et vous enverra une confirmation.\n\nLien de la réunion : ${meetingLink}`);
      navigate('/mentoring');
    }, 1500);
  };

  const handleQuickSelect = (duration, type) => {
    setSessionData(prev => ({
      ...prev,
      duration: duration.toString(),
      sessionType: type
    }));
  };

  if (!currentUser) {
    return (
      <div style={{ 
        paddingTop: isMobile ? "4.5rem" : "5rem",
        textAlign: "center", 
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa"
      }}>
        <h2 style={{ color: "#2c3e50" }}>Chargement...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: isMobile ? "4.5rem" : "5rem",
      paddingLeft: isMobile ? "0.8rem" : "1rem",
      paddingRight: isMobile ? "0.8rem" : "1rem",
      paddingBottom: "2rem",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa"
    }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto"
      }}>
        <div style={{ 
          backgroundColor: "white", 
          padding: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "2rem", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
        }}>
          <h1 style={{ 
            color: "#2c3e50", 
            marginBottom: "0.5rem",
            fontSize: isMobile ? "1.5rem" : isTablet ? "1.8rem" : "2rem",
            lineHeight: "1.2"
          }}>
            Planifier une session de mentorat
          </h1>
          <p style={{ 
            color: "#5d6d7e", 
            marginBottom: "1.5rem",
            fontSize: isMobile ? "0.95rem" : "1rem",
            lineHeight: "1.4"
          }}>
            Remplissez les détails de votre session. Emmanuel vous confirmera le rendez-vous par email.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Informations de base */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "1px solid #eee",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Informations de la session
              </h3>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Sujet / Titre de la session *
                </label>
                <input
                  type="text"
                  value={sessionData.topic}
                  onChange={(e) => setSessionData({...sessionData, topic: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.95rem" : "1rem"
                  }}
                  placeholder="Ex: Review du code de mon API, Problème de performance React, etc."
                  required
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Description détaillée *
                </label>
                <textarea
                  value={sessionData.description}
                  onChange={(e) => setSessionData({...sessionData, description: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    minHeight: isMobile ? "100px" : "120px",
                    resize: "vertical"
                  }}
                  placeholder="Décrivez ce que vous souhaitez aborder pendant la session, les problèmes spécifiques, les attentes..."
                  required
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Objectifs de la session
                </label>
                <textarea
                  value={sessionData.objectives}
                  onChange={(e) => setSessionData({...sessionData, objectives: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    minHeight: isMobile ? "80px" : "100px",
                    resize: "vertical"
                  }}
                  placeholder="Quels sont les résultats attendus de cette session ?"
                />
              </div>
            </div>

            {/* Date et durée */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "1px solid #eee",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Date, heure et durée
              </h3>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "1rem", 
                marginBottom: "1rem" 
              }}>
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Date et heure *
                  </label>
                  <input
                    type="datetime-local"
                    value={sessionData.dateTime}
                    onChange={(e) => setSessionData({...sessionData, dateTime: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    required
                  />
                  <div style={{ 
                    fontSize: isMobile ? "0.8rem" : "0.85rem", 
                    color: "#7f8c8d", 
                    marginTop: "0.5rem" 
                  }}>
                    Créneaux recommandés disponibles :
                    <div style={{ 
                      marginTop: "0.3rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.3rem"
                    }}>
                      {availableSlots.slice(0, isMobile ? 2 : 3).map(slot => (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => setSessionData({...sessionData, dateTime: slot.value})}
                          style={{
                            backgroundColor: sessionData.dateTime === slot.value ? "#3498db" : "#f8f9fa",
                            color: sessionData.dateTime === slot.value ? "white" : "#3498db",
                            border: `1px solid ${sessionData.dateTime === slot.value ? "#3498db" : "#3498db"}`,
                            padding: "0.3rem 0.6rem",
                            borderRadius: "12px",
                            fontSize: isMobile ? "0.75rem" : "0.8rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Durée (minutes) *
                  </label>
                  <select
                    value={sessionData.duration}
                    onChange={(e) => setSessionData({...sessionData, duration: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem",
                      backgroundColor: "white",
                      cursor: "pointer"
                    }}
                    required
                  >
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                  
                  <div style={{ marginTop: "1rem" }}>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      color: "#5d6d7e",
                      fontSize: isMobile ? "0.9rem" : "1rem"
                    }}>
                      Type de session *
                    </label>
                    <select
                      value={sessionData.sessionType}
                      onChange={(e) => setSessionData({...sessionData, sessionType: e.target.value})}
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        backgroundColor: "white",
                        cursor: "pointer"
                      }}
                      required
                    >
                      <option value="video">Vidéo (Google Meet)</option>
                      <option value="audio">Audio seulement</option>
                      <option value="chat">Chat/écrit</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Options rapides */}
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Options rapides :
                </label>
                <div style={{ 
                  display: "flex", 
                  gap: "0.5rem", 
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "center" : "flex-start"
                }}>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(60, 'video')}
                    style={{
                      backgroundColor: sessionData.duration === '60' && sessionData.sessionType === 'video' ? '#3498db' : '#f8f9fa',
                      color: sessionData.duration === '60' && sessionData.sessionType === 'video' ? 'white' : '#5d6d7e',
                      border: "1px solid #ddd",
                      padding: isMobile ? "0.6rem 0.8rem" : "0.5rem 1rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      transition: "all 0.2s ease",
                      flex: isMobile ? "1" : "none",
                      minWidth: isMobile ? "120px" : "auto"
                    }}
                  >
                    Code Review
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(45, 'audio')}
                    style={{
                      backgroundColor: sessionData.duration === '45' && sessionData.sessionType === 'audio' ? '#3498db' : '#f8f9fa',
                      color: sessionData.duration === '45' && sessionData.sessionType === 'audio' ? 'white' : '#5d6d7e',
                      border: "1px solid #ddd",
                      padding: isMobile ? "0.6rem 0.8rem" : "0.5rem 1rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      transition: "all 0.2s ease",
                      flex: isMobile ? "1" : "none",
                      minWidth: isMobile ? "120px" : "auto"
                    }}
                  >
                    Question rapide
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(90, 'video')}
                    style={{
                      backgroundColor: sessionData.duration === '90' && sessionData.sessionType === 'video' ? '#3498db' : '#f8f9fa',
                      color: sessionData.duration === '90' && sessionData.sessionType === 'video' ? 'white' : '#5d6d7e',
                      border: "1px solid #ddd",
                      padding: isMobile ? "0.6rem 0.8rem" : "0.5rem 1rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      transition: "all 0.2s ease",
                      flex: isMobile ? "1" : "none",
                      minWidth: isMobile ? "120px" : "auto"
                    }}
                  >
                    Design d'architecture
                  </button>
                </div>
              </div>
            </div>

            {/* Projet associé et urgence */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "1px solid #eee",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Contexte et priorité
              </h3>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "1rem" 
              }}>
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Associer à un projet (optionnel)
                  </label>
                  <select
                    value={sessionData.projectId}
                    onChange={(e) => setSessionData({...sessionData, projectId: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem",
                      backgroundColor: "white",
                      cursor: "pointer"
                    }}
                  >
                    <option value="">Aucun projet spécifique</option>
                    {userProjects.map(project => (
                      <option key={project.id} value={project.id}>
                        {project.title.length > 40 ? project.title.substring(0, 40) + '...' : project.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Niveau d'urgence
                  </label>
                  <select
                    value={sessionData.urgency}
                    onChange={(e) => setSessionData({...sessionData, urgency: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem",
                      backgroundColor: "white",
                      cursor: "pointer"
                    }}
                  >
                    <option value="low">Faible (question générale)</option>
                    <option value="medium">Moyen (bloquant mais pas urgent)</option>
                    <option value="high">Élevé (bloquant pour la progression)</option>
                    <option value="critical">Critique (production impactée)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Informations de confirmation */}
            <div style={{ 
              backgroundColor: "#e8f4fc", 
              padding: isMobile ? "1rem" : "1.2rem", 
              borderRadius: "10px",
              marginBottom: "1.5rem",
              borderLeft: "4px solid #3498db"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "0.5rem",
                fontSize: isMobile ? "1rem" : "1.1rem"
              }}>
                À savoir avant de planifier :
              </h4>
              <ul style={{ 
                color: "#5d6d7e", 
                margin: 0, 
                paddingLeft: "1.2rem", 
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                lineHeight: "1.5"
              }}>
                <li>Emmanuel confirmera ou proposera un autre créneau dans les 24h</li>
                <li>Préparez à l'avance vos questions et fichiers à partager</li>
                <li>Un lien de réunion vous sera envoyé par email</li>
                <li>Annulation possible jusqu'à 2h avant la session</li>
              </ul>
            </div>

            {/* Boutons d'action */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginTop: "1.5rem",
              paddingTop: "1.2rem",
              borderTop: "1px solid #eee",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "0.8rem" : "0"
            }}>
              <button
                type="button"
                onClick={() => navigate('/mentoring')}
                style={{
                  backgroundColor: "transparent",
                  color: "#7f8c8d",
                  border: "1px solid #ddd",
                  padding: isMobile ? "0.7rem 1rem" : "0.8rem 1.5rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                Annuler
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? "#95a5a6" : "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: isMobile ? "0.7rem 1rem" : "0.8rem 2rem",
                  borderRadius: "6px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "500",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "all 0.2s ease",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                {isSubmitting ? "Planification en cours..." : "Planifier la session"}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Styles CSS responsives */}
      <style>{`
        /* Styles pour les petits écrans */
        @media (max-width: 768px) {
          .schedule-container {
            padding-top: 4.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .form-container {
            padding: 1rem !important;
          }
          
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          
          .quick-options {
            flex-direction: column !important;
          }
          
          .quick-options button {
            width: 100% !important;
          }
          
          .action-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          .action-buttons button {
            width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .schedule-container {
            padding-top: 4rem !important;
          }
          
          .form-container {
            padding: 0.8rem !important;
          }
          
          h1 {
            font-size: 1.4rem !important;
            text-align: center;
          }
          
          .section-title {
            font-size: 1.1rem !important;
          }
        }
        
        /* Améliorations pour tablettes */
        @media (min-width: 769px) and (max-width: 1024px) {
          .form-container {
            padding: 1.5rem !important;
          }
          
          .form-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem !important;
          }
        }
        
        /* Amélioration de l'expérience utilisateur */
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #3498db !important;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
          transition: all 0.2s ease;
        }
        
        button:active {
          transform: translateY(1px);
        }
        
        /* Style pour les boutons de slot rapide au survol */
        .slot-button:hover {
          background-color: #3498db !important;
          color: white !important;
        }
        
        /* Amélioration de la lisibilité */
        label {
          user-select: none;
        }
        
        /* Ajustement pour les champs date sur mobile */
        input[type="datetime-local"] {
          min-height: 44px; /* Taille minimum pour le touch sur mobile */
        }
        
        /* Styles pour les options de sélection */
        option {
          padding: 0.5rem;
        }
        
        /* Animation pour le bouton de soumission */
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        button[type="submit"]:disabled {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default ScheduleMentoring;