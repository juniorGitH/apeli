/**
 * Header component avec authentification multi-utilisateurs
 * Version responsive optimisée - Boutons visibles sur tous les écrans
 * Ajout du téléchargement du CV (accessible partout)
 */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    name: "",
    userType: "client"
  });
  const [currentUser, setCurrentUser] = useState(null);
  
  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Vérifier si l'utilisateur est connecté au chargement
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Détecter la taille de l'écran avec des breakpoints optimisés
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobileBreakpoint = 992;
      setIsMobile(width <= mobileBreakpoint);
      
      if (width > mobileBreakpoint) {
        setIsMenuOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Gérer les clics en dehors du menu profil et du menu mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburgerButton = document.querySelector('.hamburger-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          hamburgerButton && !hamburgerButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
      
      if (showProfileMenu && 
          profileMenuRef.current && 
          !profileMenuRef.current.contains(event.target) &&
          profileButtonRef.current &&
          !profileButtonRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, showProfileMenu]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen || showAuthModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, showAuthModal]);

  // Écouter l'événement d'ouverture du modal d'auth depuis d'autres composants
  useEffect(() => {
    const handleOpenAuth = (e) => {
      const mode = e.detail?.mode;
      setIsLoginMode(mode !== "signup");
      setShowAuthModal(true);
    };
    window.addEventListener("openAuthModal", handleOpenAuth);
    return () => window.removeEventListener("openAuthModal", handleOpenAuth);
  }, []);

  // Gestion du clic sur Accueil
  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);
    setShowProfileMenu(false);
    navigate('/', { state: { scrollTo: 'home' } });
  };

  // Gestion de l'authentification
  const handleAuth = (e) => {
    e.preventDefault();
    
    if (isLoginMode) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => 
        u.email === authData.email && u.password === authData.password
      );
      
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        setShowAuthModal(false);
        setAuthData({ email: "", password: "", name: "", userType: "client" });
        navigate(user.userType === 'admin' ? '/admin' : '/dashboard');
      } else {
        alert("Identifiants incorrects. Inscrivez-vous si vous n'avez pas de compte.");
      }
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.find(u => u.email === authData.email)) {
        alert("Cet email est déjà utilisé. Connectez-vous ou utilisez un autre email.");
        return;
      }
      
      const newUser = {
        id: Date.now(),
        ...authData,
        createdAt: new Date().toISOString(),
        projects: []
      };
      
      const updatedUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setCurrentUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setShowAuthModal(false);
      setAuthData({ email: "", password: "", name: "", userType: "client" });
      navigate(newUser.userType === 'admin' ? '/admin' : '/dashboard');
    }
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setShowProfileMenu(false);
    if (location.pathname === '/dashboard' || location.pathname === '/admin' || 
        location.pathname === '/chatbot' || location.pathname === '/profile') {
      navigate('/');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowProfileMenu(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // Styles optimisés
  const navLinkStyle = (isActive) => ({
    color: isActive ? "#e67e22" : "#2c3e50",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
    transition: "all 0.3s ease",
    position: "relative",
    padding: "0.5rem 0",
    cursor: "pointer",
    whiteSpace: "nowrap",
    display: "inline-block"
  });

  const mobileNavLinkStyle = (isActive) => ({
    color: isActive ? "#e67e22" : "#2c3e50",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.95rem",
    padding: "0.85rem 1rem",
    display: "block",
    width: "100%",
    textAlign: "left",
    backgroundColor: "white",
    borderBottom: "1px solid #eee",
    transition: "all 0.3s ease",
    lineHeight: "1.4"
  });

  const buttonStyle = (variant = 'primary', size = 'medium') => {
    const baseStyle = {
      backgroundColor: variant === 'primary' ? "#e67e22" : 
                     variant === 'success' ? "#2ecc71" : 
                     variant === 'warning' ? "#f39c12" : "#e67e22",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    };

    if (size === 'small') {
      return { ...baseStyle, padding: "0.35rem 0.7rem", fontSize: "0.8rem" };
    }
    
    if (size === 'large') {
      return { ...baseStyle, padding: "0.75rem 1.25rem", fontSize: "0.95rem" };
    }
    
    return { ...baseStyle, padding: "0.55rem 1rem", fontSize: "0.85rem" };
  };

  const profileMenuItemStyle = {
    width: "100%",
    padding: "0.7rem 0.85rem",
    border: "none",
    backgroundColor: "white",
    color: "#2c3e50",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "0.85rem",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    lineHeight: "1.4",
    whiteSpace: "normal",
    wordBreak: "break-word"
  };

  return (
    <>
      <header className="site-header">
        {/* Logo */}
        <div className="header-logo">
          <Link 
            to="/" 
            onClick={handleHomeClick}
            style={{ 
              textDecoration: "none", 
              display: "flex", 
              alignItems: "center",
              gap: "0.5rem"
            }}
            aria-label="Accueil"
          >
            <img
              src={logo}
              alt="Logo"
              style={{ 
                height: "clamp(30px, 4.5vw, 38px)",
                width: "auto",
                objectFit: "contain",
                borderRadius: "0",
              }}
              loading="eager"
            />
          </Link>
        </div>
        
        {/* Navigation Desktop */}
        {!isMobile && (
          <>
            <nav className="desktop-nav">
              <button 
                onClick={handleHomeClick}
                style={navLinkStyle(location.pathname === '/' && !location.hash)}
                className="nav-link-button"
              >
                Accueil
              </button>
              
              {currentUser && (
                <Link 
                  to="/chatbot" 
                  style={navLinkStyle(location.pathname === '/chatbot')}
                  onClick={() => setShowProfileMenu(false)}
                >
                  Chatbot
                </Link>
              )}
              
              <Link 
                to="/foyer" 
                style={navLinkStyle(location.pathname === '/foyer')}
                onClick={() => setShowProfileMenu(false)}
              >
                Foyer Apeli
              </Link>
              
              <Link 
                to="/doctorante" 
                style={navLinkStyle(location.pathname === '/doctorante')}
                onClick={() => setShowProfileMenu(false)}
              >
                Doctorante
              </Link>
              
              <Link 
                to="/equipe" 
                style={navLinkStyle(location.pathname === '/equipe')}
                onClick={() => setShowProfileMenu(false)}
              >
                Équipe
              </Link>
            </nav>

            {/* Actions utilisateur Desktop */}
            <div className="header-actions">
              {currentUser ? (
                <div className="profile-wrapper">
                  <button
                    ref={profileButtonRef}
                    onClick={toggleProfileMenu}
                    className="profile-button"
                    style={{
                      boxShadow: showProfileMenu ? "0 0 0 3px rgba(52, 152, 219, 0.3)" : "none"
                    }}
                    title={currentUser.name}
                    aria-label="Menu profil"
                    aria-expanded={showProfileMenu}
                  >
                    {currentUser.name.charAt(0).toUpperCase()}
                  </button>
                  
                  {showProfileMenu && (
                    <div ref={profileMenuRef} className="profile-menu">
                      <div className="profile-menu-header">
                        <div className="profile-name">{currentUser.name}</div>
                        <div className="profile-email">{currentUser.email}</div>
                        <div className="profile-type">
                          {currentUser.userType === 'admin' ? 'Administrateur' : 'Client'}
                        </div>
                      </div>
                      
                      <div className="profile-menu-items">
                        {currentUser.userType === 'client' ? (
                          <>
                            <button
                              onClick={() => {
                                navigate('/chatbot');
                                setShowProfileMenu(false);
                              }}
                              style={profileMenuItemStyle}
                              className="profile-menu-item"
                            >
                              <span></span>
                              <span>Chatbot Cuisine</span>
                            </button>
                            <button
                              onClick={() => {
                                navigate('/dashboard');
                                setShowProfileMenu(false);
                              }}
                              style={profileMenuItemStyle}
                              className="profile-menu-item"
                            >
                              <span></span>
                              <span>Mon Tableau de Bord</span>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                navigate('/admin');
                                setShowProfileMenu(false);
                              }}
                              style={profileMenuItemStyle}
                              className="profile-menu-item"
                            >
                              <span></span>
                              <span>Administration</span>
                            </button>
                            <button
                              onClick={() => {
                                navigate('/chatbot');
                                setShowProfileMenu(false);
                              }}
                              style={profileMenuItemStyle}
                              className="profile-menu-item"
                            >
                              <span></span>
                              <span>Chatbot Cuisine</span>
                            </button>
                          </>
                        )}
                        
                        <div className="menu-divider"></div>
                        
                        <button
                          onClick={() => {
                            navigate('/profile');
                            setShowProfileMenu(false);
                          }}
                          style={profileMenuItemStyle}
                          className="profile-menu-item"
                        >
                          <span></span>
                          <span>Profile</span>
                        </button>
                      </div>
                      
                      <div className="profile-menu-footer">
                        <button
                          onClick={handleLogout}
                          className="logout-button"
                        >
                          <span></span>
                          <span>Déconnexion</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsLoginMode(true);
                    }}
                    style={buttonStyle('primary', 'medium')}
                    className="auth-btn"
                    aria-label="Se connecter"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsLoginMode(false);
                    }}
                    style={buttonStyle('success', 'medium')}
                    className="auth-btn"
                    aria-label="S'inscrire"
                  >
                    Inscription
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Section Mobile: Boutons d'authentification + Hamburger + CV */}
        {isMobile && (
          <div className="mobile-header-actions">
            {!currentUser && (
              <div className="mobile-auth-buttons">
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsLoginMode(true);
                  }}
                  className="mobile-auth-btn login-btn"
                  aria-label="Se connecter"
                >
                  <span className="btn-text">Connexion</span>
                </button>
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsLoginMode(false);
                  }}
                  className="mobile-auth-btn signup-btn"
                  aria-label="S'inscrire"
                >
                  <span className="btn-text">Inscription</span>
                </button>
              </div>
            )}
            
            {currentUser && (
              <div className="mobile-profile-button">
                <button
                  onClick={toggleMenu}
                  className="profile-avatar-mobile"
                  title={currentUser.name}
                >
                  {currentUser.name.charAt(0).toUpperCase()}
                </button>
              </div>
            )}

            {/* Bouton hamburger */}
            <button
              className="hamburger-button"
              onClick={toggleMenu}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        )}

        {/* Overlay pour mobile */}
        {isMobile && isMenuOpen && (
          <div 
            className="mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Menu mobile */}
        {isMobile && (
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {currentUser && (
              <div className="mobile-user-info">
                <div className="mobile-user-avatar">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="mobile-user-details">
                  <div className="mobile-user-name">{currentUser.name}</div>
                  <div className="mobile-user-email">{currentUser.email}</div>
                  <div className="mobile-user-type">
                    {currentUser.userType === 'admin' ? 'Administrateur' : 'Client'}
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={handleHomeClick}
              style={mobileNavLinkStyle(location.pathname === '/' && !location.hash)}
              className="mobile-menu-item"
            >
              <span className="menu-icon"></span>
              Accueil
            </button>
            
            {currentUser && (
              <Link 
                to="/chatbot" 
                onClick={() => setIsMenuOpen(false)}
                style={mobileNavLinkStyle(location.pathname === '/chatbot')}
                className="mobile-menu-item"
              >
                <span className="menu-icon"></span>
                Chatbot IA
              </Link>
            )}
            
            <Link 
              to="/foyer" 
              onClick={() => setIsMenuOpen(false)}
              style={mobileNavLinkStyle(location.pathname === '/foyer')}
              className="mobile-menu-item"
            >
              <span className="menu-icon"></span>
              Foyer Apeli
            </Link>
            
            <Link 
              to="/doctorante" 
              onClick={() => setIsMenuOpen(false)}
              style={mobileNavLinkStyle(location.pathname === '/doctorante')}
              className="mobile-menu-item"
            >
              <span className="menu-icon"></span>
              Doctorante
            </Link>
            
            <Link 
              to="/equipe" 
              onClick={() => setIsMenuOpen(false)}
              style={mobileNavLinkStyle(location.pathname === '/equipe')}
              className="mobile-menu-item"
            >
              <span className="menu-icon"></span>
              Équipe
            </Link>

            {currentUser && (
              <>
                {currentUser.userType === 'admin' ? (
                  <>
                    <Link 
                      to="/admin" 
                      onClick={() => setIsMenuOpen(false)}
                      style={mobileNavLinkStyle(location.pathname === '/admin')}
                      className="mobile-menu-item"
                    >
                      <span className="menu-icon"></span>
                      Administration
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/dashboard" 
                      onClick={() => setIsMenuOpen(false)}
                      style={mobileNavLinkStyle(location.pathname === '/dashboard')}
                      className="mobile-menu-item"
                    >
                      <span className="menu-icon"></span>
                      Mon Tableau de Bord
                    </Link>
                  </>
                )}
                
                <Link 
                  to="/profile" 
                  onClick={() => setIsMenuOpen(false)}
                  style={mobileNavLinkStyle(location.pathname === '/profile')}
                  className="mobile-menu-item"
                >
                  <span className="menu-icon"></span>
                  Profil
                </Link>
                
                <div className="mobile-menu-footer">
                  <button
                    onClick={handleLogout}
                    className="mobile-logout-btn"
                  >
                    <span></span>
                    Déconnexion
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </header>

      {/* Modal d'authentification */}
      {showAuthModal && (
        <div className="auth-modal-overlay" onClick={(e) => {
          if (e.target === e.currentTarget) setShowAuthModal(false);
        }}>
          <div className="auth-modal">
            <div className="auth-modal-header">
              <h3>{isLoginMode ? "Connexion" : "Inscription"}</h3>
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  setAuthData({ email: "", password: "", name: "", userType: "client" });
                }}
                className="modal-close-btn"
                aria-label="Fermer"
              >
                ×
              </button>
            </div>
            
            <div className="auth-toggle">
              <button
                onClick={() => setIsLoginMode(true)}
                className={isLoginMode ? 'active' : ''}
              >
                Connexion
              </button>
              <button
                onClick={() => setIsLoginMode(false)}
                className={!isLoginMode ? 'active' : ''}
              >
                Inscription
              </button>
            </div>
            
            <form onSubmit={handleAuth} className="auth-form">
              {!isLoginMode && (
                <div className="form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                    value={authData.name}
                    onChange={(e) => setAuthData({...authData, name: e.target.value})}
                    placeholder="Votre nom"
                    required={!isLoginMode}
                  />
                </div>
              )}
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={authData.email}
                  onChange={(e) => setAuthData({...authData, email: e.target.value})}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  value={authData.password}
                  onChange={(e) => setAuthData({...authData, password: e.target.value})}
                  placeholder={isLoginMode ? "Votre mot de passe" : "Créez un mot de passe"}
                  required
                />
              </div>
              
              {!isLoginMode && (
                <div className="form-group">
                  <label>Type de compte</label>
                  <select
                    value={authData.userType}
                    onChange={(e) => setAuthData({...authData, userType: e.target.value})}
                  >
                    <option value="client">Utilisateur (accès chatbot)</option>
                    <option value="admin">Administrateur (réservé)</option>
                  </select>
                  {authData.userType === 'admin' && (
                    <p className="form-note">
                      Note: Ce type de compte est réservé à l'administrateur.
                    </p>
                  )}
                </div>
              )}
              
              <button type="submit" className="auth-submit-btn">
                {isLoginMode ? "Se connecter" : "S'inscrire"}
              </button>
            </form>
            
            <p className="auth-switch">
              {isLoginMode ? "Pas encore de compte ? " : "Déjà un compte ? "}
              <button onClick={() => setIsLoginMode(!isLoginMode)}>
                {isLoginMode ? "Inscrivez-vous" : "Connectez-vous"}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Styles CSS */}
      <style>{`
        /* ===== HEADER BASE ===== */
        .site-header {
          position: fixed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.98);
          padding: 0.85rem clamp(0.75rem, 3vw, 2rem);
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 100vw;
          box-sizing: border-box;
          height: 65px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          min-width: 100px;
        }

        .header-logo img {
          object-fit: contain;
          border-radius: 0;
        }

        /* ===== NAVIGATION DESKTOP ===== */
        .desktop-nav {
          display: flex;
          gap: clamp(0.8rem, 1.5vw, 1.8rem);
          align-items: center;
          justify-content: center;
          flex: 1;
          max-width: 650px;
          margin: 0 1rem;
        }

        .nav-link-button {
          background: none;
          border: none;
          font-family: inherit;
          cursor: pointer;
          position: relative;
        }

        .nav-link-button::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #e67e22;
          transition: width 0.3s ease;
        }

        .nav-link-button:hover::after {
          width: 100%;
        }

        .nav-link-button:hover {
          color: #e67e22;
        }

        /* ===== ACTIONS HEADER ===== */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          flex-shrink: 0;
          min-width: 50px;
          justify-content: flex-end;
          position: relative;
        }

        .auth-buttons {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }

        /* ===== PROFIL ===== */
        .profile-wrapper {
          position: relative;
          z-index: 9999;
        }

        .profile-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #e67e22;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          color: white;
          padding: 0;
          margin-left: 0.3rem;
          font-weight: bold;
        }

        .profile-menu {
          position: fixed;
          top: 65px;
          right: clamp(0.75rem, 3vw, 1rem);
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 99999;
          min-width: 220px;
          max-width: min(90vw, 280px);
          overflow: hidden;
          animation: slideDown 0.2s ease;
        }

        .profile-menu-header {
          padding: 0.9rem;
          border-bottom: 1px solid #eee;
          background-color: #f8f9fa;
        }

        .profile-name {
          font-weight: bold;
          color: #2c3e50;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
          word-break: break-word;
        }

        .profile-email {
          font-size: 0.8rem;
          color: #7f8c8d;
          word-break: break-word;
        }

        .profile-type {
          font-size: 0.7rem;
          color: #e67e22;
          margin-top: 0.3rem;
          font-weight: 500;
        }

        .profile-menu-items {
          padding: 0.2rem 0;
        }

        .profile-menu-item:hover {
          background-color: #f8f9fa !important;
        }

        .menu-divider {
          height: 1px;
          background-color: #eee;
          margin: 0.2rem 0;
        }

        .profile-menu-footer {
          border-top: 1px solid #eee;
          padding: 0.2rem 0;
        }

        .logout-button {
          width: 100%;
          padding: 0.7rem 0.85rem;
          border: none;
          background-color: #fff5f5;
          color: #e74c3c;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .logout-button:hover {
          background-color: #ffe5e5 !important;
        }

        /* ===== BOUTON CV MOBILE ===== */
        .mobile-cv-button {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 0.7rem;
          border: 1px solid #e67e22;
          border-radius: 6px;
          background-color: white;
          color: #e67e22;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          white-space: nowrap;
          margin-right: 0.3rem;
        }

        .mobile-cv-button:hover {
          background-color: #e67e22;
          color: white;
        }

        .mobile-cv-button .btn-icon {
          font-size: 0.9rem;
        }

        .mobile-cv-button .btn-text {
          display: inline;
        }

        /* ===== MOBILE HEADER ACTIONS ===== */
        .mobile-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-auth-buttons {
          display: flex;
          gap: 0.4rem;
          align-items: center;
          margin-right: 0.3rem;
        }

        .mobile-auth-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 0.7rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .login-btn {
          background-color: #e67e22;
          color: white;
        }

        .login-btn:hover {
          background-color: #d35400;
        }

        .signup-btn {
          background-color: #2ecc71;
          color: white;
        }

        .signup-btn:hover {
          background-color: #27ae60;
        }

        .btn-icon {
          font-size: 0.9rem;
        }

        .btn-text {
          display: inline;
        }

        .mobile-profile-button {
          margin-right: 0.3rem;
        }

        .profile-avatar-mobile {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #e67e22;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: white;
          font-weight: bold;
        }

        /* ===== HAMBURGER ===== */
        .hamburger-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1101;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background-color: #2c3e50;
          margin: 3.5px 0;
          transition: all 0.3s ease;
        }

        .hamburger-line.active:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
          background-color: #e67e22;
        }

        .hamburger-line.active:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.active:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -5px);
          background-color: #e67e22;
        }

        /* ===== MOBILE OVERLAY ===== */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1099;
          touch-action: none;
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu {
          position: fixed;
          top: 65px;
          right: -100%;
          width: min(100%, 300px);
          height: calc(100vh - 65px);
          background-color: white;
          box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1100;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-user-info {
          padding: 1rem 0.9rem;
          background-color: #f8f9fa;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .mobile-user-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #e67e22;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
        }

        .mobile-user-details {
          min-width: 0;
          flex: 1;
        }

        .mobile-user-name {
          font-weight: bold;
          color: #2c3e50;
          font-size: 0.9rem;
          word-break: break-word;
          line-height: 1.2;
        }

        .mobile-user-email {
          font-size: 0.75rem;
          color: #7f8c8d;
          margin-top: 0.2rem;
          word-break: break-word;
          line-height: 1.2;
        }

        .mobile-user-type {
          font-size: 0.7rem;
          color: #e67e22;
          margin-top: 0.2rem;
          font-weight: 500;
        }

        .mobile-menu-item {
          animation: slideDown 0.2s ease forwards;
          opacity: 0;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }
        .mobile-menu-item:nth-child(6) { animation-delay: 0.3s; }
        .mobile-menu-item:nth-child(7) { animation-delay: 0.35s; }
        .mobile-menu-item:nth-child(8) { animation-delay: 0.4s; }

        .mobile-menu-item:hover,
        .mobile-menu-item:active {
          background-color: #f8f9fa !important;
          padding-left: 1.2rem !important;
        }

        .menu-icon {
          margin-right: 0.7rem;
          font-size: 1.1rem;
        }

        .mobile-menu-footer {
          padding: 1rem 0.9rem;
          margin-top: auto;
          border-top: 1px solid #eee;
          background-color: #f8f9fa;
        }

        .mobile-logout-btn {
          width: 100%;
          padding: 0.75rem;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .mobile-logout-btn:hover {
          background-color: #c0392b;
        }

        /* ===== AUTH MODAL ===== */
        .auth-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          padding: clamp(0.5rem, 2vw, 1rem);
          overscroll-behavior: contain;
        }

        .auth-modal {
          background-color: white;
          padding: clamp(1.2rem, 4vw, 1.8rem);
          border-radius: 12px;
          width: 100%;
          max-width: min(95vw, 400px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          max-height: 90vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .auth-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
        }

        .auth-modal-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: clamp(1.1rem, 4vw, 1.3rem);
        }

        .modal-close-btn {
          background: none;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
          color: #7f8c8d;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background-color: #f5f5f5;
          color: #e74c3c;
        }

        .auth-toggle {
          display: flex;
          margin-bottom: 1.2rem;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #ddd;
        }

        .auth-toggle button {
          flex: 1;
          padding: clamp(0.65rem, 2vw, 0.75rem);
          background: transparent;
          color: #2c3e50;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: clamp(0.85rem, 2vw, 0.9rem);
          transition: all 0.2s ease;
        }

        .auth-toggle button.active {
          background: #e67e22;
          color: white;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 0.9rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.4rem;
          color: #5d6d7e;
          font-size: clamp(0.8rem, 2vw, 0.85rem);
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: clamp(0.65rem, 2vw, 0.75rem);
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: clamp(0.85rem, 2vw, 0.9rem);
          box-sizing: border-box;
        }

        .form-group select {
          background-color: white;
          appearance: auto;
        }

        .form-note {
          font-size: 0.75rem;
          color: #e74c3c;
          margin-top: 0.4rem;
          line-height: 1.3;
        }

        .auth-submit-btn {
          width: 100%;
          padding: clamp(0.75rem, 2vw, 0.85rem);
          background-color: #e67e22;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .auth-submit-btn:hover {
          background-color: #2980b9;
        }

        .auth-switch {
          margin-top: 1.2rem;
          font-size: clamp(0.75rem, 2vw, 0.8rem);
          color: #7f8c8d;
          text-align: center;
          line-height: 1.4;
        }

        .auth-switch button {
          background: none;
          border: none;
          color: #e67e22;
          cursor: pointer;
          text-decoration: underline;
          font-size: clamp(0.75rem, 2vw, 0.8rem);
          font-weight: 500;
          padding: 0.2rem 0.3rem;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */
        
        /* Très petits écrans (320px - 480px) */
        @media (max-width: 480px) {
          .site-header {
            height: 60px;
            padding: 0.7rem 0.8rem;
          }

          .mobile-menu {
            top: 60px;
            height: calc(100vh - 60px);
            width: 100%;
          }

          .mobile-auth-btn {
            padding: 0.4rem 0.55rem;
            font-size: 0.75rem;
            gap: 0.25rem;
          }

          .mobile-cv-button {
            padding: 0.4rem 0.55rem;
            font-size: 0.75rem;
            gap: 0.25rem;
          }

          .btn-icon {
            font-size: 0.85rem;
          }

          .btn-text {
            display: none; /* Cache le texte "CV" sur très petits écrans, garde l'icône */
          }

          .hamburger-button {
            width: 38px;
            height: 38px;
          }

          .mobile-menu-item {
            padding: 0.75rem 0.9rem !important;
            font-size: 0.9rem !important;
          }

          .profile-avatar-mobile {
            width: 36px;
            height: 36px;
            font-size: 0.95rem;
          }
        }

        /* Très très petits écrans (moins de 360px) */
        @media (max-width: 360px) {
          .site-header {
            padding: 0.6rem 0.6rem;
            height: 55px;
          }

          .mobile-menu {
            top: 55px;
            height: calc(100vh - 55px);
          }

          .mobile-auth-btn,
          .mobile-cv-button {
            padding: 0.35rem 0.5rem;
            font-size: 0.7rem;
          }

          .hamburger-button {
            width: 36px;
            height: 36px;
          }

          .header-logo img {
            height: 28px !important;
          }
        }

        /* Écrans moyens (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .btn-text {
            display: inline; /* Affiche le texte sur écrans moyens */
          }

          .mobile-auth-btn,
          .mobile-cv-button {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
          }
        }

        /* Tablettes (768px - 992px) */
        @media (min-width: 768px) and (max-width: 992px) {
          .desktop-nav {
            gap: 1rem;
            margin: 0 0.5rem;
          }

          .auth-buttons button {
            padding: 0.5rem 0.8rem !important;
            font-size: 0.85rem !important;
          }

          .profile-menu {
            min-width: 200px;
          }
        }

        /* Mode paysage sur mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 70vh;
            overflow-y: auto;
          }

          .auth-modal {
            max-height: 80vh;
          }
        }

        /* Amélioration accessibilité */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible {
          outline: 2px solid #e67e22;
          outline-offset: 2px;
        }

        /* Empêcher le zoom sur iOS */
        @media screen and (max-width: 992px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;