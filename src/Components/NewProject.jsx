/**
 * NewProject component - Formulaire de création d'un nouveau projet
 * Version responsive
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "medium",
    budget: "",
    category: "web"
  });
  const [tasks, setTasks] = useState([
    { id: 1, title: "Analyse des besoins", description: "", dueDate: "", priority: "high" },
    { id: 2, title: "Conception technique", description: "", dueDate: "", priority: "medium" },
    { id: 3, title: "Développement", description: "", dueDate: "", priority: "medium" },
    { id: 4, title: "Tests et validation", description: "", dueDate: "", priority: "medium" },
    { id: 5, title: "Livraison et déploiement", description: "", dueDate: "", priority: "high" }
  ]);

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
    
    // Définir la date par défaut (2 semaines à partir d'aujourd'hui)
    const defaultDeadline = new Date();
    defaultDeadline.setDate(defaultDeadline.getDate() + 14);
    setProjectData(prev => ({
      ...prev,
      deadline: defaultDeadline.toISOString().split('T')[0]
    }));
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [navigate]);

  const handleTaskChange = (id, field, value) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, [field]: value } : task
    ));
  };

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: "",
      description: "",
      dueDate: "",
      priority: "medium"
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    if (tasks.length <= 1) {
      alert("Un projet doit avoir au moins une tâche");
      return;
    }
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!projectData.title.trim()) {
      alert("Veuillez donner un titre à votre projet");
      return;
    }
    
    if (!projectData.deadline) {
      alert("Veuillez définir une date limite pour le projet");
      return;
    }
    
    // Filtrer les tâches avec un titre
    const validTasks = tasks
      .filter(task => task.title.trim() !== "")
      .map((task, index) => ({
        id: Date.now() + index,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate || projectData.deadline,
        priority: task.priority,
        status: "pending",
        createdAt: new Date().toISOString(),
        createdBy: currentUser.name
      }));
    
    if (validTasks.length === 0) {
      alert("Veuillez ajouter au moins une tâche avec un titre");
      return;
    }

    const newProject = {
      id: Date.now(),
      clientId: currentUser.id,
      clientName: currentUser.name,
      clientEmail: currentUser.email,
      ...projectData,
      startDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "pending",
      tasks: validTasks,
      progress: 0
    };

    // Sauvegarder le projet
    const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem('projects', JSON.stringify(updatedProjects));

    alert("Projet créé avec succès ! Emmanuel sera notifié et vous contactera bientôt.");
    navigate('/dashboard');
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
            Nouveau Projet
          </h1>
          <p style={{ 
            color: "#5d6d7e", 
            marginBottom: isMobile ? "1.5rem" : "2rem",
            fontSize: isMobile ? "0.95rem" : "1rem",
            lineHeight: "1.4"
          }}>
            Remplissez les détails de votre nouveau projet. Emmanuel sera notifié et pourra commencer à travailler dessus.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Informations de base */}
            <div style={{ marginBottom: isMobile ? "1.5rem" : "2rem" }}>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "1px solid #eee",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                Informations du projet
              </h3>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Titre du projet *
                </label>
                <input
                  type="text"
                  value={projectData.title}
                  onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.95rem" : "1rem"
                  }}
                  placeholder="Ex: Site e-commerce pour boutique de vêtements"
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
                  value={projectData.description}
                  onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    minHeight: isMobile ? "100px" : "120px",
                    resize: "vertical"
                  }}
                  placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, public cible, etc."
                  required
                />
              </div>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))", 
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
                    Date limite *
                  </label>
                  <input
                    type="date"
                    value={projectData.deadline}
                    onChange={(e) => setProjectData({...projectData, deadline: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    required
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Priorité
                  </label>
                  <select
                    value={projectData.priority}
                    onChange={(e) => setProjectData({...projectData, priority: e.target.value})}
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
                    <option value="low">Basse</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Haute</option>
                  </select>
                </div>
              </div>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))", 
                gap: "1rem" 
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
                  <select
                    value={projectData.category}
                    onChange={(e) => setProjectData({...projectData, category: e.target.value})}
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
                    <option value="web">Site Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="desktop">Application Desktop</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="api">API/Backend</option>
                    <option value="design">Design UI/UX</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e",
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    Budget estimé (optionnel)
                  </label>
                  <input
                    type="text"
                    value={projectData.budget}
                    onChange={(e) => setProjectData({...projectData, budget: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: isMobile ? "0.95rem" : "1rem"
                    }}
                    placeholder="Ex: 1500€ - 2000€"
                  />
                </div>
              </div>
            </div>

            {/* Tâches du projet */}
            <div style={{ marginBottom: isMobile ? "1.5rem" : "2rem" }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "1rem",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "0.8rem" : "0"
              }}>
                <h3 style={{ 
                  color: "#2c3e50", 
                  margin: 0, 
                  paddingBottom: "0.5rem", 
                  borderBottom: "1px solid #eee",
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  textAlign: isMobile ? "center" : "left",
                  width: isMobile ? "100%" : "auto"
                }}>
                  Tâches du projet
                </h3>
                <button
                  type="button"
                  onClick={handleAddTask}
                  style={{
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    padding: isMobile ? "0.6rem 1rem" : "0.5rem 1rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: isMobile ? "0.9rem" : "0.9rem",
                    width: isMobile ? "100%" : "auto"
                  }}
                >
                  + Ajouter une tâche
                </button>
              </div>
              
              <p style={{ 
                color: "#5d6d7e", 
                marginBottom: "1.5rem", 
                fontSize: isMobile ? "0.9rem" : "0.95rem",
                textAlign: isMobile ? "center" : "left"
              }}>
                Définissez les principales étapes de votre projet. Vous pourrez en ajouter ou modifier plus tard.
              </p>
              
              {tasks.map((task, index) => (
                <div 
                  key={task.id}
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: isMobile ? "1rem" : "1.2rem",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    borderLeft: `4px solid ${
                      task.priority === 'high' ? '#e74c3c' : 
                      task.priority === 'medium' ? '#f39c12' : '#2ecc71'
                    }`
                  }}
                >
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "flex-start", 
                    marginBottom: "1rem", 
                    flexWrap: "wrap", 
                    gap: "1rem" 
                  }}>
                    <div style={{ flex: 1, minWidth: isMobile ? "100%" : "200px" }}>
                      <label style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        color: "#5d6d7e", 
                        fontSize: isMobile ? "0.85rem" : "0.9rem" 
                      }}>
                        Tâche #{index + 1} *
                      </label>
                      <input
                        type="text"
                        value={task.title}
                        onChange={(e) => handleTaskChange(task.id, 'title', e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          fontSize: isMobile ? "0.95rem" : "1rem",
                          marginBottom: "0.5rem"
                        }}
                        placeholder="Titre de la tâche"
                        required
                      />
                    </div>
                    
                    {tasks.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTask(task.id)}
                        style={{
                          backgroundColor: "#e74c3c",
                          color: "white",
                          border: "none",
                          padding: isMobile ? "0.5rem 0.8rem" : "0.5rem 1rem",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontSize: isMobile ? "0.85rem" : "0.9rem",
                          alignSelf: isMobile ? "flex-end" : "flex-start",
                          marginTop: isMobile ? "0" : "1.8rem"
                        }}
                      >
                        Supprimer
                      </button>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: "0.8rem" }}>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      color: "#5d6d7e", 
                      fontSize: isMobile ? "0.85rem" : "0.9rem" 
                    }}>
                      Description (optionnel)
                    </label>
                    <textarea
                      value={task.description}
                      onChange={(e) => handleTaskChange(task.id, 'description', e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.8rem",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        minHeight: isMobile ? "80px" : "60px",
                        resize: "vertical"
                      }}
                      placeholder="Description de cette tâche..."
                    />
                  </div>
                  
                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(150px, 1fr))", 
                    gap: "1rem" 
                  }}>
                    <div>
                      <label style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        color: "#5d6d7e", 
                        fontSize: isMobile ? "0.85rem" : "0.9rem" 
                      }}>
                        Date d'échéance
                      </label>
                      <input
                        type="date"
                        value={task.dueDate}
                        onChange={(e) => handleTaskChange(task.id, 'dueDate', e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.8rem",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          fontSize: isMobile ? "0.95rem" : "1rem"
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        color: "#5d6d7e", 
                        fontSize: isMobile ? "0.85rem" : "0.9rem" 
                      }}>
                        Priorité
                      </label>
                      <select
                        value={task.priority}
                        onChange={(e) => handleTaskChange(task.id, 'priority', e.target.value)}
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
                        <option value="low">Basse</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Haute</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginTop: isMobile ? "1.5rem" : "2rem",
              paddingTop: isMobile ? "1.2rem" : "1.5rem",
              borderTop: "1px solid #eee",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "0.8rem" : "0"
            }}>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
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
                style={{
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  padding: isMobile ? "0.7rem 1rem" : "0.8rem 2rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  fontWeight: "500",
                  width: isMobile ? "100%" : "auto"
                }}
              >
                Créer le projet
              </button>
            </div>
          </form>
          
          {/* Information */}
          <div style={{ 
            backgroundColor: "#e8f4fc", 
            padding: isMobile ? "0.8rem" : "1rem", 
            borderRadius: "8px",
            marginTop: isMobile ? "1.5rem" : "2rem",
            borderLeft: "4px solid #3498db"
          }}>
            <p style={{ 
              margin: 0, 
              color: "#3498db", 
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              lineHeight: "1.4"
            }}>
              <strong>Important :</strong> Après création de votre projet, Emmanuel sera automatiquement notifié. 
              Il vous contactera dans les 24h pour discuter des détails et établir un devis précis.
            </p>
          </div>
        </div>
      </div>
      
      {/* Styles CSS responsives */}
      <style>{`
        /* Styles pour les petits écrans */
        @media (max-width: 768px) {
          .new-project-container {
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
          
          .task-grid {
            grid-template-columns: 1fr !important;
          }
          
          .task-header {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .task-header button {
            width: 100% !important;
            margin-top: 0.5rem !important;
          }
          
          .task-card {
            padding: 1rem !important;
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
          .new-project-container {
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
            text-align: center;
          }
          
          .info-text {
            font-size: 0.9rem !important;
            text-align: center;
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
          
          .task-card-grid {
            grid-template-columns: 1fr 1fr !important;
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
        
        /* Styles pour les bordures de priorité */
        .priority-high {
          border-left-color: #e74c3c !important;
        }
        
        .priority-medium {
          border-left-color: #f39c12 !important;
        }
        
        .priority-low {
          border-left-color: #2ecc71 !important;
        }
        
        /* Ajustement pour les champs date sur mobile */
        input[type="date"] {
          min-height: 44px; /* Taille minimum pour le touch sur mobile */
        }
        
        /* Styles pour les boutons de suppression de tâche */
        .delete-task-btn {
          transition: all 0.2s ease;
        }
        
        .delete-task-btn:hover {
          background-color: #c0392b !important;
        }
        
        /* Animation pour le bouton d'ajout de tâche */
        .add-task-btn:hover {
          background-color: #2980b9 !important;
        }
        
        /* Animation pour le bouton de création */
        .create-project-btn:hover {
          background-color: #27ae60 !important;
        }
        
        /* Amélioration de la lisibilité sur mobile */
        @media (max-width: 768px) {
          .task-title-input {
            font-size: 1rem !important;
          }
          
          .task-description {
            min-height: 70px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NewProject;