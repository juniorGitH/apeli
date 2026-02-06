/**
 * Ressources component - Page des ressources avec chargement depuis localStorage
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Ressources = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Charger les ressources depuis le localStorage
    const savedResources = localStorage.getItem('adminResources');
    if (savedResources) {
      const parsedResources = JSON.parse(savedResources);
      setResources(parsedResources);
      setFilteredResources(parsedResources);
    } else {
      // Ressources par défaut si aucune n'existe
      const defaultResources = [
        {
          id: 1,
          title: "Guide complet React Hooks",
          description: "Tout ce que vous devez savoir sur les hooks React, avec des exemples pratiques",
          type: "tutorial",
          category: "React",
          date: new Date().toISOString(),
          author: "Emmanuel AMELA"
        },
        {
          id: 2,
          title: "Package NPM: utils-js",
          description: "Collection d'utilitaires JavaScript réutilisables",
          type: "package",
          category: "JavaScript",
          date: new Date().toISOString(),
          author: "Emmanuel AMELA"
        },
        {
          id: 3,
          title: "Snippet: Hook useFetch personnalisé",
          description: "Hook React pour gérer les appels API avec gestion d'état",
          type: "snippet",
          category: "React",
          date: new Date().toISOString(),
          author: "Emmanuel AMELA"
        },
        {
          id: 4,
          title: "Optimisation des performances en React",
          description: "Techniques avancées pour améliorer les performances de vos applications React",
          type: "article",
          category: "React",
          date: new Date().toISOString(),
          author: "Emmanuel AMELA"
        }
      ];
      
      setResources(defaultResources);
      setFilteredResources(defaultResources);
      localStorage.setItem('adminResources', JSON.stringify(defaultResources));
    }
  }, []);

  useEffect(() => {
    // Filtrer les ressources
    let filtered = resources;
    
    if (filterType !== "all") {
      filtered = filtered.filter(resource => resource.type === filterType);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term) ||
        resource.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredResources(filtered);
  }, [resources, filterType, searchTerm]);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'tutorial': return '📚';
      case 'package': return '📦';
      case 'snippet': return '💻';
      case 'article': return '📄';
      case 'video': return '🎥';
      default: return '📁';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'tutorial': return '#3498db';
      case 'package': return '#9b59b6';
      case 'snippet': return '#2ecc71';
      case 'article': return '#f39c12';
      case 'video': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <section id="ressources" style={{
      minHeight: "100vh",
      paddingTop: "6rem",
      backgroundColor: "#f8f9fa"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        {/* En-tête */}
        <div style={{
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#2c3e50",
            marginBottom: "1rem"
          }}>
            Ressources & Tutoriels
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#5d6d7e",
            maxWidth: "600px",
            margin: "0 auto 2rem auto"
          }}>
            Découvrez mes packages npm, tutoriels, snippets de code et ressources de développement
          </p>
          
          <Link 
            to="/" 
            style={{
              display: "inline-block",
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "500",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.3s ease",
              marginBottom: "2rem"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "#3498db"}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "transparent"}
          >
            ← Retour à l'accueil
          </Link>
        </div>

        {/* Filtres et recherche */}
        <div style={{ 
          backgroundColor: "white", 
          padding: "1.5rem", 
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#5d6d7e", fontSize: "0.9rem" }}>Filtrer par type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "1rem"
                  }}
                >
                  <option value="all">Tous les types</option>
                  <option value="tutorial">Tutoriels</option>
                  <option value="package">Packages NPM</option>
                  <option value="snippet">Snippets de code</option>
                  <option value="article">Articles</option>
                  <option value="video">Vidéos</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#5d6d7e", fontSize: "0.9rem" }}>Rechercher</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher une ressource..."
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    minWidth: "250px"
                  }}
                />
              </div>
            </div>
            
            <div>
              <span style={{ 
                backgroundColor: "#f8f9fa",
                color: "#5d6d7e",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem"
              }}>
                {filteredResources.length} ressource(s)
              </span>
            </div>
          </div>
        </div>

        {/* Liste des ressources */}
        {filteredResources.length === 0 ? (
          <div style={{ 
            backgroundColor: "white", 
            padding: "3rem", 
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#5d6d7e", marginBottom: "1rem" }}>Aucune ressource trouvée</h3>
            <p style={{ color: "#7f8c8d" }}>Aucune ressource ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
            {filteredResources.map(resource => (
              <div 
                key={resource.id}
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderTop: `4px solid ${getTypeColor(resource.type)}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "1.2rem" }}>{getTypeIcon(resource.type)}</span>
                      <h3 style={{ 
                        margin: 0, 
                        color: "#2c3e50", 
                        fontSize: "1.2rem",
                        lineHeight: "1.3"
                      }}>
                        {resource.title}
                      </h3>
                    </div>
                    <span style={{ 
                      backgroundColor: getTypeColor(resource.type),
                      color: "white",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      textTransform: "capitalize"
                    }}>
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <p style={{ 
                  color: "#5d6d7e", 
                  marginBottom: "1rem",
                  fontSize: "0.95rem",
                  lineHeight: "1.5"
                }}>
                  {resource.description}
                </p>
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #eee"
                }}>
                  <div>
                    {resource.category && (
                      <span style={{ 
                        backgroundColor: "#e8f4fc",
                        color: "#3498db",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        marginRight: "0.5rem"
                      }}>
                        {resource.category}
                      </span>
                    )}
                    <span style={{ fontSize: "0.8rem", color: "#7f8c8d" }}>
                      {new Date(resource.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div style={{ fontSize: "0.8rem", color: "#7f8c8d" }}>
                    {resource.author || "Emmanuel AMELA"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Appel à l'action */}
        <div style={{ 
          backgroundColor: "#e8f4fc", 
          padding: "2rem", 
          borderRadius: "10px",
          marginTop: "3rem",
          textAlign: "center",
          borderLeft: "4px solid #3498db"
        }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "1rem" }}>Vous souhaitez plus de ressources ?</h3>
          <p style={{ color: "#5d6d7e", marginBottom: "1.5rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Rejoignez la communauté pour accéder à toutes les ressources premium, poser vos questions et échanger avec d'autres développeurs.
          </p>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                const user = localStorage.getItem('currentUser');
                if (user) {
                  alert("Vous êtes déjà connecté ! Accédez à votre tableau de bord pour plus de fonctionnalités.");
                } else {
                  alert("Connectez-vous ou inscrivez-vous pour accéder à toutes les fonctionnalités.");
                }
              }}
              style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500"
              }}
            >
              Rejoindre la communauté
            </button>
            
            <a
              href="mailto:contact@emmanuelamela.com"
              style={{
                backgroundColor: "transparent",
                color: "#3498db",
                border: "1px solid #3498db",
                padding: "0.8rem 1.5rem",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              Proposer une ressource
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ressources;