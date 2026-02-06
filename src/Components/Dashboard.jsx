/**
 * Dashboard component - Tableau de bord pour les clients
 * Version responsive optimisée
 */
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userProjects, setUserProjects] = useState([]);
  const [mentoringSessions, setMentoringSessions] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");
  const [stats, setStats] = useState({
    totalProjects: 0,
    completedProjects: 0,
    inProgressProjects: 0,
    upcomingSessions: 0
  });

  useEffect(() => {
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
    
    // Charger les sessions de mentorat
    const allSessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
    const userSessions = allSessions.filter(s => s.clientId === user.id);
    setMentoringSessions(userSessions);
    
    // Calculer les statistiques
    setStats({
      totalProjects: userProjects.length,
      completedProjects: userProjects.filter(p => p.status === 'completed').length,
      inProgressProjects: userProjects.filter(p => p.status === 'in-progress').length,
      upcomingSessions: userSessions.filter(s => new Date(s.dateTime) > new Date()).length
    });
  }, [navigate]);

  const calculateProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
      const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      const updatedProjects = allProjects.filter(p => p.id !== projectId);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      
      const userProjects = updatedProjects.filter(p => p.clientId === currentUser.id);
      setUserProjects(userProjects);
      
      setStats({
        ...stats,
        totalProjects: userProjects.length,
        completedProjects: userProjects.filter(p => p.status === 'completed').length,
        inProgressProjects: userProjects.filter(p => p.status === 'in-progress').length
      });
    }
  };

  if (!currentUser) {
    return (
      <div style={{ 
        paddingTop: "clamp(4rem, 8vw, 6rem)", 
        textAlign: "center", 
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2>Chargement...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: "clamp(4.5rem, 7vw, 5rem)", // Réduit pour s'aligner sous la navbar
      paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
      paddingRight: "clamp(0.5rem, 2vw, 1rem)",
      paddingBottom: "clamp(1.5rem, 3vw, 2rem)",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa", // Fond léger pour toute la page
      overflowX: "hidden"
    }}>
      <div style={{ 
        maxWidth: "1400px", // Largeur maximale augmentée
        margin: "0 auto",
        width: "100%"
      }}>
        {/* En-tête avec statistiques */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "clamp(1rem, 2vw, 1.5rem)", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          marginBottom: "clamp(1rem, 2vw, 1.5rem)",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start", 
            marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            flexDirection: "column",
            gap: "clamp(0.8rem, 1.5vw, 1rem)"
          }}>
            <div style={{ width: "100%" }}>
              <h1 style={{ 
                margin: 0, 
                color: "#2c3e50",
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                lineHeight: "1.2"
              }}>
                Mon Tableau de Bord
              </h1>
              <p style={{ 
                color: "#5d6d7e", 
                marginTop: "0.5rem",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                lineHeight: "1.4"
              }}>
                Bonjour <strong>{currentUser.name}</strong>, suivez ici l'avancement de vos projets
              </p>
            </div>
            <div style={{ 
              display: "flex", 
              gap: "clamp(0.5rem, 1.5vw, 0.8rem)", 
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "flex-start"
            }}>
              <button
                onClick={() => navigate('/new-project')}
                style={{
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: "clamp(0.6rem, 1.5vw, 0.7rem) clamp(1rem, 2vw, 1.2rem)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                  flex: "1 1 auto",
                  minWidth: "140px",
                  maxWidth: "100%"
                }}
              >
                + Nouveau Projet
              </button>
              <button
                onClick={() => navigate('/schedule-mentoring')}
                style={{
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  padding: "clamp(0.6rem, 1.5vw, 0.7rem) clamp(1rem, 2vw, 1.2rem)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                  flex: "1 1 auto",
                  minWidth: "140px",
                  maxWidth: "100%"
                }}
              >
                Planifier Mentorat
              </button>
              <button
                onClick={() => navigate('/profile')}
                style={{
                  backgroundColor: "#9b59b6",
                  color: "white",
                  border: "none",
                  padding: "clamp(0.6rem, 1.5vw, 0.7rem) clamp(1rem, 2vw, 1.2rem)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                  flex: "1 1 auto",
                  minWidth: "140px",
                  maxWidth: "100%"
                }}
              >
                Mon Profil
              </button>
            </div>
          </div>

          {/* Statistiques */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", 
            gap: "clamp(0.6rem, 1.5vw, 0.8rem)",
            width: "100%"
          }}>
            <div style={{ 
              backgroundColor: "#e8f4fc", 
              padding: "clamp(0.8rem, 1.5vw, 1rem)", 
              borderRadius: "8px",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <h3 style={{ 
                color: "#3498db", 
                margin: 0, 
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                lineHeight: "1.2"
              }}>
                {stats.totalProjects}
              </h3>
              <p style={{ 
                color: "#5d6d7e", 
                margin: "0.3rem 0 0 0", 
                fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                lineHeight: "1.2"
              }}>
                Projets
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: "#e8f6f3", 
              padding: "clamp(0.8rem, 1.5vw, 1rem)", 
              borderRadius: "8px",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <h3 style={{ 
                color: "#2ecc71", 
                margin: 0, 
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                lineHeight: "1.2"
              }}>
                {stats.completedProjects}
              </h3>
              <p style={{ 
                color: "#5d6d7e", 
                margin: "0.3rem 0 0 0", 
                fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                lineHeight: "1.2"
              }}>
                Terminés
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: "#fef9e7", 
              padding: "clamp(0.8rem, 1.5vw, 1rem)", 
              borderRadius: "8px",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <h3 style={{ 
                color: "#f39c12", 
                margin: 0, 
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                lineHeight: "1.2"
              }}>
                {stats.inProgressProjects}
              </h3>
              <p style={{ 
                color: "#5d6d7e", 
                margin: "0.3rem 0 0 0", 
                fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                lineHeight: "1.2"
              }}>
                En cours
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: "#f4ecf7", 
              padding: "clamp(0.8rem, 1.5vw, 1rem)", 
              borderRadius: "8px",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <h3 style={{ 
                color: "#9b59b6", 
                margin: 0, 
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                lineHeight: "1.2"
              }}>
                {stats.upcomingSessions}
              </h3>
              <p style={{ 
                color: "#5d6d7e", 
                margin: "0.3rem 0 0 0", 
                fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
                lineHeight: "1.2"
              }}>
                Sessions à venir
              </p>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div style={{ 
          display: "flex", 
          borderBottom: "1px solid #eee",
          marginBottom: "clamp(1rem, 2vw, 1.5rem)",
          flexWrap: "nowrap",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}>
          <button
            onClick={() => setActiveTab("projects")}
            style={{
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1rem, 2vw, 1.5rem)",
              background: activeTab === "projects" ? "#3498db" : "transparent",
              color: activeTab === "projects" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              whiteSpace: "nowrap",
              fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
              transition: "all 0.3s ease",
              flex: "0 0 auto",
              minWidth: "clamp(110px, 15vw, 120px)",
              textAlign: "center"
            }}
          >
            Mes Projets ({userProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("mentoring")}
            style={{
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1rem, 2vw, 1.5rem)",
              background: activeTab === "mentoring" ? "#3498db" : "transparent",
              color: activeTab === "mentoring" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              whiteSpace: "nowrap",
              fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
              transition: "all 0.3s ease",
              flex: "0 0 auto",
              minWidth: "clamp(110px, 15vw, 120px)",
              textAlign: "center"
            }}
          >
            Mentorat ({mentoringSessions.length})
          </button>
        </div>

        {/* Contenu des onglets */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "clamp(1rem, 2vw, 1.5rem)", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          width: "100%",
          boxSizing: "border-box"
        }}>
          {activeTab === "projects" && (
            <div>
              {userProjects.length === 0 ? (
                <div style={{ 
                  textAlign: "center", 
                  padding: "clamp(1.5rem, 3vw, 2rem) clamp(0.8rem, 2vw, 1rem)", 
                  color: "#7f8c8d" 
                }}>
                  <h3 style={{ 
                    color: "#5d6d7e", 
                    marginBottom: "clamp(0.8rem, 1.5vw, 1rem)",
                    fontSize: "clamp(1.1rem, 2vw, 1.3rem)"
                  }}>
                    Aucun projet pour le moment
                  </h3>
                  <p style={{ 
                    marginBottom: "clamp(1rem, 2vw, 1.5rem)", 
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                    lineHeight: "1.5"
                  }}>
                    Commencez par créer votre premier projet !
                  </p>
                  <button
                    onClick={() => navigate('/new-project')}
                    style={{
                      backgroundColor: "#3498db",
                      color: "white",
                      border: "none",
                      padding: "clamp(0.7rem, 1.5vw, 0.8rem) clamp(1.2rem, 2.5vw, 1.5rem)",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                      fontWeight: "500",
                      minWidth: "clamp(180px, 40vw, 220px)"
                    }}
                  >
                    Créer mon premier projet
                  </button>
                </div>
              ) : (
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
                  gap: "clamp(0.8rem, 1.5vw, 1.2rem)",
                  width: "100%"
                }}>
                  {userProjects.map(project => (
                    <div 
                      key={project.id}
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "clamp(1rem, 1.5vw, 1.2rem)",
                        borderRadius: "8px",
                        borderLeft: `4px solid ${
                          project.priority === 'high' ? '#e74c3c' : 
                          project.priority === 'medium' ? '#f39c12' : '#2ecc71'
                        }`,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "220px"
                      }}
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "flex-start", 
                        marginBottom: "clamp(0.6rem, 1vw, 0.8rem)" 
                      }}>
                        <h3 style={{ 
                          margin: 0, 
                          color: "#2c3e50", 
                          fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                          lineHeight: "1.3",
                          flex: "1",
                          marginRight: "0.5rem",
                          wordBreak: "break-word"
                        }}>
                          {project.title}
                        </h3>
                        <span style={{ 
                          backgroundColor: project.status === 'completed' ? '#2ecc71' : 
                                         project.status === 'in-progress' ? '#3498db' : '#95a5a6',
                          color: "white",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "12px",
                          fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                          fontWeight: "500",
                          whiteSpace: "nowrap",
                          flexShrink: 0
                        }}>
                          {project.status === 'completed' ? 'Terminé' : 
                           project.status === 'in-progress' ? 'En cours' : 'En attente'}
                        </span>
                      </div>
                      
                      <p style={{ 
                        color: "#5d6d7e", 
                        marginBottom: "clamp(0.8rem, 1.2vw, 1rem)", 
                        fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                        flex: "1",
                        lineHeight: "1.4",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical"
                      }}>
                        {project.description}
                      </p>
                      
                      {/* Barre de progression */}
                      <div style={{ marginBottom: "clamp(0.6rem, 1vw, 0.8rem)" }}>
                        <div style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          marginBottom: "0.3rem" 
                        }}>
                          <span style={{ 
                            fontSize: "clamp(0.75rem, 1vw, 0.85rem)", 
                            color: "#7f8c8d" 
                          }}>
                            Progression
                          </span>
                          <span style={{ 
                            fontSize: "clamp(0.75rem, 1vw, 0.85rem)", 
                            color: "#3498db", 
                            fontWeight: "500" 
                          }}>
                            {calculateProgress(project.tasks)}%
                          </span>
                        </div>
                        <div style={{ 
                          height: "6px", 
                          backgroundColor: "#e1e8ed", 
                          borderRadius: "3px",
                          overflow: "hidden"
                        }}>
                          <div style={{ 
                            width: `${calculateProgress(project.tasks)}%`,
                            height: "100%",
                            backgroundColor: "#3498db",
                            transition: "width 0.3s ease"
                          }}></div>
                        </div>
                      </div>
                      
                      {/* Tâches */}
                      {project.tasks && project.tasks.length > 0 && (
                        <div style={{ marginBottom: "clamp(0.6rem, 1vw, 0.8rem)" }}>
                          <div style={{ 
                            fontSize: "clamp(0.75rem, 1vw, 0.85rem)", 
                            color: "#7f8c8d", 
                            marginBottom: "0.3rem" 
                          }}>
                            Tâches: {project.tasks.filter(t => t.status === 'completed').length}/{project.tasks.length}
                          </div>
                          <div style={{ 
                            display: "flex", 
                            gap: "0.2rem", 
                            flexWrap: "wrap",
                            alignItems: "center"
                          }}>
                            {project.tasks.slice(0, 3).map(task => (
                              <span 
                                key={task.id}
                                style={{
                                  backgroundColor: task.status === 'completed' ? '#2ecc71' : '#e1e8ed',
                                  color: task.status === 'completed' ? 'white' : '#5d6d7e',
                                  padding: "0.15rem 0.4rem",
                                  borderRadius: "3px",
                                  fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)",
                                  whiteSpace: "nowrap"
                                }}
                              >
                                {task.title}
                              </span>
                            ))}
                            {project.tasks.length > 3 && (
                              <span style={{ 
                                fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)", 
                                color: "#7f8c8d" 
                              }}>
                                +{project.tasks.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Dates et actions */}
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        marginTop: "auto",
                        paddingTop: "clamp(0.6rem, 1vw, 0.8rem)", 
                        borderTop: "1px solid #eee" 
                      }}>
                        <div style={{ flex: "1", minWidth: 0 }}>
                          <div style={{ 
                            fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)", 
                            color: "#7f8c8d", 
                            marginBottom: "0.2rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}>
                            Début: {new Date(project.startDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                          </div>
                          <div style={{ 
                            fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)", 
                            color: "#7f8c8d",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}>
                            Échéance: {new Date(project.deadline).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                          </div>
                        </div>
                        <div style={{ 
                          display: "flex", 
                          gap: "clamp(0.3rem, 0.5vw, 0.4rem)",
                          marginLeft: "0.5rem",
                          flexShrink: 0
                        }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/project/${project.id}`);
                            }}
                            style={{
                              backgroundColor: "transparent",
                              color: "#3498db",
                              border: "1px solid #3498db",
                              padding: "clamp(0.3rem, 0.5vw, 0.4rem) clamp(0.6rem, 1vw, 0.8rem)",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                              whiteSpace: "nowrap",
                              minWidth: "50px"
                            }}
                          >
                            Voir
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProject(project.id);
                            }}
                            style={{
                              backgroundColor: "#e74c3c",
                              color: "white",
                              border: "none",
                              padding: "clamp(0.3rem, 0.5vw, 0.4rem) clamp(0.6rem, 1vw, 0.8rem)",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                              whiteSpace: "nowrap",
                              minWidth: "60px"
                            }}
                          >
                            Suppr
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "mentoring" && (
            <div>
              <div style={{ 
                textAlign: "center", 
                marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                padding: "0.5rem"
              }}>
                <h3 style={{ 
                  color: "#2c3e50", 
                  marginBottom: "clamp(0.6rem, 1.2vw, 0.8rem)",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)"
                }}>
                  Service de Mentorat
                </h3>
                <p style={{ 
                  color: "#5d6d7e", 
                  maxWidth: "600px", 
                  margin: "0 auto clamp(0.8rem, 1.5vw, 1rem)",
                  fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                  lineHeight: "1.5"
                }}>
                  Bénéficiez d'un accompagnement personnalisé pour vos projets de développement.
                  Planifiez des sessions de mentorat avec Emmanuel pour progresser rapidement.
                </p>
                <button
                  onClick={() => navigate('/schedule-mentoring')}
                  style={{
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    padding: "clamp(0.7rem, 1.5vw, 0.8rem) clamp(1.2rem, 2.5vw, 1.5rem)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                    fontWeight: "500",
                    minWidth: "clamp(180px, 40vw, 200px)"
                  }}
                >
                  Planifier une session
                </button>
              </div>

              {mentoringSessions.length === 0 ? (
                <div style={{ 
                  textAlign: "center", 
                  padding: "clamp(1rem, 2vw, 1.5rem)", 
                  color: "#7f8c8d" 
                }}>
                  <p style={{ 
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                    lineHeight: "1.5"
                  }}>
                    Aucune session de mentorat planifiée.
                  </p>
                </div>
              ) : (
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
                  gap: "clamp(0.8rem, 1.5vw, 1.2rem)",
                  width: "100%"
                }}>
                  {mentoringSessions.map(session => (
                    <div 
                      key={session.id}
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "clamp(1rem, 1.5vw, 1.2rem)",
                        borderRadius: "8px",
                        borderLeft: `4px solid ${
                          new Date(session.dateTime) < new Date() ? '#95a5a6' : 
                          session.status === 'confirmed' ? '#2ecc71' : '#f39c12'
                        }`,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        minHeight: "220px"
                      }}
                    >
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "flex-start", 
                        marginBottom: "clamp(0.6rem, 1vw, 0.8rem)" 
                      }}>
                        <h4 style={{ 
                          margin: 0, 
                          color: "#2c3e50", 
                          fontSize: "clamp(0.95rem, 1.2vw, 1rem)",
                          flex: "1",
                          marginRight: "0.5rem",
                          wordBreak: "break-word",
                          lineHeight: "1.3"
                        }}>
                          {session.topic}
                        </h4>
                        <span style={{ 
                          backgroundColor: new Date(session.dateTime) < new Date() ? '#95a5a6' : 
                                         session.status === 'confirmed' ? '#2ecc71' : '#f39c12',
                          color: "white",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "12px",
                          fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                          whiteSpace: "nowrap",
                          flexShrink: 0
                        }}>
                          {new Date(session.dateTime) < new Date() ? 'Passée' : 
                           session.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                        </span>
                      </div>
                      
                      <p style={{ 
                        color: "#5d6d7e", 
                        marginBottom: "clamp(0.6rem, 1vw, 0.8rem)", 
                        fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
                        flex: "1",
                        lineHeight: "1.4",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical"
                      }}>
                        {session.description}
                      </p>
                      
                      <div style={{ marginBottom: "0.3rem" }}>
                        <span style={{ 
                          fontWeight: "500", 
                          color: "#7f8c8d", 
                          fontSize: "clamp(0.75rem, 1vw, 0.85rem)" 
                        }}>
                          Date: 
                        </span>
                        <span style={{ 
                          color: "#2c3e50", 
                          fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                          marginLeft: "0.3rem"
                        }}>
                          {new Date(session.dateTime).toLocaleDateString('fr-FR', { 
                            day: '2-digit', 
                            month: 'short',
                            year: 'numeric'
                          })} à {new Date(session.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "0.3rem" }}>
                        <span style={{ 
                          fontWeight: "500", 
                          color: "#7f8c8d", 
                          fontSize: "clamp(0.75rem, 1vw, 0.85rem)" 
                        }}>
                          Durée: 
                        </span>
                        <span style={{ 
                          color: "#2c3e50", 
                          fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                          marginLeft: "0.3rem"
                        }}>
                          {session.duration} min
                        </span>
                      </div>
                      
                      <div style={{ marginBottom: "clamp(0.8rem, 1.2vw, 1rem)" }}>
                        <span style={{ 
                          fontWeight: "500", 
                          color: "#7f8c8d", 
                          fontSize: "clamp(0.75rem, 1vw, 0.85rem)" 
                        }}>
                          Type: 
                        </span>
                        <span style={{ 
                          backgroundColor: "#e8f4fc",
                          color: "#3498db",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "12px",
                          fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                          marginLeft: "0.3rem"
                        }}>
                          {session.sessionType === 'video' ? 'Vidéo' : 'Audio'}
                        </span>
                      </div>
                      
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        marginTop: "auto",
                        paddingTop: "clamp(0.6rem, 1vw, 0.8rem)", 
                        borderTop: "1px solid #eee" 
                      }}>
                        <div>
                          {session.link && (
                            <a 
                              href={session.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{
                                color: "#3498db",
                                textDecoration: "none",
                                fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                                fontWeight: "500",
                                wordBreak: "break-all"
                              }}
                            >
                              Lien de connexion
                            </a>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            if (window.confirm("Voulez-vous annuler cette session ?")) {
                              const allSessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
                              const updatedSessions = allSessions.filter(s => s.id !== session.id);
                              localStorage.setItem('mentoringSessions', JSON.stringify(updatedSessions));
                              
                              const userSessions = updatedSessions.filter(s => s.clientId === currentUser.id);
                              setMentoringSessions(userSessions);
                              
                              setStats({
                                ...stats,
                                upcomingSessions: userSessions.filter(s => new Date(s.dateTime) > new Date()).length
                              });
                            }
                          }}
                          style={{
                            backgroundColor: "#e74c3c",
                            color: "white",
                            border: "none",
                            padding: "clamp(0.3rem, 0.5vw, 0.4rem) clamp(0.6rem, 1vw, 0.8rem)",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                            whiteSpace: "nowrap",
                            minWidth: "70px"
                          }}
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Styles CSS responsives améliorés */}
      <style>{`
        /* Styles pour les petits écrans */
        @media (max-width: 768px) {
          .dashboard-container {
            padding-top: 4.5rem !important;
            padding-left: 0.8rem !important;
            padding-right: 0.8rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.6rem !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
          
          .tabs-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          
          .tabs-container::-webkit-scrollbar {
            display: none;
          }
          
          /* Amélioration de l'affichage des cartes sur mobile */
          .project-card {
            min-height: 200px !important;
            padding: 0.9rem !important;
          }
          
          .project-title {
            font-size: 1rem !important;
            line-height: 1.2 !important;
          }
        }
        
        @media (max-width: 480px) {
          .dashboard-container {
            padding-top: 4rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .header-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .header-buttons button {
            width: 100%;
            min-width: 100% !important;
            margin-bottom: 0.5rem;
          }
          
          /* Cartes plus compactes sur très petit mobile */
          .project-card {
            min-height: 180px !important;
            padding: 0.8rem !important;
          }
          
          .project-actions {
            flex-direction: column;
            gap: 0.3rem;
          }
          
          .action-button {
            width: 100%;
            justify-content: center;
          }
        }
        
        /* Améliorations pour tablettes */
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .mentoring-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Pour les grands écrans */
        @media (min-width: 1400px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          
          .mentoring-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        
        /* Animation pour les cartes de projet */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card {
          animation: fadeIn 0.3s ease forwards;
        }
        
        /* Amélioration du scroll sur mobile */
        body {
          overflow-x: hidden;
        }
        
        /* Styles pour les boutons au survol */
        button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }
        
        /* Empêcher le zoom sur les inputs sur iOS */
        @media screen and (max-width: 992px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
        
        /* Améliorations pour le mode paysage */
        @media (max-height: 500px) and (orientation: landscape) {
          .dashboard-container {
            padding-top: 3.5rem !important;
          }
          
          .project-card {
            min-height: 160px !important;
          }
        }
        
        /* Support des très petits écrans */
        @media (max-width: 360px) {
          .dashboard-container {
            padding-left: 0.4rem !important;
            padding-right: 0.4rem !important;
          }
          
          .project-card {
            padding: 0.7rem !important;
          }
          
          .tab-button {
            padding: 0.5rem 0.8rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;