/**
 * Admin component - Page d'administration pour gérer les ressources et projets
 * Version responsive
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [resources, setResources] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("resources");
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    type: "tutorial",
    category: "",
    link: ""
  });

  useEffect(() => {
    // Détecter la taille de l'écran
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Vérifier la connexion et les privilèges admin
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
      navigate('/');
      return;
    }
    
    const user = JSON.parse(savedUser);
    if (user.userType !== 'admin') {
      navigate('/dashboard');
      return;
    }
    
    setIsLoggedIn(true);
    
    // Charger les données
    const savedResources = localStorage.getItem('adminResources');
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
    
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [navigate]);

  const handleAddResource = () => {
    if (!newResource.title || !newResource.description) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const resourceToAdd = {
      id: Date.now(),
      ...newResource,
      date: new Date().toISOString(),
      status: "published",
      author: "Emmanuel AMELA"
    };

    const updatedResources = [...resources, resourceToAdd];
    setResources(updatedResources);
    localStorage.setItem('adminResources', JSON.stringify(updatedResources));

    // Réinitialiser le formulaire
    setNewResource({
      title: "",
      description: "",
      type: "tutorial",
      category: "",
      link: ""
    });

    alert("Ressource ajoutée avec succès !");
  };

  const handleDeleteResource = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ressource ?")) {
      const updatedResources = resources.filter(res => res.id !== id);
      setResources(updatedResources);
      localStorage.setItem('adminResources', JSON.stringify(updatedResources));
      alert("Ressource supprimée avec succès !");
    }
  };

  const handleUpdateProjectStatus = (projectId, newStatus) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return { ...project, status: newStatus };
      }
      return project;
    });
    
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    alert("Statut du projet mis à jour !");
  };

  const calculateProjectProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  if (!isLoggedIn) {
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
        <h2 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Accès non autorisé</h2>
        <p style={{ color: "#5d6d7e", maxWidth: "500px", padding: "0 1rem" }}>
          Veuillez vous connecter en tant qu'administrateur pour accéder à cette page.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "1rem",
            fontSize: isMobile ? "0.9rem" : "1rem"
          }}
        >
          Retour à l'accueil
        </button>
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
        <h1 style={{ 
          color: "#2c3e50", 
          marginBottom: "0.5rem",
          fontSize: isMobile ? "1.5rem" : isTablet ? "1.8rem" : "2rem",
          lineHeight: "1.2"
        }}>
          Administration
        </h1>
        <p style={{ 
          color: "#5d6d7e", 
          marginBottom: isMobile ? "1.5rem" : "2rem",
          fontSize: isMobile ? "0.95rem" : "1rem",
          lineHeight: "1.4"
        }}>
          Gestion des ressources, projets et utilisateurs
        </p>

        {/* Onglets */}
        <div style={{ 
          display: "flex", 
          borderBottom: "1px solid #eee",
          marginBottom: isMobile ? "1.5rem" : "2rem",
          flexWrap: "wrap",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch"
        }}>
          <button
            onClick={() => setActiveTab("resources")}
            style={{
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.5rem",
              background: activeTab === "resources" ? "#3498db" : "transparent",
              color: activeTab === "resources" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              whiteSpace: "nowrap",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              transition: "all 0.3s ease",
              flex: "1",
              minWidth: "120px"
            }}
          >
            Ressources ({resources.length})
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            style={{
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.5rem",
              background: activeTab === "projects" ? "#3498db" : "transparent",
              color: activeTab === "projects" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              whiteSpace: "nowrap",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              transition: "all 0.3s ease",
              flex: "1",
              minWidth: "120px"
            }}
          >
            Projets ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("users")}
            style={{
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.5rem",
              background: activeTab === "users" ? "#3498db" : "transparent",
              color: activeTab === "users" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              whiteSpace: "nowrap",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              transition: "all 0.3s ease",
              flex: "1",
              minWidth: "120px"
            }}
          >
            Utilisateurs ({users.length})
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            style={{
              padding: isMobile ? "0.8rem 1rem" : "1rem 1.5rem",
              background: activeTab === "analytics" ? "#3498db" : "transparent",
              color: activeTab === "analytics" ? "white" : "#2c3e50",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              whiteSpace: "nowrap",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              transition: "all 0.3s ease",
              flex: "1",
              minWidth: "120px"
            }}
          >
            Statistiques
          </button>
        </div>

        {/* Contenu des onglets */}
        {activeTab === "resources" && (
          <div>
            {/* Formulaire d'ajout */}
            <div style={{ 
              backgroundColor: "#f8f9fa", 
              padding: isMobile ? "1.2rem" : "1.5rem", 
              borderRadius: "12px",
              marginBottom: isMobile ? "1.5rem" : "2rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
            }}>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Ajouter une nouvelle ressource
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
                    Titre *
                  </label>
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                    style={{ 
                      width: "100%", 
                      padding: "0.8rem", 
                      borderRadius: "6px", 
                      border: "1px solid #ddd",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    placeholder="Titre de la ressource"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Type *
                  </label>
                  <select
                    value={newResource.type}
                    onChange={(e) => setNewResource({...newResource, type: e.target.value})}
                    style={{ 
                      width: "100%", 
                      padding: "0.8rem", 
                      borderRadius: "6px", 
                      border: "1px solid #ddd",
                      fontSize: isMobile ? "0.95rem" : "1rem",
                      backgroundColor: "white",
                      cursor: "pointer"
                    }}
                  >
                    <option value="tutorial">Tutoriel</option>
                    <option value="package">Package NPM</option>
                    <option value="snippet">Snippet de code</option>
                    <option value="article">Article</option>
                    <option value="video">Vidéo</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Description *
                </label>
                <textarea
                  value={newResource.description}
                  onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                  style={{ 
                    width: "100%", 
                    padding: "0.8rem", 
                    borderRadius: "6px", 
                    border: "1px solid #ddd", 
                    minHeight: isMobile ? "100px" : "120px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    resize: "vertical"
                  }}
                  placeholder="Description détaillée de la ressource..."
                />
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "1rem", 
                marginBottom: "1.5rem" 
              }}>
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Catégorie
                  </label>
                  <input
                    type="text"
                    value={newResource.category}
                    onChange={(e) => setNewResource({...newResource, category: e.target.value})}
                    style={{ 
                      width: "100%", 
                      padding: "0.8rem", 
                      borderRadius: "6px", 
                      border: "1px solid #ddd",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    placeholder="React, JavaScript, CSS, etc."
                  />
                </div>

                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Lien
                  </label>
                  <input
                    type="text"
                    value={newResource.link}
                    onChange={(e) => setNewResource({...newResource, link: e.target.value})}
                    style={{ 
                      width: "100%", 
                      padding: "0.8rem", 
                      borderRadius: "6px", 
                      border: "1px solid #ddd",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    placeholder="URL de la ressource (optionnel)"
                  />
                </div>
              </div>

              <button
                onClick={handleAddResource}
                style={{
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "500",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                + Publier la ressource
              </button>
            </div>

            {/* Liste des ressources */}
            <div>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Ressources publiées
              </h3>
              
              {resources.length === 0 ? (
                <div style={{ 
                  textAlign: "center", 
                  padding: isMobile ? "2rem" : "3rem", 
                  color: "#7f8c8d",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}>
                  <p style={{ fontSize: isMobile ? "0.95rem" : "1rem" }}>
                    Aucune ressource publiée pour le moment.
                  </p>
                </div>
              ) : (
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(320px, 1fr))", 
                  gap: "1.2rem" 
                }}>
                  {resources.map(resource => (
                    <div 
                      key={resource.id}
                      style={{
                        backgroundColor: "white",
                        padding: isMobile ? "1rem" : "1.2rem",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        borderLeft: `4px solid ${
                          resource.type === 'tutorial' ? '#3498db' : 
                          resource.type === 'package' ? '#9b59b6' : 
                          resource.type === 'snippet' ? '#2ecc71' : '#f39c12'
                        }`,
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
                        <h4 style={{ 
                          margin: 0, 
                          color: "#2c3e50", 
                          fontSize: isMobile ? "1rem" : "1.1rem",
                          lineHeight: "1.3",
                          flex: 1,
                          marginRight: "0.5rem"
                        }}>
                          {resource.title}
                        </h4>
                        <span style={{ 
                          backgroundColor: resource.type === 'tutorial' ? '#3498db' : 
                                         resource.type === 'package' ? '#9b59b6' : 
                                         resource.type === 'snippet' ? '#2ecc71' : '#f39c12',
                          color: "white",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "12px",
                          fontSize: isMobile ? "0.75rem" : "0.8rem",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap"
                        }}>
                          {resource.type}
                        </span>
                      </div>
                      
                      <p style={{ 
                        color: "#5d6d7e", 
                        margin: "0.5rem 0", 
                        fontSize: isMobile ? "0.9rem" : "0.95rem",
                        lineHeight: "1.4",
                        flex: 1
                      }}>
                        {resource.description.length > (isMobile ? 120 : 150) ? 
                          resource.description.substring(0, isMobile ? 120 : 150) + '...' : resource.description}
                      </p>
                      
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        marginTop: "auto",
                        paddingTop: "0.8rem" 
                      }}>
                        <div>
                          {resource.category && (
                            <span style={{ 
                              backgroundColor: "#e8f4fc",
                              color: "#3498db",
                              padding: "0.2rem 0.6rem",
                              borderRadius: "12px",
                              fontSize: isMobile ? "0.75rem" : "0.8rem",
                              marginRight: "0.5rem",
                              display: "inline-block",
                              marginBottom: isMobile ? "0.3rem" : "0"
                            }}>
                              {resource.category}
                            </span>
                          )}
                          <span style={{ 
                            fontSize: isMobile ? "0.75rem" : "0.8rem", 
                            color: "#7f8c8d",
                            display: "block"
                          }}>
                            {new Date(resource.date).toLocaleDateString('fr-FR', { 
                              day: '2-digit', 
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDeleteResource(resource.id)}
                          style={{
                            backgroundColor: "#e74c3c",
                            color: "white",
                            border: "none",
                            padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: isMobile ? "0.85rem" : "0.9rem",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h3 style={{ 
              color: "#2c3e50", 
              marginBottom: "1rem",
              fontSize: isMobile ? "1.1rem" : "1.3rem"
            }}>
              Gestion des projets clients
            </h3>
            
            {projects.length === 0 ? (
              <div style={{ 
                textAlign: "center", 
                padding: isMobile ? "2rem" : "3rem", 
                color: "#7f8c8d",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <p style={{ fontSize: isMobile ? "0.95rem" : "1rem" }}>
                  Aucun projet en cours pour le moment.
                </p>
              </div>
            ) : (
              <div style={{ 
                overflowX: "auto", 
                WebkitOverflowScrolling: "touch",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                backgroundColor: "white"
              }}>
                <table style={{ 
                  width: "100%", 
                  borderCollapse: "collapse",
                  minWidth: isMobile ? "800px" : "100%"
                }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f8f9fa" }}>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Client
                      </th>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Projet
                      </th>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Statut
                      </th>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Progression
                      </th>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Échéance
                      </th>
                      <th style={{ 
                        padding: isMobile ? "0.8rem" : "1rem", 
                        textAlign: "left", 
                        borderBottom: "2px solid #eee",
                        fontSize: isMobile ? "0.9rem" : "1rem"
                      }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map(project => {
                      const client = users.find(u => u.id === project.clientId);
                      return (
                        <tr key={project.id} style={{ borderBottom: "1px solid #eee" }}>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem" }}>
                            <div>
                              <strong style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
                                {client?.name || "Client inconnu"}
                              </strong>
                              <div style={{ 
                                fontSize: isMobile ? "0.75rem" : "0.8rem", 
                                color: "#7f8c8d",
                                wordBreak: "break-word"
                              }}>
                                {client?.email || ""}
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem" }}>
                            <div>
                              <strong style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
                                {project.title}
                              </strong>
                              <div style={{ 
                                fontSize: isMobile ? "0.85rem" : "0.9rem", 
                                color: "#5d6d7e", 
                                marginTop: "0.3rem",
                                maxWidth: "200px"
                              }}>
                                {project.description.length > (isMobile ? 60 : 100) ? 
                                  project.description.substring(0, isMobile ? 60 : 100) + '...' : project.description}
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem" }}>
                            <select
                              value={project.status}
                              onChange={(e) => handleUpdateProjectStatus(project.id, e.target.value)}
                              style={{
                                padding: isMobile ? "0.4rem" : "0.5rem",
                                borderRadius: "6px",
                                border: "1px solid #ddd",
                                backgroundColor: project.status === 'completed' ? '#d5f4e6' : 
                                              project.status === 'in-progress' ? '#d6eaf8' : '#f8f9fa',
                                fontSize: isMobile ? "0.85rem" : "0.9rem",
                                width: isMobile ? "120px" : "auto",
                                cursor: "pointer"
                              }}
                            >
                              <option value="pending">En attente</option>
                              <option value="in-progress">En cours</option>
                              <option value="completed">Terminé</option>
                              <option value="paused">En pause</option>
                            </select>
                          </td>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem", minWidth: isMobile ? "130px" : "150px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <div style={{ 
                                width: isMobile ? "80px" : "100px", 
                                height: "8px", 
                                backgroundColor: "#e1e8ed", 
                                borderRadius: "4px",
                                overflow: "hidden"
                              }}>
                                <div style={{ 
                                  width: `${calculateProjectProgress(project.tasks)}%`,
                                  height: "100%",
                                  backgroundColor: "#3498db"
                                }}></div>
                              </div>
                              <span style={{ 
                                fontSize: isMobile ? "0.85rem" : "0.9rem", 
                                color: "#3498db", 
                                fontWeight: "500",
                                whiteSpace: "nowrap"
                              }}>
                                {calculateProjectProgress(project.tasks)}%
                              </span>
                            </div>
                          </td>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem" }}>
                            <span style={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}>
                              {new Date(project.deadline).toLocaleDateString('fr-FR', { 
                                day: '2-digit', 
                                month: 'short' 
                              })}
                            </span>
                          </td>
                          <td style={{ padding: isMobile ? "0.8rem" : "1rem" }}>
                            <button
                              onClick={() => navigate(`/project/${project.id}`)}
                              style={{
                                backgroundColor: "#3498db",
                                color: "white",
                                border: "none",
                                padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: isMobile ? "0.85rem" : "0.9rem",
                                whiteSpace: "nowrap"
                              }}
                            >
                              Voir
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h3 style={{ 
              color: "#2c3e50", 
              marginBottom: "1rem",
              fontSize: isMobile ? "1.1rem" : "1.3rem"
            }}>
              Gestion des utilisateurs
            </h3>
            
            {users.length === 0 ? (
              <div style={{ 
                textAlign: "center", 
                padding: isMobile ? "2rem" : "3rem", 
                color: "#7f8c8d",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <p style={{ fontSize: isMobile ? "0.95rem" : "1rem" }}>
                  Aucun utilisateur inscrit.
                </p>
              </div>
            ) : (
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(280px, 1fr))", 
                gap: "1.2rem" 
              }}>
                {users.map(user => (
                  <div 
                    key={user.id}
                    style={{
                      backgroundColor: "white",
                      padding: isMobile ? "1rem" : "1.2rem",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      borderLeft: `4px solid ${user.userType === 'admin' ? '#e74c3c' : '#3498db'}`
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                      <div style={{
                        width: isMobile ? "40px" : "50px",
                        height: isMobile ? "40px" : "50px",
                        borderRadius: "50%",
                        backgroundColor: user.userType === 'admin' ? '#e74c3c' : '#3498db',
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: isMobile ? "1rem" : "1.2rem",
                        marginRight: "1rem",
                        flexShrink: 0
                      }}>
                        {user.name.charAt(0)}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h4 style={{ 
                          margin: 0, 
                          color: "#2c3e50",
                          fontSize: isMobile ? "1rem" : "1.1rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}>
                          {user.name}
                        </h4>
                        <span style={{ 
                          backgroundColor: user.userType === 'admin' ? '#e74c3c' : '#3498db',
                          color: "white",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "12px",
                          fontSize: isMobile ? "0.75rem" : "0.8rem",
                          fontWeight: "500",
                          display: "inline-block",
                          marginTop: "0.3rem"
                        }}>
                          {user.userType === 'admin' ? 'Administrateur' : 'Client'}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#5d6d7e",
                        fontSize: isMobile ? "0.85rem" : "0.9rem"
                      }}>
                        Email: 
                      </span>
                      <span style={{ 
                        color: "#3498db",
                        fontSize: isMobile ? "0.85rem" : "0.9rem",
                        wordBreak: "break-word",
                        display: "block",
                        marginTop: "0.2rem"
                      }}>
                        {user.email}
                      </span>
                    </div>
                    
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#5d6d7e",
                        fontSize: isMobile ? "0.85rem" : "0.9rem"
                      }}>
                        Inscrit le: 
                      </span>
                      <span style={{ 
                        color: "#7f8c8d",
                        fontSize: isMobile ? "0.85rem" : "0.9rem"
                      }}>
                        {new Date(user.createdAt).toLocaleDateString('fr-FR', { 
                          day: '2-digit', 
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <div>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#5d6d7e",
                        fontSize: isMobile ? "0.85rem" : "0.9rem"
                      }}>
                        Projets: 
                      </span>
                      <span style={{ 
                        color: "#7f8c8d",
                        fontSize: isMobile ? "0.85rem" : "0.9rem"
                      }}>
                        {projects.filter(p => p.clientId === user.id).length} projet(s)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "analytics" && (
          <div>
            <h3 style={{ 
              color: "#2c3e50", 
              marginBottom: "1rem",
              fontSize: isMobile ? "1.1rem" : "1.3rem"
            }}>
              Statistiques
            </h3>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "1rem", 
              marginBottom: isMobile ? "1.5rem" : "2rem" 
            }}>
              <div style={{ 
                backgroundColor: "#e8f4fc", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <h2 style={{ 
                  color: "#3498db", 
                  margin: 0, 
                  fontSize: isMobile ? "1.8rem" : "2.5rem"
                }}>
                  {users.length}
                </h2>
                <p style={{ 
                  color: "#5d6d7e", 
                  margin: "0.3rem 0 0 0",
                  fontSize: isMobile ? "0.85rem" : "1rem"
                }}>
                  Utilisateurs
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: "#e8f6f3", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <h2 style={{ 
                  color: "#2ecc71", 
                  margin: 0, 
                  fontSize: isMobile ? "1.8rem" : "2.5rem"
                }}>
                  {projects.length}
                </h2>
                <p style={{ 
                  color: "#5d6d7e", 
                  margin: "0.3rem 0 0 0",
                  fontSize: isMobile ? "0.85rem" : "1rem"
                }}>
                  Projets
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: "#f4ecf7", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <h2 style={{ 
                  color: "#9b59b6", 
                  margin: 0, 
                  fontSize: isMobile ? "1.8rem" : "2.5rem"
                }}>
                  {resources.length}
                </h2>
                <p style={{ 
                  color: "#5d6d7e", 
                  margin: "0.3rem 0 0 0",
                  fontSize: isMobile ? "0.85rem" : "1rem"
                }}>
                  Ressources
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: "#fef9e7", 
                padding: isMobile ? "1rem" : "1.2rem", 
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <h2 style={{ 
                  color: "#f39c12", 
                  margin: 0, 
                  fontSize: isMobile ? "1.8rem" : "2.5rem"
                }}>
                  {projects.filter(p => p.status === 'completed').length}
                </h2>
                <p style={{ 
                  color: "#5d6d7e", 
                  margin: "0.3rem 0 0 0",
                  fontSize: isMobile ? "0.85rem" : "1rem"
                }}>
                  Projets terminés
                </p>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: "white", 
              padding: isMobile ? "1rem" : "1.2rem", 
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem",
                fontSize: isMobile ? "1rem" : "1.1rem"
              }}>
                Statut des projets
              </h4>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "1rem", 
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "#3498db", 
                    borderRadius: "3px" 
                  }}></div>
                  <span style={{ 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.85rem" : "0.9rem"
                  }}>
                    En cours: {projects.filter(p => p.status === 'in-progress').length}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "#2ecc71", 
                    borderRadius: "3px" 
                  }}></div>
                  <span style={{ 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.85rem" : "0.9rem"
                  }}>
                    Terminés: {projects.filter(p => p.status === 'completed').length}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "#95a5a6", 
                    borderRadius: "3px" 
                  }}></div>
                  <span style={{ 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.85rem" : "0.9rem"
                  }}>
                    En attente: {projects.filter(p => p.status === 'pending').length}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ 
                    width: "12px", 
                    height: "12px", 
                    backgroundColor: "#f39c12", 
                    borderRadius: "3px" 
                  }}></div>
                  <span style={{ 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.85rem" : "0.9rem"
                  }}>
                    En pause: {projects.filter(p => p.status === 'paused').length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Styles CSS responsives */}
      <style>{`
        /* Styles pour les petits écrans */
        @media (max-width: 768px) {
          .admin-container {
            padding-top: 4.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .tabs-container {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
          }
          
          .tabs-container::-webkit-scrollbar {
            display: none !important;
          }
          
          .table-container {
            border-radius: 8px !important;
            overflow: hidden !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.8rem !important;
          }
          
          .resources-grid {
            grid-template-columns: 1fr !important;
          }
          
          .users-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          .admin-container {
            padding-top: 4rem !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .project-table {
            font-size: 0.8rem !important;
          }
          
          .status-select {
            width: 100% !important;
          }
        }
        
        /* Améliorations pour tablettes */
        @media (min-width: 769px) and (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .users-grid {
            grid-templateColumns: repeat(2, 1fr) !important;
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
        
        /* Styles pour les onglets au survol */
        .tab-button:hover:not([style*="background: #3498db"]) {
          background-color: #f8f9fa !important;
        }
        
        /* Animation pour les cartes */
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
        
        .resource-card, .user-card, .stat-card {
          animation: fadeIn 0.3s ease forwards;
        }
        
        /* Amélioration du scroll sur mobile */
        .table-wrapper {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Styles pour les lignes du tableau au survol */
        tbody tr:hover {
          background-color: #f8f9fa;
        }
        
        /* Styles pour les boutons de suppression */
        .delete-btn:hover {
          background-color: #c0392b !important;
        }
        
        /* Styles pour les boutons d'action */
        .view-btn:hover {
          background-color: #2980b9 !important;
        }
      `}</style>
    </div>
  );
};

export default Admin;