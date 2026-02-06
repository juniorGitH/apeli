/**
 * ProjectsList component - Liste de tous les projets (vue admin)
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
      navigate('/');
      return;
    }
    
    const user = JSON.parse(savedUser);
    setCurrentUser(user);
    
    // Charger les projets
    const allProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    setProjects(allProjects);
    
    // Charger les utilisateurs
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(allUsers);
  }, [navigate]);

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    // Filtre par statut
    if (filterStatus !== "all" && project.status !== filterStatus) {
      return false;
    }
    
    // Filtre par recherche
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.clientName.toLowerCase().includes(term)
      );
    }
    
    return true;
  });

  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return { ...project, status: newStatus };
      }
      return project;
    });
    
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.")) {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      setProjects(updatedProjects);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    }
  };

  const calculateProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#2ecc71';
      case 'in-progress': return '#3498db';
      case 'pending': return '#f39c12';
      case 'paused': return '#95a5a6';
      default: return '#95a5a6';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'pending': return 'En attente';
      case 'paused': return 'En pause';
      default: return 'Inconnu';
    }
  };

  if (!currentUser || currentUser.userType !== 'admin') {
    return (
      <div style={{ 
        paddingTop: "6rem", 
        textAlign: "center", 
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2>Accès non autorisé</h2>
        <p>Cette page est réservée aux administrateurs.</p>
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "1rem"
          }}
        >
          Retour au tableau de bord
        </button>
      </div>
    );
  }

  return (
    <div style={{
      paddingTop: "6rem",
      paddingBottom: "3rem",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
      margin: 0,
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem 1rem"
      }}>
        <h1 style={{ 
          color: "#2c3e50", 
          marginBottom: "0.5rem",
          fontSize: "1.8rem"
        }}>
          Gestion des Projets
        </h1>
        <p style={{ 
          color: "#5d6d7e", 
          marginBottom: "2rem",
          fontSize: "1rem"
        }}>
          Consultez et gérez tous les projets de vos clients
        </p>

        {/* Filtres et recherche */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "1.5rem", 
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          marginBottom: "2rem",
          width: "100%"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "flex-end"
            }}>
              <div style={{ flex: "1", minWidth: "200px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}>
                  Filtrer par statut
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{
                    padding: "0.6rem 1rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    width: "100%",
                    backgroundColor: "#fff"
                  }}
                >
                  <option value="all">Tous les statuts</option>
                  <option value="pending">En attente</option>
                  <option value="in-progress">En cours</option>
                  <option value="completed">Terminé</option>
                  <option value="paused">En pause</option>
                </select>
              </div>
              
              <div style={{ flex: "1", minWidth: "200px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}>
                  Rechercher
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un projet..."
                  style={{
                    padding: "0.6rem 1rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    width: "100%"
                  }}
                />
              </div>
              
              <div style={{ 
                display: "flex", 
                alignItems: "center",
                height: "42px",
                marginBottom: "0.5rem"
              }}>
                <span style={{ 
                  backgroundColor: "#f8f9fa",
                  color: "#5d6d7e",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                  border: "1px solid #eee"
                }}>
                  {filteredProjects.length} projet(s) trouvé(s)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des projets */}
        {filteredProjects.length === 0 ? (
          <div style={{ 
            backgroundColor: "white", 
            padding: "3rem", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            textAlign: "center",
            width: "100%"
          }}>
            <h3 style={{ color: "#5d6d7e", marginBottom: "1rem" }}>Aucun projet trouvé</h3>
            <p style={{ color: "#7f8c8d" }}>Aucun projet ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          <div style={{ 
            backgroundColor: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            overflow: "hidden",
            width: "100%"
          }}>
            <div style={{ overflowX: "auto", width: "100%" }}>
              <table style={{ 
                width: "100%", 
                borderCollapse: "collapse",
                minWidth: "800px"
              }}>
                <thead>
                  <tr style={{ backgroundColor: "#f8f9fa" }}>
                    <th style={{ 
                      padding: "1rem", 
                      textAlign: "left", 
                      borderBottom: "2px solid #eee", 
                      fontWeight: "600", 
                      color: "#2c3e50",
                      fontSize: "0.9rem"
                    }}>
                      Client
                    </th>
                    <th style={{ 
                      padding: "1rem", 
                      textAlign: "left", 
                      borderBottom: "2px solid #eee", 
                      fontWeight: "600", 
                      color: "#2c3e50",
                      fontSize: "0.9rem"
                    }}>
                      Projet
                    </th>
                    <th style={{ 
                      padding: "1rem", 
                      textAlign: "left", 
                      borderBottom: "2px solid #eee", 
                      fontWeight: "600", 
                      color: "#2c3e50",
                      fontSize: "0.9rem"
                    }}>
                      Statut
                    </th>
                    <th style={{ 
                      padding: "1rem", 
                      textAlign: "left", 
                      borderBottom: "2px solid #eee", 
                      fontWeight: "600", 
                      color: "#2c3e50",
                      fontSize: "0.9rem"
                    }}>
                      Progression
                    </th>
                    <th style={{ 
                      padding: "1rem", 
                      textAlign: "left", 
                      borderBottom: "2px solid #eee", 
                      fontWeight: "600", 
                      color: "#2c3e50",
                      fontSize: "0.9rem"
                    }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map(project => (
                    <tr key={project.id} style={{ 
                      borderBottom: "1px solid #eee", 
                      transition: "background-color 0.2s ease",
                      fontSize: "0.9rem"
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}>
                      <td style={{ padding: "1rem" }}>
                        <div>
                          <div style={{ fontWeight: "500", color: "#2c3e50" }}>{project.clientName}</div>
                          <div style={{ fontSize: "0.85rem", color: "#7f8c8d", marginTop: "0.2rem" }}>
                            {project.clientEmail}
                          </div>
                          <div style={{ fontSize: "0.85rem", color: "#3498db", marginTop: "0.2rem" }}>
                            {users.find(u => u.id === project.clientId)?.userType === 'admin' ? 'Admin' : 'Client'}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <div>
                          <div style={{ fontWeight: "500", color: "#2c3e50", marginBottom: "0.3rem" }}>
                            {project.title}
                          </div>
                          <div style={{ fontSize: "0.9rem", color: "#5d6d7e", lineHeight: "1.4" }}>
                            {project.description.length > 80 ? 
                              project.description.substring(0, 80) + '...' : 
                              project.description}
                          </div>
                          <div style={{ 
                            display: "flex", 
                            gap: "0.5rem", 
                            marginTop: "0.5rem", 
                            flexWrap: "wrap" 
                          }}>
                            <span style={{ 
                              backgroundColor: "#e8f4fc",
                              color: "#3498db",
                              padding: "0.2rem 0.5rem",
                              borderRadius: "4px",
                              fontSize: "0.75rem"
                            }}>
                              {project.category || 'Non catégorisé'}
                            </span>
                            {project.budget && (
                              <span style={{ 
                                backgroundColor: "#e8f6f3",
                                color: "#2ecc71",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "4px",
                                fontSize: "0.75rem"
                              }}>
                                {project.budget}
                              </span>
                            )}
                            <span style={{ 
                              fontSize: "0.75rem",
                              color: "#7f8c8d"
                            }}>
                              Début: {new Date(project.startDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <select
                          value={project.status}
                          onChange={(e) => handleStatusChange(project.id, e.target.value)}
                          style={{
                            padding: "0.5rem",
                            borderRadius: "5px",
                            border: `1px solid ${getStatusColor(project.status)}`,
                            backgroundColor: getStatusColor(project.status),
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "500",
                            width: "100%",
                            maxWidth: "140px",
                            fontSize: "0.85rem"
                          }}
                        >
                          <option value="pending" style={{ backgroundColor: "white", color: "#333" }}>En attente</option>
                          <option value="in-progress" style={{ backgroundColor: "white", color: "#333" }}>En cours</option>
                          <option value="completed" style={{ backgroundColor: "white", color: "#333" }}>Terminé</option>
                          <option value="paused" style={{ backgroundColor: "white", color: "#333" }}>En pause</option>
                        </select>
                        <div style={{ fontSize: "0.8rem", color: "#7f8c8d", marginTop: "0.3rem" }}>
                          {getStatusText(project.status)}
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div style={{ 
                            flex: 1,
                            maxWidth: "100px",
                            height: "6px", 
                            backgroundColor: "#e1e8ed", 
                            borderRadius: "3px",
                            overflow: "hidden"
                          }}>
                            <div style={{ 
                              width: `${calculateProgress(project.tasks)}%`,
                              height: "100%",
                              backgroundColor: "#3498db"
                            }}></div>
                          </div>
                          <span style={{ fontSize: "0.9rem", color: "#3498db", fontWeight: "500" }}>
                            {calculateProgress(project.tasks)}%
                          </span>
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#7f8c8d", marginTop: "0.3rem" }}>
                          {project.tasks ? project.tasks.filter(t => t.status === 'completed').length : 0} / 
                          {project.tasks ? project.tasks.length : 0} tâches
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#7f8c8d", marginTop: "0.2rem" }}>
                          Échéance: {new Date(project.deadline).toLocaleDateString()}
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                          <button
                            onClick={() => navigate(`/project-view/${project.id}`)}
                            style={{
                              backgroundColor: "#3498db",
                              color: "white",
                              border: "none",
                              padding: "0.5rem 1rem",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontSize: "0.85rem",
                              flex: "1 1 auto",
                              minWidth: "70px"
                            }}
                          >
                            Voir
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project.id)}
                            style={{
                              backgroundColor: "#e74c3c",
                              color: "white",
                              border: "none",
                              padding: "0.5rem 1rem",
                              borderRadius: "5px",
                              cursor: "pointer",
                              fontSize: "0.85rem",
                              flex: "1 1 auto",
                              minWidth: "70px"
                            }}
                          >
                            Suppr
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Statistiques */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "1.5rem", 
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          marginTop: "2rem",
          width: "100%"
        }}>
          <h3 style={{ 
            color: "#2c3e50", 
            marginBottom: "1rem",
            fontSize: "1.1rem"
          }}>
            Statistiques des projets
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#3498db" }}>
                {projects.length}
              </div>
              <div style={{ color: "#5d6d7e", fontSize: "0.9rem" }}>Total projets</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#2ecc71" }}>
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div style={{ color: "#5d6d7e", fontSize: "0.9rem" }}>Terminés</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#f39c12" }}>
                {projects.filter(p => p.status === 'in-progress').length}
              </div>
              <div style={{ color: "#5d6d7e", fontSize: "0.9rem" }}>En cours</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#e74c3c" }}>
                {projects.filter(p => p.status === 'pending').length}
              </div>
              <div style={{ color: "#5d6d7e", fontSize: "0.9rem" }}>En attente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;