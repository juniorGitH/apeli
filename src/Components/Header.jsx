/**
 * Header component avec authentification multi-utilisateurs
 * Version responsive optimisée
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
      // Utilisation de breakpoints adaptés
      const mobileBreakpoint = 992; // 992px pour tablette
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
      // Fermer le menu mobile
      const hamburgerButton = document.querySelector('.hamburger-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          hamburgerButton && !hamburgerButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
      
      // Fermer le menu profil
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

  // Gestion du clic sur Accueil
  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setShowProfileMenu(false);
    
    // Always navigate to '/' with state to trigger Layout's scrolling logic
    navigate('/', { state: { scrollTo: 'home' } });
  };



  // Gestion du scroll vers les sections
  const handleSectionClick = (sectionId, e) => {
    if (e) e.preventDefault();
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setShowProfileMenu(false);
    
    // Always navigate to '/' with state to trigger Layout's scrolling logic
    navigate('/', { state: { scrollTo: sectionId } });
  };

  // Gestion de l'authentification
  const handleAuth = (e) => {
    e.preventDefault();
    
    if (isLoginMode) {
      // Connexion
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
      // Inscription
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Vérifier si l'email existe déjà
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
    if (location.pathname === '/dashboard' || location.pathname === '/admin' || location.pathname === '/mentoring' || location.pathname === '/projects' || location.pathname === '/profile') {
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

  // Styles optimisés pour mobile
  const navLinkStyle = (isActive) => ({
    color: isActive ? "#3498db" : "#2c3e50",
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
    color: isActive ? "#3498db" : "#2c3e50",
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
      backgroundColor: variant === 'primary' ? "#3498db" : 
                     variant === 'success' ? "#2ecc71" : 
                     variant === 'warning' ? "#f39c12" : "#3498db",
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

  // Style pour les boutons du menu profil
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
      <header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255,255,255,0.98)",
          padding: "0.85rem clamp(0.75rem, 3vw, 2rem)",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          maxWidth: "100vw",
          boxSizing: "border-box",
          overflow: "visible",
          height: "65px",
          WebkitTapHighlightColor: "transparent"
        }}
      >
        {/* Logo */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          flexShrink: 0,
          minWidth: "100px"
        }}>
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
                width: "auto"
              }}
              loading="eager"
            />
          </Link>
        </div>
        
        {/* Navigation Desktop */}
        {!isMobile && (
          <>
            {/* Liens de navigation centrés */}
            <nav style={{ 
              display: "flex", 
              gap: "clamp(0.8rem, 1.5vw, 1.8rem)", 
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              maxWidth: "550px",
              margin: "0 1rem"
            }}>
              <button 
                onClick={handleHomeClick}
                style={navLinkStyle(location.pathname === '/' && !location.hash)}
                className="nav-link-button"
              >
                Accueil
              </button>
              
              <button 
                onClick={(e) => handleSectionClick('about', e)}
                style={navLinkStyle(false)}
                className="nav-link-button"
              >
                À propos
              </button>
              
              <button 
                onClick={(e) => handleSectionClick('portfolio', e)}
                style={navLinkStyle(false)}
                className="nav-link-button"
              >
                Portfolio
              </button>
              
              <Link 
                to="/ressources" 
                style={navLinkStyle(location.pathname === '/ressources')}
                onClick={() => setShowProfileMenu(false)}
              >
                Ressources
              </Link>
            </nav>

            {/* Actions utilisateur */}
            <div style={{ 
              display: "flex", 
              alignItems: "center",
              gap: "0.7rem",
              flexShrink: 0,
              minWidth: "50px",
              justifyContent: "flex-end",
              position: "relative"
            }}>
              {currentUser ? (
                <>
                  {/* Menu Profil */}
                  <div style={{ 
                    position: "relative",
                    zIndex: 9999
                  }}>
                    <button
                      ref={profileButtonRef}
                      onClick={toggleProfileMenu}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#3498db",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        boxShadow: showProfileMenu ? "0 0 0 3px rgba(52, 152, 219, 0.3)" : "none",
                        color: "white",
                        padding: 0,
                        marginLeft: "0.3rem",
                        fontWeight: "bold",
                        WebkitTapHighlightColor: "transparent"
                      }}
                      title={currentUser.name}
                      aria-label="Menu profil"
                      aria-expanded={showProfileMenu}
                    >
                      {currentUser.name.charAt(0).toUpperCase()}
                    </button>
                    
                    {/* Menu déroulant profil */}
                    {showProfileMenu && (
                      <div
                        ref={profileMenuRef}
                        style={{
                          position: "fixed",
                          top: "65px",
                          right: "clamp(0.75rem, 3vw, 1rem)",
                          backgroundColor: "white",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                          zIndex: 99999,
                          minWidth: "220px",
                          maxWidth: "min(90vw, 280px)",
                          overflow: "hidden",
                          animation: "slideDown 0.2s ease"
                        }}
                      >
                        <div style={{
                          padding: "0.9rem",
                          borderBottom: "1px solid #eee",
                          backgroundColor: "#f8f9fa"
                        }}>
                          <div style={{
                            fontWeight: "bold",
                            color: "#2c3e50",
                            fontSize: "0.9rem",
                            marginBottom: "0.2rem",
                            wordBreak: "break-word"
                          }}>
                            {currentUser.name}
                          </div>
                          <div style={{
                            fontSize: "0.8rem",
                            color: "#7f8c8d",
                            wordBreak: "break-word"
                          }}>
                            {currentUser.email}
                          </div>
                          <div style={{
                            fontSize: "0.7rem",
                            color: currentUser.userType === 'admin' ? "#e74c3c" : "#3498db",
                            marginTop: "0.3rem",
                            fontWeight: "500"
                          }}>
                            {currentUser.userType === 'admin' ? 'Administrateur' : 'Client'}
                          </div>
                        </div>
                        
                        <div style={{ padding: "0.2rem 0" }}>
                          {/* Options pour les clients */}
                          {currentUser.userType === 'client' && (
                            <>
                              <button
                                onClick={() => {
                                  navigate('/dashboard');
                                  setShowProfileMenu(false);
                                }}
                                style={profileMenuItemStyle}
                                className="profile-menu-item"
                              >
                                <span style={{ minWidth: "22px", fontSize: "0.95rem" }}>📊</span>
                                <span>Mon Tableau de Bord</span>
                              </button>
                              <button
                                onClick={() => {
                                  navigate('/mentoring');
                                  setShowProfileMenu(false);
                                }}
                                style={profileMenuItemStyle}
                                className="profile-menu-item"
                              >
                                <span style={{ minWidth: "22px", fontSize: "0.95rem" }}>👨‍🏫</span>
                                <span>Mentorat</span>
                              </button>
                            </>
                          )}
                          
                          {/* Options pour les administrateurs */}
                          {currentUser.userType === 'admin' && (
                            <>
                              <button
                                onClick={() => {
                                  navigate('/admin');
                                  setShowProfileMenu(false);
                                }}
                                style={profileMenuItemStyle}
                                className="profile-menu-item"
                              >
                                <span style={{ minWidth: "22px", fontSize: "0.95rem" }}>⚙️</span>
                                <span>Administration</span>
                              </button>
                              <button
                                onClick={() => {
                                  navigate('/projects');
                                  setShowProfileMenu(false);
                                }}
                                style={profileMenuItemStyle}
                                className="profile-menu-item"
                              >
                                <span style={{ minWidth: "22px", fontSize: "0.95rem" }}>📁</span>
                                <span>Projets</span>
                              </button>
                            </>
                          )}
                          
                          {/* Séparateur visuel */}
                          <div style={{
                            height: "1px",
                            backgroundColor: "#eee",
                            margin: "0.2rem 0"
                          }}></div>
                          
                          {/* Option commune : Profile */}
                          <button
                            onClick={() => {
                              navigate('/profile');
                              setShowProfileMenu(false);
                            }}
                            style={profileMenuItemStyle}
                            className="profile-menu-item"
                          >
                            <span style={{ minWidth: "22px", fontSize: "0.95rem" }}>👤</span>
                            <span>Profile</span>
                          </button>
                        </div>
                        
                        <div style={{ 
                          borderTop: "1px solid #eee",
                          padding: "0.2rem 0" 
                        }}>
                          <button
                            onClick={handleLogout}
                            style={{
                              ...profileMenuItemStyle,
                              backgroundColor: "#fff5f5",
                              color: "#e74c3c",
                              fontWeight: "600",
                              justifyContent: "center",
                              gap: "0.5rem"
                            }}
                            className="profile-menu-item"
                          >
                            <span style={{ fontSize: "0.95rem" }}>🚪</span>
                            <span>Déconnexion</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsLoginMode(true);
                    }}
                    style={buttonStyle('primary', 'medium')}
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
                    aria-label="S'inscrire"
                  >
                    Inscription
                  </button>
                </>
              )}
            </div>
          </>
        )}

        {/* Bouton hamburger pour mobile */}
        {isMobile && (
          <button
            className="hamburger-button"
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 1101,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "5px",
              transition: "all 0.3s ease",
              WebkitTapHighlightColor: "transparent"
            }}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: isMenuOpen ? "#3498db" : "#2c3e50",
              margin: "3.5px 0",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
            }}></span>
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: isMenuOpen ? "transparent" : "#2c3e50",
              margin: "3.5px 0",
              transition: "all 0.3s ease",
              opacity: isMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: isMenuOpen ? "#3498db" : "#2c3e50",
              margin: "3.5px 0",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(-45deg) translate(6px, -5px)" : "none"
            }}></span>
          </button>
        )}

        {/* Overlay sombre pour mobile */}
        {isMobile && isMenuOpen && (
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1099,
              touchAction: "none"
            }}
          />
        )}

        {/* Menu mobile */}
        {isMobile && (
          <div 
            className="mobile-menu"
            style={{
              position: "fixed",
              top: "65px",
              right: isMenuOpen ? "0" : "-100%",
              width: "min(100%, 300px)",
              height: "calc(100vh - 65px)",
              backgroundColor: "white",
              boxShadow: "-5px 0 20px rgba(0, 0, 0, 0.15)",
              transition: "right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 1100,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain"
            }}
          >
            {/* Informations utilisateur */}
            {currentUser && (
              <div style={{ 
                padding: "1rem 0.9rem", 
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #eee"
              }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.7rem",
                  marginBottom: "0.5rem"
                }}>
                  <div style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#3498db",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: "bold",
                    flexShrink: 0
                  }}>
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ 
                      fontWeight: "bold", 
                      color: "#2c3e50",
                      fontSize: "0.9rem",
                      wordBreak: "break-word",
                      lineHeight: "1.2"
                    }}>
                      {currentUser.name}
                    </div>
                    <div style={{ 
                      fontSize: "0.75rem", 
                      color: "#7f8c8d",
                      marginTop: "0.2rem",
                      wordBreak: "break-word",
                      lineHeight: "1.2"
                    }}>
                      {currentUser.email}
                    </div>
                    <div style={{ 
                      fontSize: "0.7rem", 
                      color: currentUser.userType === 'admin' ? "#e74c3c" : "#3498db",
                      marginTop: "0.2rem",
                      fontWeight: "500"
                    }}>
                      {currentUser.userType === 'admin' ? 'Administrateur' : 'Client'}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Liens principaux */}
            <button 
              onClick={handleHomeClick}
              style={mobileNavLinkStyle(location.pathname === '/' && !location.hash)}
              className="mobile-menu-item"
            >
              <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>🏠</span>
              Accueil
            </button>
            
            <button 
              onClick={(e) => handleSectionClick('about', e)}
              style={mobileNavLinkStyle(false)}
              className="mobile-menu-item"
            >
              <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>ℹ️</span>
              À propos
            </button>
            
            <button 
              onClick={(e) => handleSectionClick('portfolio', e)}
              style={mobileNavLinkStyle(false)}
              className="mobile-menu-item"
            >
              <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>🎨</span>
              Portfolio
            </button>
            
            <Link 
              to="/ressources" 
              onClick={() => setIsMenuOpen(false)}
              style={mobileNavLinkStyle(location.pathname === '/ressources')}
              className="mobile-menu-item"
            >
              <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>📚</span>
              Ressources
            </Link>

            {/* Actions utilisateur selon le type */}
            {currentUser ? (
              <>
                {currentUser.userType === 'admin' ? (
                  <>
                    <Link 
                      to="/admin" 
                      onClick={() => setIsMenuOpen(false)}
                      style={mobileNavLinkStyle(location.pathname === '/admin')}
                      className="mobile-menu-item"
                    >
                      <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>⚙️</span>
                      Administration
                    </Link>
                    <Link 
                      to="/projects" 
                      onClick={() => setIsMenuOpen(false)}
                      style={mobileNavLinkStyle(location.pathname === '/projects')}
                      className="mobile-menu-item"
                    >
                      <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>📁</span>
                      Projets Clients
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
                      <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>📊</span>
                      Mon Tableau de Bord
                    </Link>
                    <Link 
                      to="/mentoring" 
                      onClick={() => setIsMenuOpen(false)}
                      style={mobileNavLinkStyle(location.pathname === '/mentoring')}
                      className="mobile-menu-item"
                    >
                      <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>👨‍🏫</span>
                      Mentorat
                    </Link>
                  </>
                )}
                
                {/* Option profil */}
                <Link 
                  to="/profile" 
                  onClick={() => setIsMenuOpen(false)}
                  style={mobileNavLinkStyle(location.pathname === '/profile')}
                  className="mobile-menu-item"
                >
                  <span style={{ marginRight: "0.7rem", fontSize: "1.1rem" }}>👤</span>
                  Profil
                </Link>
                
                <div style={{ 
                  padding: "1rem 0.9rem", 
                  marginTop: "auto", 
                  borderTop: "1px solid #eee",
                  backgroundColor: "#f8f9fa"
                }}>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem"
                    }}
                    aria-label="Déconnexion"
                  >
                    <span style={{ fontSize: "1rem" }}>🚪</span>
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <div style={{ 
                padding: "1rem 0.9rem", 
                marginTop: "auto", 
                borderTop: "1px solid #eee",
                backgroundColor: "#f8f9fa"
              }}>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowAuthModal(true);
                    setIsLoginMode(true);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    marginBottom: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem"
                  }}
                  aria-label="Se connecter"
                >
                  <span style={{ fontSize: "1rem" }}>🔑</span>
                  Connexion
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowAuthModal(true);
                    setIsLoginMode(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "#2ecc71",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem"
                  }}
                  aria-label="S'inscrire"
                >
                  <span style={{ fontSize: "1rem" }}>📝</span>
                  Inscription
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Modal d'authentification */}
      {showAuthModal && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            padding: "clamp(0.5rem, 2vw, 1rem)",
            overscrollBehavior: "contain"
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAuthModal(false);
            }
          }}
        >
          <div style={{
            backgroundColor: "white",
            padding: "clamp(1.2rem, 4vw, 1.8rem)",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "min(95vw, 400px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
            maxHeight: "90vh",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch"
          }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.2rem"
            }}>
              <h3 style={{ 
                margin: 0, 
                color: "#2c3e50",
                fontSize: "clamp(1.1rem, 4vw, 1.3rem)"
              }}>
                {isLoginMode ? "Connexion" : "Inscription"}
              </h3>
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  setAuthData({ email: "", password: "", name: "", userType: "client" });
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  color: "#7f8c8d",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.2s ease",
                  flexShrink: 0
                }}
                aria-label="Fermer"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.color = "#e74c3c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#7f8c8d";
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ 
              display: "flex", 
              marginBottom: "1.2rem",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #ddd"
            }}>
              <button
                onClick={() => setIsLoginMode(true)}
                style={{
                  flex: 1,
                  padding: "clamp(0.65rem, 2vw, 0.75rem)",
                  background: isLoginMode ? "#3498db" : "transparent",
                  color: isLoginMode ? "white" : "#2c3e50",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap"
                }}
              >
                Connexion
              </button>
              <button
                onClick={() => setIsLoginMode(false)}
                style={{
                  flex: 1,
                  padding: "clamp(0.65rem, 2vw, 0.75rem)",
                  background: !isLoginMode ? "#3498db" : "transparent",
                  color: !isLoginMode ? "white" : "#2c3e50",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap"
                }}
              >
                Inscription
              </button>
            </div>
            
            <form onSubmit={handleAuth}>
              {!isLoginMode && (
                <div style={{ marginBottom: "0.9rem" }}>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.4rem", 
                    color: "#5d6d7e", 
                    fontSize: "clamp(0.8rem, 2vw, 0.85rem)" 
                  }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={authData.name}
                    onChange={(e) => setAuthData({...authData, name: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "clamp(0.65rem, 2vw, 0.75rem)",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                      boxSizing: "border-box"
                    }}
                    placeholder="Votre nom"
                    required={!isLoginMode}
                  />
                </div>
              )}
              
              <div style={{ marginBottom: "0.9rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.4rem", 
                  color: "#5d6d7e", 
                  fontSize: "clamp(0.8rem, 2vw, 0.85rem)" 
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={authData.email}
                  onChange={(e) => setAuthData({...authData, email: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "clamp(0.65rem, 2vw, 0.75rem)",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                    boxSizing: "border-box"
                  }}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.4rem", 
                  color: "#5d6d7e", 
                  fontSize: "clamp(0.8rem, 2vw, 0.85rem)" 
                }}>
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={authData.password}
                  onChange={(e) => setAuthData({...authData, password: e.target.value})}
                  style={{
                    width: "100%",
                    padding: "clamp(0.65rem, 2vw, 0.75rem)",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                    boxSizing: "border-box"
                  }}
                  placeholder={isLoginMode ? "Votre mot de passe" : "Créez un mot de passe"}
                  required
                />
              </div>
              
              {!isLoginMode && (
                <div style={{ marginBottom: "1.2rem" }}>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.4rem", 
                    color: "#5d6d7e", 
                    fontSize: "clamp(0.8rem, 2vw, 0.85rem)" 
                  }}>
                    Type de compte
                  </label>
                  <select
                    value={authData.userType}
                    onChange={(e) => setAuthData({...authData, userType: e.target.value})}
                    style={{
                      width: "100%",
                      padding: "clamp(0.65rem, 2vw, 0.75rem)",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                      boxSizing: "border-box",
                      backgroundColor: "white",
                      appearance: "auto"
                    }}
                  >
                    <option value="client">Client (suivi de projet)</option>
                    <option value="admin">Administrateur (réservé)</option>
                  </select>
                  {authData.userType === 'admin' && (
                    <p style={{ 
                      fontSize: "0.75rem", 
                      color: "#e74c3c", 
                      marginTop: "0.4rem",
                      lineHeight: "1.3"
                    }}>
                      Note: Ce type de compte est réservé à l'administrateur.
                    </p>
                  )}
                </div>
              )}
              
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "clamp(0.75rem, 2vw, 0.85rem)",
                    backgroundColor: "#3498db",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  aria-label={isLoginMode ? "Se connecter" : "S'inscrire"}
                >
                  {isLoginMode ? "Se connecter" : "S'inscrire"}
                </button>
              </div>
            </form>
            
            <p style={{ 
              marginTop: "1.2rem", 
              fontSize: "clamp(0.75rem, 2vw, 0.8rem)", 
              color: "#7f8c8d",
              textAlign: "center",
              lineHeight: "1.4"
            }}>
              {isLoginMode ? (
                "Pas encore de compte ? "
              ) : (
                "Déjà un compte ? "
              )}
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#3498db",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "clamp(0.75rem, 2vw, 0.8rem)",
                  fontWeight: "500",
                  padding: "0.2rem 0.3rem"
                }}
              >
                {isLoginMode ? "Inscrivez-vous" : "Connectez-vous"}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Styles CSS globaux améliorés */}
      <style>{`
        /* Animation pour le menu déroulant */
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Styles pour les liens de navigation desktop */
        .nav-link-button {
          background: none;
          border: none;
          font-family: inherit;
          cursor: pointer;
        }
        
        nav button {
          position: relative;
        }
        
        nav button::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #3498db;
          transition: width 0.3s ease;
        }
        
        nav button:hover::after,
        nav button[style*="color: #3498db"]::after {
          width: 100%;
        }
        
        nav button:hover {
          color: #3498db;
        }
        
        /* Styles pour les éléments du menu mobile */
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
        .mobile-menu-item:nth-child(9) { animation-delay: 0.45s; }
        
        /* Effets de survol pour les éléments du menu mobile */
        .mobile-menu a:hover,
        .mobile-menu button:hover,
        .mobile-menu a:active,
        .mobile-menu button:active {
          background-color: #f8f9fa !important;
          padding-left: 1.2rem !important;
        }
        
        /* Effets de survol pour les éléments du menu profil */
        .profile-menu-item:hover {
          background-color: #f8f9fa !important;
        }
        
        /* Améliorations pour le modal sur mobile */
        @media (max-width: 480px) {
          .mobile-menu {
            width: 100% !important;
            right: isMenuOpen ? "0" : "-100%" !important;
          }
          
          /* Ajustements pour les très petits écrans */
          header {
            height: 60px !important;
            padding: 0.7rem 0.8rem !important;
          }
          
          .mobile-menu {
            top: 60px !important;
            height: calc(100vh - 60px) !important;
          }
          
          .hamburger-button {
            width: 38px !important;
            height: 38px !important;
          }
          
          .mobile-menu a,
          .mobile-menu button {
            padding: 0.75rem 0.9rem !important;
            font-size: 0.9rem !important;
          }
          
          .mobile-menu a:hover,
          .mobile-menu button:hover {
            padding-left: 1.1rem !important;
          }
        }
        
        /* Tablettes (768px - 992px) */
        @media (min-width: 768px) and (max-width: 992px) {
          nav {
            gap: 1rem !important;
            margin: 0 0.5rem !important;
          }
          
          button {
            padding: 0.5rem 0.8rem !important;
            font-size: 0.85rem !important;
          }
          
          .profile-menu {
            min-width: 200px !important;
          }
        }
        
        /* Petits mobiles (moins de 360px) */
        @media (max-width: 360px) {
          header {
            padding: 0.6rem 0.6rem !important;
            height: 55px !important;
          }
          
          .mobile-menu {
            top: 55px !important;
            height: calc(100vh - 55px) !important;
          }
          
          .hamburger-button {
            width: 36px !important;
            height: 36px !important;
          }
          
          .mobile-menu a,
          .mobile-menu button {
            padding: 0.7rem 0.8rem !important;
            font-size: 0.85rem !important;
          }
          
          .logo img {
            height: 28px !important;
          }
        }
        
        /* Améliorations pour l'accessibilité et le tactile */
        button, 
        a, 
        input, 
        select {
          -webkit-tap-highlight-color: transparent;
        }
        
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible {
          outline: 2px solid #3498db;
          outline-offset: 2px;
        }
        
        /* Amélioration du défilement sur iOS */
        .mobile-menu {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Empêcher le zoom sur les inputs sur iOS */
        @media screen and (max-width: 992px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }
        
        /* Correction pour le menu profil sur mobile */
        @media (max-width: 992px) {
          .profile-menu {
            position: absolute !important;
            top: 100% !important;
            right: 0 !important;
            left: auto !important;
            margin-top: 0.5rem;
          }
        }
        
        /* Mode paysage sur mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 70vh !important;
            overflow-y: auto !important;
          }
          
          .auth-modal > div {
            max-height: 80vh !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;