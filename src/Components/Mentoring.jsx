/**
 * Mentoring component - Page de mentorat
 * Version responsive
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Mentoring = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [mentoringSessions, setMentoringSessions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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
    
    // Charger les sessions de mentorat
    const allSessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
    const userSessions = allSessions.filter(s => s.clientId === user.id || user.userType === 'admin');
    setMentoringSessions(userSessions);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [navigate]);

  const handleDeleteSession = (sessionId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette session ?")) {
      const allSessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
      const updatedSessions = allSessions.filter(s => s.id !== sessionId);
      localStorage.setItem('mentoringSessions', JSON.stringify(updatedSessions));
      
      const userSessions = updatedSessions.filter(s => 
        s.clientId === currentUser.id || currentUser.userType === 'admin'
      );
      setMentoringSessions(userSessions);
    }
  };

  const getSessionStatus = (dateTime) => {
    const now = new Date();
    const sessionDate = new Date(dateTime);
    return sessionDate < now ? 'past' : 'upcoming';
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
        maxWidth: "1400px", 
        margin: "0 auto"
      }}>
        {/* En-tête */}
        <div style={{ 
          backgroundColor: "white", 
          padding: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "2rem", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          marginBottom: isMobile ? "1.2rem" : "1.5rem"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start", 
            marginBottom: isMobile ? "1rem" : "1.5rem",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem"
          }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ 
                margin: 0, 
                color: "#2c3e50",
                fontSize: isMobile ? "1.5rem" : isTablet ? "1.8rem" : "2rem",
                lineHeight: "1.2"
              }}>
                Service de Mentorat
              </h1>
              <p style={{ 
                color: "#5d6d7e", 
                marginTop: "0.5rem",
                fontSize: isMobile ? "0.9rem" : "1rem",
                lineHeight: "1.4"
              }}>
                Accompagnement personnalisé pour vos projets de développement
              </p>
            </div>
            
            <button
              onClick={() => navigate('/schedule-mentoring')}
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                padding: isMobile ? "0.7rem 1.2rem" : "0.8rem 1.5rem",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: isMobile ? "0.9rem" : "1rem",
                whiteSpace: "nowrap",
                width: isMobile ? "100%" : "auto"
              }}
            >
              Planifier une session
            </button>
          </div>

          {/* Description du service */}
          <div style={{ 
            backgroundColor: "#e8f4fc", 
            padding: isMobile ? "1rem" : "1.5rem", 
            borderRadius: "10px",
            marginBottom: isMobile ? "1.2rem" : "1.5rem"
          }}>
            <h3 style={{ 
              color: "#2c3e50", 
              marginBottom: "1rem",
              fontSize: isMobile ? "1.1rem" : "1.3rem"
            }}>
              Comment fonctionne le mentorat ?
            </h3>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(240px, 1fr))", 
              gap: "1.2rem"
            }}>
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ 
                  width: isMobile ? "40px" : "50px", 
                  height: isMobile ? "40px" : "50px", 
                  backgroundColor: "#3498db", 
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  marginBottom: "0.8rem"
                }}>
                  1
                </div>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Planification
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  lineHeight: "1.4",
                  margin: 0
                }}>
                  Choisissez une date et un créneau horaire qui vous convient.
                </p>
              </div>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ 
                  width: isMobile ? "40px" : "50px", 
                  height: isMobile ? "40px" : "50px", 
                  backgroundColor: "#3498db", 
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  marginBottom: "0.8rem"
                }}>
                  2
                </div>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Préparation
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  lineHeight: "1.4",
                  margin: 0
                }}>
                  Préparez vos questions et problèmes techniques à aborder.
                </p>
              </div>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ 
                  width: isMobile ? "40px" : "50px", 
                  height: isMobile ? "40px" : "50px", 
                  backgroundColor: "#3498db", 
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  marginBottom: "0.8rem"
                }}>
                  3
                </div>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Session
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  lineHeight: "1.4",
                  margin: 0
                }}>
                  Échange en direct avec Emmanuel pour résoudre vos problèmes.
                </p>
              </div>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start"
              }}>
                <div style={{ 
                  width: isMobile ? "40px" : "50px", 
                  height: isMobile ? "40px" : "50px", 
                  backgroundColor: "#3498db", 
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  marginBottom: "0.8rem"
                }}>
                  4
                </div>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Suivi
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  lineHeight: "1.4",
                  margin: 0
                }}>
                  Recevez des ressources et conseils pour continuer à progresser.
                </p>
              </div>
            </div>
          </div>

          {/* Types de mentorat */}
          <div>
            <h3 style={{ 
              color: "#2c3e50", 
              marginBottom: isMobile ? "0.8rem" : "1rem",
              fontSize: isMobile ? "1.1rem" : "1.3rem"
            }}>
              Types de sessions disponibles
            </h3>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "1.2rem"
            }}>
              <div style={{ 
                backgroundColor: "#f8f9fa", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                borderTop: "4px solid #3498db",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Code Review
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.9rem", 
                  marginBottom: "1rem",
                  lineHeight: "1.4",
                  flex: 1
                }}>
                  Analyse détaillée de votre code avec suggestions d'amélioration et bonnes pratiques.
                </p>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  flexWrap: "wrap"
                }}>
                  <span style={{ 
                    backgroundColor: "#e8f4fc",
                    color: "#3498db",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: isMobile ? "0.75rem" : "0.8rem",
                    whiteSpace: "nowrap"
                  }}>
                    60-90 min
                  </span>
                  <span style={{ 
                    backgroundColor: "#e8f6f3",
                    color: "#2ecc71",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: isMobile ? "0.75rem" : "0.8rem",
                    whiteSpace: "nowrap"
                  }}>
                    Recommandé
                  </span>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: "#f8f9fa", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                borderTop: "4px solid #9b59b6",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Architecture & Design
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.9rem", 
                  marginBottom: "1rem",
                  lineHeight: "1.4",
                  flex: 1
                }}>
                  Conseil sur l'architecture de votre projet et choix technologiques.
                </p>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  flexWrap: "wrap"
                }}>
                  <span style={{ 
                    backgroundColor: "#f4ecf7",
                    color: "#9b59b6",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: isMobile ? "0.75rem" : "0.8rem",
                    whiteSpace: "nowrap"
                  }}>
                    90-120 min
                  </span>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: "#f8f9fa", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                borderTop: "4px solid #2ecc71",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}>
                <h4 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "0.95rem" : "1.05rem"
                }}>
                  Debugging & Problèmes
                </h4>
                <p style={{ 
                  color: "#5d6d7e", 
                  fontSize: isMobile ? "0.85rem" : "0.9rem", 
                  marginBottom: "1rem",
                  lineHeight: "1.4",
                  flex: 1
                }}>
                  Aide à la résolution de problèmes techniques spécifiques.
                </p>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem",
                  flexWrap: "wrap"
                }}>
                  <span style={{ 
                    backgroundColor: "#e8f6f3",
                    color: "#2ecc71",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: isMobile ? "0.75rem" : "0.8rem",
                    whiteSpace: "nowrap"
                  }}>
                    45-60 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions planifiées */}
        <div style={{ 
          backgroundColor: "white", 
          padding: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "2rem", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: isMobile ? "1rem" : "1.5rem",
            flexDirection: isMobile ? "column" : "row",
            gap: "0.8rem"
          }}>
            <h2 style={{ 
              margin: 0, 
              color: "#2c3e50",
              fontSize: isMobile ? "1.3rem" : isTablet ? "1.5rem" : "1.8rem",
              textAlign: isMobile ? "center" : "left"
            }}>
              Mes sessions de mentorat
            </h2>
            
            <span style={{ 
              backgroundColor: "#f8f9fa",
              color: "#5d6d7e",
              padding: "0.4rem 0.8rem",
              borderRadius: "16px",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              whiteSpace: "nowrap"
            }}>
              {mentoringSessions.length} session(s)
            </span>
          </div>

          {mentoringSessions.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: isMobile ? "1.5rem" : "2rem", 
              color: "#7f8c8d" 
            }}>
              <p style={{ 
                fontSize: isMobile ? "0.95rem" : "1rem",
                marginBottom: "1rem"
              }}>
                Aucune session de mentorat planifiée.
              </p>
              <button
                onClick={() => navigate('/schedule-mentoring')}
                style={{
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "500",
                  minWidth: isMobile ? "100%" : "200px"
                }}
              >
                Planifier ma première session
              </button>
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))", 
              gap: "1.2rem"
            }}>
              {mentoringSessions.map(session => {
                const sessionStatus = getSessionStatus(session.dateTime);
                const isPast = sessionStatus === 'past';
                
                return (
                  <div 
                    key={session.id}
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: isMobile ? "1rem" : "1.2rem",
                      borderRadius: "10px",
                      borderLeft: `4px solid ${isPast ? '#95a5a6' : '#3498db'}`,
                      opacity: isPast ? 0.8 : 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "flex-start", 
                      marginBottom: "0.8rem"
                    }}>
                      <h3 style={{ 
                        margin: 0, 
                        color: "#2c3e50", 
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        lineHeight: "1.3",
                        flex: 1,
                        marginRight: "0.5rem"
                      }}>
                        {session.topic}
                      </h3>
                      <span style={{ 
                        backgroundColor: isPast ? '#95a5a6' : '#3498db',
                        color: "white",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "12px",
                        fontSize: isMobile ? "0.75rem" : "0.8rem",
                        whiteSpace: "nowrap"
                      }}>
                        {isPast ? 'Passée' : 'À venir'}
                      </span>
                    </div>
                    
                    <p style={{ 
                      color: "#5d6d7e", 
                      marginBottom: "0.8rem", 
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      lineHeight: "1.4",
                      flex: 1
                    }}>
                      {session.description}
                    </p>
                    
                    <div style={{ marginBottom: "0.4rem" }}>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#7f8c8d", 
                        fontSize: isMobile ? "0.8rem" : "0.85rem" 
                      }}>
                        Date et heure: 
                      </span>
                      <span style={{ 
                        color: "#2c3e50", 
                        fontSize: isMobile ? "0.8rem" : "0.85rem",
                        marginLeft: "0.3rem"
                      }}>
                        {new Date(session.dateTime).toLocaleDateString('fr-FR', { 
                          day: '2-digit', 
                          month: 'short',
                          year: 'numeric'
                        })} à {new Date(session.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    <div style={{ marginBottom: "0.4rem" }}>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#7f8c8d", 
                        fontSize: isMobile ? "0.8rem" : "0.85rem" 
                      }}>
                        Durée: 
                      </span>
                      <span style={{ 
                        color: "#2c3e50", 
                        fontSize: isMobile ? "0.8rem" : "0.85rem",
                        marginLeft: "0.3rem"
                      }}>
                        {session.duration} minutes
                      </span>
                    </div>
                    
                    <div style={{ marginBottom: "0.8rem" }}>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#7f8c8d", 
                        fontSize: isMobile ? "0.8rem" : "0.85rem" 
                      }}>
                        Type: 
                      </span>
                      <span style={{ 
                        backgroundColor: "#e8f4fc",
                        color: "#3498db",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "12px",
                        fontSize: isMobile ? "0.75rem" : "0.8rem",
                        marginLeft: "0.3rem"
                      }}>
                        {session.sessionType === 'video' ? 'Vidéo' : 'Audio'}
                      </span>
                    </div>
                    
                    {session.link && !isPast && (
                      <div style={{ marginBottom: "0.8rem" }}>
                        <a 
                          href={session.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            color: "#3498db",
                            textDecoration: "none",
                            fontSize: isMobile ? "0.8rem" : "0.85rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            fontWeight: "500"
                          }}
                        >
                          <span>🔗 Lien de connexion</span>
                        </a>
                      </div>
                    )}
                    
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center", 
                      marginTop: "auto",
                      paddingTop: "0.8rem", 
                      borderTop: "1px solid #eee" 
                    }}>
                      <div>
                        <span style={{ 
                          fontSize: isMobile ? "0.7rem" : "0.75rem", 
                          color: "#7f8c8d" 
                        }}>
                          Créée le {new Date(session.createdAt).toLocaleDateString('fr-FR', { 
                            day: '2-digit', 
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteSession(session.id)}
                        style={{
                          backgroundColor: "#e74c3c",
                          color: "white",
                          border: "none",
                          padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: isMobile ? "0.8rem" : "0.85rem",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Styles CSS responsives */}
      <style>{`
        /* Styles pour les petits écrans */
        @media (max-width: 768px) {
          .mentoring-container {
            padding-top: 4.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .types-grid {
            grid-template-columns: 1fr !important;
          }
          
          .sessions-grid {
            grid-template-columns: 1fr !important;
          }
          
          .header-section {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          .header-section button {
            width: 100% !important;
            margin-top: 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .mentoring-container {
            padding-top: 4rem !important;
          }
          
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          
          .step-item {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          
          .step-number {
            flex-shrink: 0 !important;
          }
        }
        
        /* Améliorations pour tablettes */
        @media (min-width: 769px) and (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .sessions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Animation pour les cartes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .session-card {
          animation: fadeInUp 0.3s ease forwards;
          animation-delay: calc(var(--card-index, 0) * 0.1s);
        }
        
        /* Amélioration du scroll sur mobile */
        .mentoring-container {
          overflow-x: hidden;
        }
        
        /* Styles pour les liens */
        a:hover {
          text-decoration: underline;
        }
        
        /* Styles pour les boutons au survol */
        button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }
        
        /* Amélioration de la lisibilité */
        @media (max-width: 768px) {
          h1, h2, h3, h4 {
            line-height: 1.2 !important;
          }
          
          p {
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Mentoring;