/**
 * ClientProfile component - Gestion du profil utilisateur avec récapitulatif d'activité
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    bio: "",
    skills: "",
    website: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  // États pour les statistiques
  const [userProjects, setUserProjects] = useState([]);
  const [mentoringSessions, setMentoringSessions] = useState([]);
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
    
    // Charger les données du profil
    const userProfile = JSON.parse(localStorage.getItem(`userProfile_${user.id}`) || '{}');
    
    setProfileData({
      name: user.name || "",
      email: user.email || "",
      phone: userProfile.phone || "",
      company: userProfile.company || "",
      position: userProfile.position || "",
      bio: userProfile.bio || "",
      skills: userProfile.skills || "",
      website: userProfile.website || ""
    });
    
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

  const handleSaveProfile = () => {
    // Mettre à jour les données utilisateur
    const updatedUser = {
      ...currentUser,
      name: profileData.name,
      email: profileData.email
    };
    
    // Sauvegarder l'utilisateur
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => 
      u.id === currentUser.id ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Sauvegarder le profil
    const userProfile = {
      phone: profileData.phone,
      company: profileData.company,
      position: profileData.position,
      bio: profileData.bio,
      skills: profileData.skills,
      website: profileData.website,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(`userProfile_${currentUser.id}`, JSON.stringify(userProfile));
    
    setCurrentUser(updatedUser);
    setIsEditing(false);
    alert("Profil mis à jour avec succès !");
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    
    // Vérifier l'ancien mot de passe
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.id === currentUser.id);
    
    if (user.password !== passwordData.currentPassword) {
      alert("Mot de passe actuel incorrect");
      return;
    }
    
    // Mettre à jour le mot de passe
    const updatedUsers = users.map(u => 
      u.id === currentUser.id ? { ...u, password: passwordData.newPassword } : u
    );
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Mettre à jour l'utilisateur courant
    const updatedUser = { ...currentUser, password: passwordData.newPassword };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    
    alert("Mot de passe changé avec succès !");
  };

  const handleDeleteAccount = () => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      return;
    }
    
    // Supprimer l'utilisateur
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter(u => u.id !== currentUser.id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Supprimer le profil
    localStorage.removeItem(`userProfile_${currentUser.id}`);
    
    // Supprimer les sessions de l'utilisateur
    const sessions = JSON.parse(localStorage.getItem('mentoringSessions') || '[]');
    const updatedSessions = sessions.filter(s => s.clientId !== currentUser.id);
    localStorage.setItem('mentoringSessions', JSON.stringify(updatedSessions));
    
    // Supprimer les projets de l'utilisateur (ou les garder avec client inconnu)
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = projects.filter(p => p.clientId !== currentUser.id);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Déconnexion
    localStorage.removeItem('currentUser');
    navigate('/');
    alert("Compte supprimé avec succès.");
  };

  if (!currentUser) {
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
        <h2>Chargement...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      paddingTop: "5rem", 
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "2rem",
      minHeight: "100vh",
      backgroundColor: "#f5f7fa"
    }}>
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto",
      }}>
        {/* En-tête */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "1.5rem", 
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          marginBottom: "1.5rem"
        }}>
          <h1 style={{ 
            margin: 0, 
            color: "#2c3e50",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            marginBottom: "0.5rem"
          }}>
            Mon Profil
          </h1>
          <p style={{ 
            color: "#5d6d7e", 
            fontSize: "clamp(0.9rem, 1.2vw, 1rem)"
          }}>
            Gérez vos informations personnelles et consultez votre activité
          </p>
        </div>

        {/* Contenu principal */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "1.5rem",
          marginBottom: "1.5rem"
        }}>
          {/* Colonne gauche - Informations personnelles */}
          <div>
            <div style={{ 
              backgroundColor: "white", 
              padding: "1.5rem", 
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              marginBottom: "1.5rem"
            }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "1.5rem" 
              }}>
                <h2 style={{ 
                  margin: 0, 
                  color: "#2c3e50", 
                  fontSize: "1.3rem"
                }}>
                  Informations personnelles
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.9rem"
                    }}
                  >
                    Modifier
                  </button>
                ) : (
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      onClick={handleSaveProfile}
                      style={{
                        backgroundColor: "#2ecc71",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.9rem"
                      }}
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      style={{
                        backgroundColor: "#95a5a6",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "0.9rem"
                      }}
                    >
                      Annuler
                    </button>
                  </div>
                )}
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: "1rem", 
                marginBottom: "1rem" 
              }}>
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e", 
                    fontSize: "0.9rem" 
                  }}>
                    Entreprise
                  </label>
                  <input
                    type="text"
                    value={profileData.company}
                    onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                    disabled={!isEditing}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                      backgroundColor: isEditing ? "white" : "#f8f9fa"
                    }}
                    placeholder="Nom de l'entreprise"
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem", 
                    color: "#5d6d7e", 
                    fontSize: "0.9rem" 
                  }}>
                    Poste
                  </label>
                  <input
                    type="text"
                    value={profileData.position}
                    onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                    disabled={!isEditing}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                      backgroundColor: isEditing ? "white" : "#f8f9fa"
                    }}
                    placeholder="Développeur, Chef de projet..."
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Site web / Portfolio
                </label>
                <input
                  type="url"
                  value={profileData.website}
                  onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  placeholder="https://votresite.com"
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Compétences
                </label>
                <input
                  type="text"
                  value={profileData.skills}
                  onChange={(e) => setProfileData({...profileData, skills: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  placeholder="React, Node.js, Python, UX Design..."
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Biographie
                </label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  disabled={!isEditing}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    minHeight: "100px",
                    backgroundColor: isEditing ? "white" : "#f8f9fa"
                  }}
                  placeholder="Présentez-vous en quelques mots..."
                />
              </div>
            </div>

            {/* Récapitulatif d'activité du dashboard */}
            <div style={{ 
              backgroundColor: "#f8f9fa", 
              padding: "1.5rem", 
              borderRadius: "8px",
              marginBottom: "1.2rem"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "1rem", 
                fontSize: "1.1rem" 
              }}>
                Récapitulatif d'activité
              </h4>
              
              <div style={{ marginBottom: "1.2rem" }}>
                <h5 style={{ 
                  color: "#5d6d7e", 
                  marginBottom: "0.5rem", 
                  fontSize: "1rem" 
                }}>
                  Projets
                </h5>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.8rem", 
                  marginBottom: "0.5rem" 
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between" 
                    }}>
                      <span style={{ 
                        fontSize: "0.9rem", 
                        color: "#7f8c8d" 
                      }}>
                        Total
                      </span>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#2c3e50" 
                      }}>
                        {stats.totalProjects}
                      </span>
                    </div>
                    <div style={{ 
                      height: "6px", 
                      backgroundColor: "#e1e8ed", 
                      borderRadius: "3px",
                      marginTop: "0.3rem"
                    }}></div>
                  </div>
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.8rem", 
                  marginBottom: "0.5rem" 
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between" 
                    }}>
                      <span style={{ 
                        fontSize: "0.9rem", 
                        color: "#7f8c8d" 
                      }}>
                        En cours
                      </span>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#3498db" 
                      }}>
                        {stats.inProgressProjects}
                      </span>
                    </div>
                    <div style={{ 
                      height: "6px", 
                      backgroundColor: "#3498db", 
                      borderRadius: "3px",
                      marginTop: "0.3rem",
                      width: `${stats.totalProjects > 0 ? (stats.inProgressProjects / stats.totalProjects * 100) : 0}%`
                    }}></div>
                  </div>
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.8rem" 
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between" 
                    }}>
                      <span style={{ 
                        fontSize: "0.9rem", 
                        color: "#7f8c8d" 
                      }}>
                        Terminés
                      </span>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#2ecc71" 
                      }}>
                        {stats.completedProjects}
                      </span>
                    </div>
                    <div style={{ 
                      height: "6px", 
                      backgroundColor: "#2ecc71", 
                      borderRadius: "3px",
                      marginTop: "0.3rem",
                      width: `${stats.totalProjects > 0 ? (stats.completedProjects / stats.totalProjects * 100) : 0}%`
                    }}></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 style={{ 
                  color: "#5d6d7e", 
                  marginBottom: "0.5rem", 
                  fontSize: "1rem" 
                }}>
                  Mentorat
                </h5>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.8rem" 
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between" 
                    }}>
                      <span style={{ 
                        fontSize: "0.9rem", 
                        color: "#7f8c8d" 
                      }}>
                        Sessions planifiées
                      </span>
                      <span style={{ 
                        fontWeight: "500", 
                        color: "#9b59b6" 
                      }}>
                        {stats.upcomingSessions}
                      </span>
                    </div>
                    <div style={{ 
                      height: "6px", 
                      backgroundColor: "#9b59b6", 
                      borderRadius: "3px",
                      marginTop: "0.3rem"
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bouton de déconnexion */}
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                navigate('/');
              }}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.95rem",
                width: "100%",
                fontWeight: "500"
              }}
            >
              Déconnexion
            </button>
          </div>
          
          {/* Colonne droite - Sécurité et informations */}
          <div>
            {/* Changement de mot de passe */}
            <div style={{ 
              backgroundColor: "white", 
              padding: "1.5rem", 
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              marginBottom: "1.5rem"
            }}>
              <h2 style={{ 
                margin: "0 0 1.5rem 0", 
                color: "#2c3e50", 
                fontSize: "1.3rem" 
              }}>
                Changer le mot de passe
              </h2>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "#5d6d7e", 
                  fontSize: "0.9rem" 
                }}>
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "0.95rem"
                  }}
                />
              </div>
              
              <button
                onClick={handleChangePassword}
                style={{
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  width: "100%",
                  fontWeight: "500"
                }}
              >
                Changer le mot de passe
              </button>
            </div>
            
            {/* Informations du compte */}
            <div style={{ 
              backgroundColor: "white", 
              padding: "1.5rem", 
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              marginBottom: "1.5rem"
            }}>
              <h2 style={{ 
                margin: "0 0 1.5rem 0", 
                color: "#2c3e50", 
                fontSize: "1.3rem" 
              }}>
                Informations du compte
              </h2>
              
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ 
                  fontWeight: "500", 
                  color: "#7f8c8d", 
                  fontSize: "0.9rem" 
                }}>
                  Type de compte: 
                </span>
                <span style={{ 
                  backgroundColor: currentUser.userType === 'admin' ? '#e74c3c' : '#3498db',
                  color: "white",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  marginLeft: "0.5rem"
                }}>
                  {currentUser.userType === 'admin' ? 'Administrateur' : 'Client'}
                </span>
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ 
                  fontWeight: "500", 
                  color: "#7f8c8d", 
                  fontSize: "0.9rem" 
                }}>
                  Date d'inscription: 
                </span>
                <span style={{ 
                  color: "#2c3e50", 
                  fontSize: "0.9rem" 
                }}>
                  {new Date(currentUser.createdAt).toLocaleDateString('fr-FR', { 
                    day: '2-digit', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ 
                  fontWeight: "500", 
                  color: "#7f8c8d", 
                  fontSize: "0.9rem" 
                }}>
                  ID utilisateur: 
                </span>
                <span style={{ 
                  color: "#2c3e50", 
                  fontFamily: "monospace", 
                  fontSize: "0.9rem" 
                }}>
                  {currentUser.id}
                </span>
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ 
                  fontWeight: "500", 
                  color: "#7f8c8d", 
                  fontSize: "0.9rem" 
                }}>
                  Dernière connexion: 
                </span>
                <span style={{ 
                  color: "#2c3e50", 
                  fontSize: "0.9rem" 
                }}>
                  {new Date().toLocaleDateString('fr-FR', { 
                    day: '2-digit', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <div style={{ 
                backgroundColor: "#fef9e7", 
                padding: "1rem", 
                borderRadius: "6px",
                borderLeft: "4px solid #f39c12",
                marginTop: "1rem"
              }}>
                <p style={{ 
                  margin: 0, 
                  color: "#f39c12", 
                  fontSize: "0.85rem" 
                }}>
                  <strong>Note :</strong> Pour toute question concernant votre compte, contactez-nous à contact@emmanuelamela.com
                </p>
              </div>
            </div>
            
            {/* Suppression du compte */}
            <div style={{ 
              backgroundColor: "white", 
              padding: "1.5rem", 
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e74c3c"
            }}>
              <h2 style={{ 
                margin: "0 0 1rem 0", 
                color: "#e74c3c", 
                fontSize: "1.3rem" 
              }}>
                Zone dangereuse
              </h2>
              <p style={{ 
                color: "#5d6d7e", 
                marginBottom: "1.5rem", 
                fontSize: "0.9rem" 
              }}>
                La suppression de votre compte est irréversible. Toutes vos données, projets et sessions seront définitivement supprimés.
              </p>
              
              <button
                onClick={handleDeleteAccount}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  width: "100%",
                  fontWeight: "500"
                }}
              >
                Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;