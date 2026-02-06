import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ currentUser, onLogout, onUpdateProfile, showProfileMenu, setShowProfileMenu }) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    company: currentUser?.company || "",
    position: currentUser?.position || "",
    website: currentUser?.website || "",
    skills: currentUser?.skills || "",
    bio: currentUser?.bio || ""
  });

  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Gérer les clics en dehors du menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && 
          profileMenuRef.current && 
          !profileMenuRef.current.contains(event.target) &&
          profileButtonRef.current &&
          !profileButtonRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu, setShowProfileMenu]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    onUpdateProfile(editData);
    setIsEditMode(false);
    alert("Profil mis à jour avec succès!");
  };

  const handleCancel = () => {
    setEditData({
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
      company: currentUser?.company || "",
      position: currentUser?.position || "",
      website: currentUser?.website || "",
      skills: currentUser?.skills || "",
      bio: currentUser?.bio || ""
    });
    setIsEditMode(false);
  };

  // Styles responsive
  const responsiveMenuStyle = {
    position: "fixed",
    top: "70px",
    right: "clamp(10px, 2vw, 20px)",
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    zIndex: 2000,
    width: "clamp(280px, 90vw, 350px)",
    maxWidth: "500px",
    overflow: "hidden",
    maxHeight: "calc(100vh - 90px)",
    overflowY: "auto"
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.8rem 1rem",
    border: "none",
    backgroundColor: "white",
    color: "#2c3e50",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
    transition: "all 0.2s ease",
    borderBottom: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    lineHeight: "1.4"
  };

  const inputStyle = {
    width: "100%",
    padding: "0.7rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
    boxSizing: "border-box",
    marginBottom: "0.8rem"
  };

  const labelStyle = {
    display: "block",
    fontSize: "clamp(0.8rem, 1vw, 0.85rem)",
    fontWeight: "500",
    color: "#2c3e50",
    marginBottom: "0.3rem"
  };

  return (
    <div 
      className="profile-menu-container"
      style={{ 
        position: "relative",
        display: "flex",
        alignItems: "center"
      }}
    >
      <button
        ref={profileButtonRef}
        onClick={() => setShowProfileMenu(!showProfileMenu)}
        style={{
          width: "clamp(36px, 4vw, 42px)",
          height: "clamp(36px, 4vw, 42px)",
          borderRadius: "50%",
          backgroundColor: "#3498db",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
          transition: "all 0.3s ease",
          boxShadow: showProfileMenu ? "0 0 10px rgba(52, 152, 219, 0.5)" : "none",
          zIndex: 1101,
          fontWeight: "bold",
          color: "white",
          flexShrink: 0
        }}
        title={currentUser?.name}
        aria-label="Menu profil"
      >
        {currentUser?.name?.charAt(0)?.toUpperCase() || "👤"}
      </button>
      
      {showProfileMenu && (
        <div
          ref={profileMenuRef}
          style={responsiveMenuStyle}
        >
          {!isEditMode ? (
            <>
              {/* En-tête du profil */}
              <div style={{
                padding: "1rem",
                borderBottom: "1px solid #eee",
                backgroundColor: "#f8f9fa"
              }}>
                <div style={{
                  fontWeight: "bold",
                  color: "#2c3e50",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  marginBottom: "0.2rem",
                  wordBreak: "break-word"
                }}>
                  {currentUser?.name}
                </div>
                <div style={{
                  fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)",
                  color: "#7f8c8d",
                  wordBreak: "break-word"
                }}>
                  {currentUser?.email}
                </div>
                <div style={{
                  fontSize: "clamp(0.7rem, 0.8vw, 0.75rem)",
                  color: currentUser?.userType === 'admin' ? "#e74c3c" : "#3498db",
                  marginTop: "0.3rem",
                  fontWeight: "500"
                }}>
                  {currentUser?.userType === 'admin' ? 'Administrateur' : 'Client'}
                </div>
              </div>

              {/* Options de navigation selon le type d'utilisateur */}
              {currentUser?.userType === 'admin' ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/admin');
                      setShowProfileMenu(false);
                    }}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <span style={{ minWidth: "24px", fontSize: "1rem" }}>⚙️</span>
                    <span>Administration</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/projects');
                      setShowProfileMenu(false);
                    }}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <span style={{ minWidth: "24px", fontSize: "1rem" }}>📁</span>
                    <span>Projets Clients</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/statistics');
                      setShowProfileMenu(false);
                    }}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <span style={{ minWidth: "24px", fontSize: "1rem" }}>📈</span>
                    <span>Statistiques</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/dashboard');
                      setShowProfileMenu(false);
                    }}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <span style={{ minWidth: "24px", fontSize: "1rem" }}>📊</span>
                    <span>Mon Tableau de Bord</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/mentoring');
                      setShowProfileMenu(false);
                    }}
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                  >
                    <span style={{ minWidth: "24px", fontSize: "1rem" }}>👨‍🏫</span>
                    <span>Mentorat</span>
                  </button>
                </>
              )}

              <button
                onClick={() => setIsEditMode(true)}
                style={{
                  ...buttonStyle,
                  color: "#3498db",
                  borderBottom: "1px solid #eee"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#e8f4f8"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
              >
                <span style={{ minWidth: "24px", fontSize: "1rem" }}>✎</span>
                <span>Modifier le profil</span>
              </button>

              <button
                onClick={() => {
                  navigate('/profile');
                  setShowProfileMenu(false);
                }}
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
              >
                <span style={{ minWidth: "24px", fontSize: "1rem" }}>👤</span>
                <span>Page Profil Complète</span>
              </button>

              <button
                onClick={() => {
                  onLogout();
                  setShowProfileMenu(false);
                }}
                style={{
                  ...buttonStyle,
                  backgroundColor: "#fff5f5",
                  color: "#e74c3c",
                  fontWeight: "600",
                  borderBottom: "none",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#ffe5e5"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#fff5f5"}
              >
                <span style={{ fontSize: "1rem" }}>🚪</span>
                <span>Déconnexion</span>
              </button>
            </>
          ) : (
            <div style={{
              padding: "clamp(0.8rem, 1.5vw, 1rem)"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                borderBottom: "2px solid #3498db",
                paddingBottom: "0.5rem"
              }}>
                <h3 style={{
                  margin: 0,
                  fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                  color: "#2c3e50",
                  fontWeight: "bold"
                }}>
                  Modifier le profil
                </h3>
                <button
                  onClick={handleCancel}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "#7f8c8d",
                    padding: "0",
                    lineHeight: "1"
                  }}
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <label style={labelStyle}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  style={inputStyle}
                  placeholder="Votre nom"
                />
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <label style={labelStyle}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                  style={inputStyle}
                  placeholder="votre@email.com"
                />
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <label style={labelStyle}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={editData.phone}
                  onChange={handleEditChange}
                  style={inputStyle}
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: "0.8rem",
                marginBottom: "0.8rem"
              }}>
                <div>
                  <label style={labelStyle}>
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={editData.company}
                    onChange={handleEditChange}
                    style={{...inputStyle, marginBottom: 0}}
                    placeholder="Nom de l'entreprise"
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Poste
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={editData.position}
                    onChange={handleEditChange}
                    style={{...inputStyle, marginBottom: 0}}
                    placeholder="Développeur, Chef de projet"
                  />
                </div>
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <label style={labelStyle}>
                  Site web / Portfolio
                </label>
                <input
                  type="url"
                  name="website"
                  value={editData.website}
                  onChange={handleEditChange}
                  style={inputStyle}
                  placeholder="https://votresite.com"
                />
              </div>

              <div style={{ marginBottom: "0.8rem" }}>
                <label style={labelStyle}>
                  Compétences
                </label>
                <textarea
                  name="skills"
                  value={editData.skills}
                  onChange={handleEditChange}
                  style={{
                    ...inputStyle,
                    minHeight: "80px",
                    resize: "vertical"
                  }}
                  placeholder="React, Node.js, Python, UX Design..."
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>
                  Biographie
                </label>
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleEditChange}
                  style={{
                    ...inputStyle,
                    minHeight: "100px",
                    resize: "vertical"
                  }}
                  placeholder="Présentez-vous en quelques mots..."
                />
              </div>

              <div style={{
                display: "flex",
                gap: "0.8rem",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={handleSaveProfile}
                  style={{
                    flex: "1 1 45%",
                    minWidth: "120px",
                    padding: "clamp(0.6rem, 1vw, 0.8rem)",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#2ecc71",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "clamp(0.85rem, 1vw, 0.9rem)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#27ae60"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#2ecc71"}
                >
                  Enregistrer
                </button>
                <button
                  onClick={handleCancel}
                  style={{
                    flex: "1 1 45%",
                    minWidth: "120px",
                    padding: "clamp(0.6rem, 1vw, 0.8rem)",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    color: "#2c3e50",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "clamp(0.85rem, 1vw, 0.9rem)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                >
                  Annuler
                </button>
              </div>

              <div style={{
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid #eee"
              }}>
                <button
                  onClick={() => navigate('/profile')}
                  style={{
                    width: "100%",
                    padding: "clamp(0.6rem, 1vw, 0.8rem)",
                    border: "1px solid #3498db",
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                    color: "#3498db",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "clamp(0.85rem, 1vw, 0.9rem)",
                    transition: "all 0.3s ease",
                    textAlign: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#3498db";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#3498db";
                  }}
                >
                  Voir la page profil complète
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Styles CSS pour la responsivité */}
      <style>{`
        @media (max-width: 768px) {
          .profile-menu-container > button {
            width: 38px !important;
            height: 38px !important;
            font-size: 1.1rem !important;
          }
          
          .profile-menu-container > div > div {
            max-height: 70vh !important;
            width: 95vw !important;
            max-width: 400px !important;
            right: 2.5vw !important;
          }
        }
        
        @media (max-width: 480px) {
          .profile-menu-container > button {
            width: 36px !important;
            height: 36px !important;
            font-size: 1rem !important;
          }
          
          .profile-menu-container > div > div {
            width: 92vw !important;
            right: 4vw !important;
          }
          
          .profile-menu-container input,
          .profile-menu-container textarea {
            font-size: 0.9rem !important;
            padding: 0.6rem !important;
          }
          
          .profile-menu-container button[style*="flex: 1"] {
            min-width: 100px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .profile-menu-container > div > div {
            width: 85vw !important;
            max-width: 400px !important;
          }
          
          .profile-menu-container input,
          .profile-menu-container textarea {
            font-size: 0.9rem !important;
          }
        }
        
        @media (min-width: 1025px) and (max-width: 1280px) {
          .profile-menu-container > div > div {
            width: 80vw !important;
            max-width: 380px !important;
          }
        }
        
        /* Animation pour le menu */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .profile-menu-container > div > div {
          animation: slideDown 0.2s ease-out;
        }
        
        /* Empêcher le débordement sur mobile */
        .profile-menu-container > div > div {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        
        /* Améliorer la lisibilité sur petits écrans */
        @media (max-width: 768px) {
          .profile-menu-container h3 {
            font-size: 1rem !important;
          }
          
          .profile-menu-container label {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileMenu;