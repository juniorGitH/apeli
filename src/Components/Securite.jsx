import React from "react";

const Securite = () => {
  return (
    <div style={{ 
      padding: "clamp(0.5rem, 2vw, 3rem)",
      paddingTop: "calc(70px + clamp(1.5rem, 4vw, 3rem))",
      maxWidth: "1200px",
      margin: "0 auto",
      lineHeight: "1.6",
      color: "#333",
      boxSizing: "border-box",
      width: "100%",
      overflow: "hidden",
      minHeight: "100vh",
      overflowWrap: "break-word",
      wordBreak: "break-word"
    }}>
      <h1 style={{ 
        color: "#2c3e50", 
        borderBottom: "3px solid #e74c3c",
        paddingBottom: "1rem",
        marginBottom: "2rem",
        fontSize: "clamp(1.3rem, 3.5vw, 2.5rem)",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        Politique de Sécurité
      </h1>

      <div style={{
        backgroundColor: "#ffeaea",
        padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
        borderRadius: "10px",
        marginBottom: "2rem",
        borderLeft: "4px solid #e74c3c",
        width: "100%",
        boxSizing: "border-box",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        <p style={{ fontStyle: "italic", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
          <strong>Note importante :</strong> Cette politique de sécurité présente les mesures 
          techniques et organisationnelles mises en œuvre pour protéger votre sécurité et vos données. 
          Elle est régulièrement mise à jour pour faire face aux nouvelles menaces.
        </p>
      </div>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          1. Engagement en matière de sécurité
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          <strong>Emmanuel AMELA</strong>, développeur indépendant, s'engage à protéger 
          l'intégrité, la confidentialité et la disponibilité des données qui lui sont confiées. 
          Cette politique s'applique à tous les systèmes, applications et infrastructures utilisés 
          pour fournir des services à mes clients.
        </p>
        
        <div style={{
          backgroundColor: "#f5f5f5",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p style={{ margin: "0.5rem 0", fontWeight: "bold", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Principes fondamentaux :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", margin: "1rem 0" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Confidentialité :</strong> Protection contre l'accès non autorisé aux données
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Intégrité :</strong> Garantie de l'exactitude et de la complétude des données
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Disponibilité :</strong> Accès aux données et systèmes quand nécessaire
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Traçabilité :</strong> Enregistrement des activités pour analyse et audit
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          2. Mesures techniques de sécurité
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          margin: "1.5rem 0"
        }}>
          <div style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.5rem)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h3 style={{ 
              color: "#e74c3c", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              Chiffrement des données
            </h3>
            <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)" }}>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                HTTPS/TLS 1.3 pour toutes les communications
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Chiffrement AES-256 pour les données sensibles
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Certificats SSL émis par des autorités reconnues
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Hachage des mots de passe avec bcrypt
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.5rem)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h3 style={{ 
              color: "#e74c3c", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              Protection des infrastructures
            </h3>
            <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)" }}>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Pare-feu (Firewall) configuré selon le principe du moindre privilège
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Systèmes de détection et prévention d'intrusion (IDS/IPS)
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Protection contre les attaques DDoS
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Surveillance continue des serveurs
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.5rem)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h3 style={{ 
              color: "#e74c3c", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              Sécurité des applications
            </h3>
            <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)" }}>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Validation et sanitisation des entrées utilisateur
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Protection contre les injections SQL (ORM sécurisé)
              </li>
              <li style={{ marginBottom: "0.3rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Protection CSRF (Cross-Site Request Forgery)
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Politique de sécurité des contenus (CSP)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          3. Gestion des accès et authentification
        </h2>
        
        <div style={{
          backgroundColor: "#fff5f5",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 style={{ 
            color: "#c0392b", 
            marginBottom: "1rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Contrôle d'accès
          </h3>
          
          <div style={{ overflowX: "auto", width: "100%", maxWidth: "100%" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              margin: "1rem 0",
              fontSize: "clamp(0.8rem, 1.7vw, 0.9rem)",
              display: "block",
              overflowX: "auto"
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Mesure
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Description
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Mise en œuvre
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Authentification forte
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Mots de passe complexes + 2FA optionnel
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>✓ Implémenté</span>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Gestion des sessions
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Sessions limitées dans le temps, régénération des tokens
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>✓ Implémenté</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Principe du moindre privilège
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Accès limité au strict nécessaire
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>✓ Implémenté</span>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Journalisation des accès
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Audit des connexions et actions sensibles
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>✓ Implémenté</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          4. Protection des données
        </h2>
        
        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            4.1. Sauvegarde et récupération
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            margin: "1rem 0"
          }}>
            <div style={{
              backgroundColor: "#e8f4f8",
              padding: "clamp(0.8rem, 2vw, 1.2rem)",
              borderRadius: "6px",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "0.5rem",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                overflowWrap: "break-word",
                wordBreak: "break-word"
              }}>
                Sauvegarde quotidienne
              </h4>
              <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                Incrémentale tous les jours, complète chaque semaine
              </p>
            </div>
            <div style={{
              backgroundColor: "#e8f4f8",
              padding: "clamp(0.8rem, 2vw, 1.2rem)",
              borderRadius: "6px",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "0.5rem",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                overflowWrap: "break-word",
                wordBreak: "break-word"
              }}>
                Stockage externe
              </h4>
              <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                Sauvegardes chiffrées sur serveur distant sécurisé
              </p>
            </div>
            <div style={{
              backgroundColor: "#e8f4f8",
              padding: "clamp(0.8rem, 2vw, 1.2rem)",
              borderRadius: "6px",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h4 style={{ 
                color: "#2c3e50", 
                marginBottom: "0.5rem",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                overflowWrap: "break-word",
                wordBreak: "break-word"
              }}>
                Tests de restauration
              </h4>
              <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                Vérification trimestrielle de l'intégrité des sauvegardes
              </p>
            </div>
          </div>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            4.2. Traitement sécurisé
          </h3>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Chiffrement des données sensibles :</strong> Au repos et en transit
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Pseudonymisation :</strong> Séparation des données identifiantes
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Minimisation des données :</strong> Collecte limitée aux strict nécessaire
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Suppression sécurisée :</strong> Effacement définitif des données en fin de vie
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          5. Surveillance et réponse aux incidents
        </h2>
        
        <div style={{
          backgroundColor: "#fff3cd",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          borderLeft: "3px solid #f39c12",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 style={{ 
            color: "#d35400", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Surveillance proactive
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            margin: "1rem 0"
          }}>
            <div style={{
              backgroundColor: "white",
              padding: "clamp(0.8rem, 2vw, 1rem)",
              borderRadius: "6px",
              textAlign: "center",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                24/7
              </div>
              <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Surveillance des logs
              </div>
            </div>
            
            <div style={{
              backgroundColor: "white",
              padding: "clamp(0.8rem, 2vw, 1rem)",
              borderRadius: "6px",
              textAlign: "center",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                Alertes temps réel
              </div>
              <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Détection d'anomalies
              </div>
            </div>
            
            <div style={{
              backgroundColor: "white",
              padding: "clamp(0.8rem, 2vw, 1rem)",
              borderRadius: "6px",
              textAlign: "center",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                Analyse mensuelle
              </div>
              <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
                Audit de sécurité
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Procédure de réponse aux incidents
          </h3>
          <ol style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Détection :</strong> Identification de l'incident
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Containement :</strong> Limitation de l'impact
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Éradication :</strong> Suppression de la cause
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Récupération :</strong> Retour à la normale
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Post-mortem :</strong> Analyse et améliorations
            </li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          6. Signalement de vulnérabilités
        </h2>
        
        <div style={{
          backgroundColor: "#e8f4f8",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "1rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Programme de divulgation responsable
          </h3>
          
          <p style={{ marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Nous encourageons les chercheurs en sécurité à nous signaler toute vulnérabilité 
            découverte de manière responsable. Nous nous engageons à :
          </p>
          
          <div style={{
            backgroundColor: "white",
            padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            border: "1px solid #3498db",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <p style={{ margin: "0.5rem 0", fontWeight: "bold", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Pour signaler une vulnérabilité :
            </p>
            <p style={{ margin: "0.5rem 0 1rem 0", wordBreak: "break-all" }}>
              <a href="mailto:Emmanuel.Amela@outlook.com" style={{ 
                color: "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
                wordBreak: "break-all"
              }}>
                Emmanuel.Amela@outlook.com
              </a>
            </p>
            
            <p style={{ margin: "0.5rem 0", fontWeight: "bold", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Informations à fournir :
            </p>
            <ul style={{ 
              paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
              fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)",
              margin: "0.5rem 0 1rem 0"
            }}>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Description détaillée de la vulnérabilité
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                URL ou composant affecté
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Étapes pour reproduire le problème
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Impact potentiel
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Capture d'écran ou preuve de concept (le cas échéant)
              </li>
            </ul>
          </div>
          
          <div style={{
            backgroundColor: "#d4edda",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #28a745",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <p style={{ margin: 0, fontWeight: "bold", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Engagements réciproques :
            </p>
            <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", margin: "0.5rem 0 0 0", fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)" }}>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Nous ne poursuivrons pas les chercheurs agissant de bonne foi
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Réponse sous 72 heures pour accuser réception
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Correction dans un délai raisonnable selon la criticité
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Reconnaissance publique (si souhaité par le chercheur)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          7. Conformité et certifications
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          margin: "1.5rem 0"
        }}>
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ 
              color: "#2c3e50", 
              marginBottom: "0.5rem",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              RGPD
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Conformité avec le Règlement Général sur la Protection des Données
            </p>
          </div>
          
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ 
              color: "#2c3e50", 
              marginBottom: "0.5rem",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              OWASP Top 10
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Protection contre les principales vulnérabilités web
            </p>
          </div>
          
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ 
              color: "#2c3e50", 
              marginBottom: "0.5rem",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              ISO 27001
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Bonnes pratiques de gestion de la sécurité de l'information
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ 
          color: "#2c3e50", 
          borderBottom: "2px solid #eee",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          8. Mise à jour de la politique
        </h2>
        
        <div style={{
          backgroundColor: "#f9f9f9",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p style={{ margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Cette politique de sécurité est mise à jour régulièrement pour s'adapter aux 
            nouvelles menaces et technologies. La dernière mise à jour a été effectuée le 
            <strong> 18 janvier 2026</strong>.
          </p>
          <p style={{ margin: "0.5rem 0 0 0", fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Nous recommandons aux utilisateurs de consulter régulièrement cette page 
            pour prendre connaissance des évolutions.
          </p>
        </div>
      </section>

      <div style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "clamp(1rem, 3vw, 1.5rem)",
        borderRadius: "8px",
        marginTop: "3rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "clamp(0.9rem, 1.8vw, 1rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
          Emmanuel AMELA - Développeur web indépendant
        </p>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
          Engagement pour la sécurité de vos données et systèmes
        </p>
      </div>

      <style>{`
        /* Reset et corrections de base */
        * {
          box-sizing: border-box;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }
        
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        /* Force le word-wrap sur tous les éléments de texte */
        p, li, span, strong, em, a, div, td, th, h1, h2, h3, h4 {
          max-width: 100%;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          hyphens: auto;
        }
        
        /* Corrections spécifiques pour les URLs */
        a {
          word-break: break-all !important;
          overflow-wrap: anywhere !important;
        }
        
        /* Tables responsives */
        table {
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
        }
        
        table tbody {
          display: table;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          * {
            max-width: 100%;
          }
          
          div {
            padding: clamp(0.8rem, 2vw, 1rem) !important;
          }
          
          h1 {
            font-size: 1.5rem !important;
          }
          
          h2 {
            font-size: 1.3rem !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
          
          table {
            font-size: 0.75rem !important;
          }
          
          th, td {
            padding: 0.4rem !important;
            min-width: 80px;
          }
          
          .grid-container {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 1.3rem !important;
            padding-bottom: 0.6rem !important;
          }
          
          h2 {
            font-size: 1.1rem !important;
          }
          
          h3, h4 {
            font-size: 1rem !important;
          }
          
          p, li {
            font-size: 0.85rem !important;
          }
          
          table {
            font-size: 0.7rem !important;
          }
          
          th, td {
            padding: 0.3rem !important;
            font-size: 0.7rem !important;
          }
          
          ul, ol {
            padding-left: 1rem !important;
          }
        }
        
        @media (max-width: 320px) {
          h1 {
            font-size: 1.1rem !important;
          }
          
          h2 {
            font-size: 1rem !important;
          }
          
          h3, h4 {
            font-size: 0.95rem !important;
          }
          
          p, li {
            font-size: 0.8rem !important;
          }
          
          table {
            font-size: 0.65rem !important;
          }
        }
        
        a {
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        /* Amélioration de l'accessibilité des tables */
        table {
          border: 1px solid #ddd;
        }
        
        th {
          background-color: #f2f2f2;
          font-weight: 600;
        }
        
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        /* Style pour les listes */
        ul li, ol li {
          margin-bottom: 0.3rem;
        }
        
        /* Focus visible pour l'accessibilité */
        a:focus, button:focus {
          outline: 2px solid #3498db;
          outline-offset: 2px;
        }
        
        /* Style pour les codes */
        code {
          background-color: #f4f4f4;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: monospace;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
};

export default Securite;