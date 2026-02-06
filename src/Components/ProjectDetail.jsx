import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
      navigate('/');
      return;
    }
    setCurrentUser(JSON.parse(savedUser));

    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const foundProject = projects.find(p => p.id === parseInt(id));
    
    // Simuler un temps de chargement
    setTimeout(() => {
      if (!foundProject) {
        alert("Projet non trouvé");
        navigate('/dashboard');
        return;
      }
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id, navigate]);

  if (loading) {
    return (
      <div style={{
        paddingTop: "6rem",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "50px",
            height: "50px",
            border: "5px solid #f3f3f3",
            borderTop: "5px solid #3498db",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px"
          }}></div>
          <p style={{ color: "#5d6d7e" }}>Chargement du projet...</p>
        </div>
      </div>
    );
  }

  if (!project || !currentUser) {
    return null;
  }

  return (
    <div style={{
      paddingTop: "6rem",
      paddingBottom: "3rem",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        width: "100%"
      }}>
        {/* Header avec bouton retour */}
        <div style={{ marginBottom: "2rem" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: "transparent",
              color: "#3498db",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 0",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#2980b9"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#3498db"}
          >
            <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour
          </button>
        </div>

        {/* Carte principale */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          marginBottom: "2rem"
        }}>
          {/* En-tête du projet */}
          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "1.5rem",
            borderBottom: "1px solid #eaeaea"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem"
              }}>
                <h1 style={{
                  color: "#2c3e50",
                  margin: 0,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "700",
                  flex: 1,
                  minWidth: "300px"
                }}>
                  {project.title}
                </h1>
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap"
                }}>
                  <span style={{
                    backgroundColor: project.status === 'completed' ? "#2ecc71" : 
                                    project.status === 'in-progress' ? "#3498db" : "#f39c12",
                    color: "white",
                    padding: "0.4rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}>
                    {project.status === 'completed' ? 'Terminé' : 
                     project.status === 'in-progress' ? 'En cours' : 'En attente'}
                  </span>
                  <span style={{
                    backgroundColor: project.priority === 'high' ? "#e74c3c" : 
                                    project.priority === 'medium' ? "#f39c12" : "#3498db",
                    color: "white",
                    padding: "0.4rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}>
                    {project.priority === 'high' ? 'Haute' : 
                     project.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </span>
                </div>
              </div>
              <p style={{
                color: "#5d6d7e",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: "1rem 0 0 0"
              }}>
                {project.description}
              </p>
            </div>
          </div>

          {/* Contenu principal */}
          <div style={{ padding: "1.5rem" }}>
            {/* Métriques du projet */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem"
            }}>
              <div style={{
                backgroundColor: "#f8f9fa",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "1px solid #eaeaea"
              }}>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#7f8c8d",
                  marginBottom: "0.5rem",
                  fontWeight: "500"
                }}>
                  Date de début
                </div>
                <div style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#2c3e50",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(project.startDate).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              <div style={{
                backgroundColor: "#f8f9fa",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "1px solid #eaeaea"
              }}>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#7f8c8d",
                  marginBottom: "0.5rem",
                  fontWeight: "500"
                }}>
                  Date d'échéance
                </div>
                <div style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#2c3e50",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {new Date(project.deadline).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              {project.budget && (
                <div style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.25rem",
                  borderRadius: "8px",
                  border: "1px solid #eaeaea"
                }}>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "#7f8c8d",
                    marginBottom: "0.5rem",
                    fontWeight: "500"
                  }}>
                    Budget
                  </div>
                  <div style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.budget}
                  </div>
                </div>
              )}
              
              {project.category && (
                <div style={{
                  backgroundColor: "#f8f9fa",
                  padding: "1.25rem",
                  borderRadius: "8px",
                  border: "1px solid #eaeaea"
                }}>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "#7f8c8d",
                    marginBottom: "0.5rem",
                    fontWeight: "500"
                  }}>
                    Catégorie
                  </div>
                  <div style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#2c3e50"
                  }}>
                    {project.category}
                  </div>
                </div>
              )}
            </div>

            {/* Section Tâches */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "1rem"
              }}>
                <h2 style={{
                  color: "#2c3e50",
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "600"
                }}>
                  Tâches
                </h2>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#7f8c8d"
                }}>
                  {project.tasks ? project.tasks.length : 0} tâche(s)
                </div>
              </div>
              
              {project.tasks && project.tasks.length > 0 ? (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem"
                }}>
                  {project.tasks.map((task, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: task.status === 'completed' ? "#f0f9f0" : "#f8f9fa",
                        padding: "1.25rem",
                        borderRadius: "8px",
                        border: `1px solid ${task.status === 'completed' ? "#c8e6c9" : "#eaeaea"}`,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        marginBottom: "0.75rem"
                      }}>
                        <div style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: task.status === 'completed' ? "#2ecc71" : "#3498db",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}>
                          {task.status === 'completed' ? (
                            <svg style={{ width: "14px", height: "14px" }} fill="white" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <div style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor: "white"
                            }}></div>
                          )}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontWeight: "600",
                            color: "#2c3e50",
                            fontSize: "1.1rem",
                            marginBottom: "0.25rem"
                          }}>
                            {task.title}
                          </div>
                          <div style={{
                            fontSize: "0.95rem",
                            color: "#5d6d7e",
                            lineHeight: "1.5"
                          }}>
                            {task.description}
                          </div>
                        </div>
                      </div>
                      
                      {task.dueDate && (
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.85rem",
                          color: "#7f8c8d",
                          marginTop: "0.75rem",
                          paddingTop: "0.75rem",
                          borderTop: "1px solid #eaeaea"
                        }}>
                          <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Échéance: {new Date(task.dueDate).toLocaleDateString('fr-FR')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  backgroundColor: "#f8f9fa",
                  padding: "2rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #eaeaea"
                }}>
                  <svg style={{ width: "48px", height: "48px", color: "#bdc3c7", marginBottom: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p style={{ color: "#7f8c8d", margin: 0 }}>
                    Aucune tâche n'a été définie pour ce projet.
                  </p>
                </div>
              )}
            </div>

            {/* Section Discussion */}
            <div>
              <h2 style={{
                color: "#2c3e50",
                marginBottom: "1rem",
                fontSize: "1.5rem",
                fontWeight: "600"
              }}>
                Discussion
              </h2>
              <div style={{
                backgroundColor: "#f0f7ff",
                padding: "1.5rem",
                borderRadius: "8px",
                border: "1px solid #d1e3ff",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#3498db",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <svg style={{ width: "20px", height: "20px" }} fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    color: "#2c3e50",
                    margin: "0 0 0.5rem 0",
                    fontWeight: "500"
                  }}>
                    Messagerie en développement
                  </p>
                  <p style={{
                    color: "#5d6d7e",
                    margin: 0,
                    lineHeight: "1.5"
                  }}>
                    La fonctionnalité de messagerie entre le client et l'administrateur est actuellement en développement. 
                    Elle permettra une communication directe et sécurisée concernant ce projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS pour le spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .project-stats {
            grid-template-columns: 1fr;
          }
          
          .tasks-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }
          
          h1 {
            font-size: 1.5rem;
          }
          
          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;