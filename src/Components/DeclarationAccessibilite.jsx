import React from "react";

const DeclarationAccessibilite = () => {
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
        borderBottom: "3px solid #27ae60",
        paddingBottom: "1rem",
        marginBottom: "2rem",
        fontSize: "clamp(1.3rem, 3.5vw, 2.5rem)",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        Déclaration d'Accessibilité
      </h1>

      <div style={{
        backgroundColor: "#e8f5e9",
        padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
        borderRadius: "10px",
        marginBottom: "2rem",
        borderLeft: "4px solid #27ae60",
        width: "100%",
        boxSizing: "border-box",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        <p style={{ fontStyle: "italic", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
          <strong>Note importante :</strong> Cette déclaration d'accessibilité s'applique au site web 
          d'Emmanuel AMELA. Nous nous engageons à rendre notre site accessible à toutes les personnes, 
          y compris celles en situation de handicap.
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
          1. Engagement d'accessibilité
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          <strong>Emmanuel AMELA</strong>, développeur indépendant, s'engage à rendre son site 
          internet accessible conformément aux standards internationaux et aux bonnes pratiques 
          en matière d'accessibilité numérique.
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
          <p style={{ margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Cet engagement se traduit par la mise en œuvre des actions suivantes :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", margin: "1rem 0" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Intégrer l'accessibilité dès la conception du site
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Maintenir et améliorer continuellement l'accessibilité
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Former l'équipe aux enjeux de l'accessibilité numérique
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              Mettre à disposition cette déclaration d'accessibilité
            </li>
          </ul>
        </div>
        
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Cet engagement s'inscrit dans une démarche plus large de conception universelle, 
          visant à créer des expériences numériques utilisables par le plus grand nombre, 
          quelles que soient les capacités physiques, sensorielles ou cognitives des utilisateurs.
        </p>
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
          2. Standards de référence
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
              color: "#27ae60", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              WCAG 2.1
            </h3>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Conformité aux Règles pour l'accessibilité des contenus Web (WCAG) niveau AA, 
              publiées par le W3C.
            </p>
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
              color: "#27ae60", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              RGAA 4.1
            </h3>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Respect du Référentiel Général d'Amélioration de l'Accessibilité, 
              standard français basé sur les WCAG.
            </p>
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
              color: "#27ae60", 
              marginBottom: "0.8rem",
              fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              Section 508
            </h3>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Compatibilité avec la Section 508 du Rehabilitation Act américain, 
              pour une accessibilité universelle.
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
          3. État de conformité
        </h2>
        
        <div style={{
          backgroundColor: "#f0f9ff",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          borderLeft: "3px solid #3498db",
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
            Niveau de conformité
          </h3>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap"
          }}>
            <div style={{
              backgroundColor: "#27ae60",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
            }}>
              Partiellement conforme
            </div>
            <span style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Le site respecte la plupart des critères WCAG 2.1 niveau AA
            </span>
          </div>
          
          <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Le présent site web est <strong>partiellement conforme</strong> avec les standards 
            d'accessibilité numériques. Des efforts continus sont réalisés pour atteindre 
            une conformité totale.
          </p>
        </div>
        
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "1rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Résultats des tests
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
                    Catégorie
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Conformité
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Observations
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
                    Perceptible
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>95%</span>
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Alternatives textuelles, contrastes des couleurs, redimensionnement
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Utilisable
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>90%</span>
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Navigation au clavier, temps suffisant, prévention des crises
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Compréhensible
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>92%</span>
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Lisibilité, fonctionnement prévisible, assistance à la saisie
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Robuste
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    <span style={{ color: "#27ae60", fontWeight: "bold" }}>98%</span>
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Compatibilité avec les technologies d'assistance
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
          4. Technologies utilisées
        </h2>
        
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          L'accessibilité de ce site repose sur les technologies suivantes :
        </p>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          margin: "1.5rem 0"
        }}>
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              HTML5
            </div>
            <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Sémantique et structure
            </div>
          </div>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              CSS3
            </div>
            <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Présentation et mise en page
            </div>
          </div>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              JavaScript
            </div>
            <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Interactivité et fonctionnalités
            </div>
          </div>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              React
            </div>
            <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Framework front-end
            </div>
          </div>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            textAlign: "center",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <div style={{ fontWeight: "bold", color: "#3498db", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              .NET Web API
            </div>
            <div style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.85rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Services back-end
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
            Fonctionnalités d'accessibilité intégrées
          </h3>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Navigation au clavier :</strong> Toutes les fonctionnalités sont accessibles au clavier
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Contraste des couleurs :</strong> Ratio de contraste minimum de 4.5:1
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Textes alternatives :</strong> Attributs ALT pour toutes les images significatives
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Structure sémantique :</strong> Utilisation appropriée des balises HTML5
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Labels et instructions :</strong> Éléments de formulaire correctement étiquetés
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Redimensionnement du texte :</strong> Texte redimensionnable jusqu'à 200% sans perte de contenu
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>API accessibles :</strong> Services back-end .NET Web API conçus pour garantir des réponses accessibles et conformes
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
          5. Contenus non accessibles
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
            Limites connues
          </h3>
          <p style={{ marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Malgré nos efforts, certains contenus pourraient ne pas être totalement accessibles :
          </p>
          
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Documents tiers :</strong> Certains documents PDF téléchargeables 
              pourraient ne pas être entièrement accessibles
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Contenus multimédias anciens :</strong> Les vidéos publiées avant 2025 
              pourraient ne pas disposer de sous-titres
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Cartes interactives :</strong> Certaines cartes pourraient présenter 
              des difficultés pour les utilisateurs de lecteurs d'écran
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Widgets tiers :</strong> Certains widgets intégrés pourraient 
              ne pas respecter entièrement les standards d'accessibilité
            </li>
          </ul>
          
          <p style={{ marginTop: "1rem", fontStyle: "italic", overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Nous travaillons activement à corriger ces limitations et à améliorer 
            continuellement l'accessibilité de notre site.
          </p>
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
          6. Amélioration et contact
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
            Signaler un problème d'accessibilité
          </h3>
          
          <p style={{ marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Si vous rencontrez des difficultés pour accéder à un contenu ou à un service, 
            ou si vous constatez un défaut d'accessibilité, nous vous invitons à nous le signaler :
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
              Par email :
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
                URL de la page concernée
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Description du problème rencontré
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Technologie d'assistance utilisée (le cas échéant)
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                Configuration (navigateur, système d'exploitation)
              </li>
            </ul>
          </div>
          
          <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Nous nous engageons à répondre dans un délai de <strong>10 jours ouvrés</strong> 
            et à vous proposer une solution accessible ou une alternative adaptée.
          </p>
        </div>
        
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Plan d'amélioration
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Notre plan d'amélioration de l'accessibilité comprend :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Audit d'accessibilité trimestriel
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Formation continue sur les dernières normes
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Intégration de tests d'accessibilité automatisés
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              Collaboration avec des utilisateurs en situation de handicap pour des tests utilisateurs
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
          7. Voies de recours
        </h2>
        
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
          <p style={{ marginBottom: "1rem", overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Si vous n'obtenez pas de réponse satisfaisante de notre part, vous avez la possibilité 
            de saisir les instances suivantes :
          </p>
          
          <div style={{
            backgroundColor: "white",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #e74c3c",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ 
              color: "#c0392b", 
              marginBottom: "0.5rem",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              En France :
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Le Défenseur des droits : 
              <a href="https://www.defenseurdesdroits.fr" 
                 style={{ color: "#3498db", marginLeft: "0.5rem", wordBreak: "break-all" }}
                 target="_blank" rel="noopener noreferrer">
                https://www.defenseurdesdroits.fr
              </a>
            </p>
          </div>
          
          <div style={{
            backgroundColor: "white",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #e74c3c",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ 
              color: "#c0392b", 
              marginBottom: "0.5rem",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              Au Togo :
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.95rem)", margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Commission Nationale des Droits de l'Homme (CNDH) : 
              <a href="http://www.cndh.tg" 
                 style={{ color: "#3498db", marginLeft: "0.5rem", wordBreak: "break-all" }}
                 target="_blank" rel="noopener noreferrer">
                http://www.cndh.tg
              </a>
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
          8. Mise à jour de la déclaration
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
          <p style={{ margin: 0, overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Cette déclaration d'accessibilité a été établie le <strong>18 janvier 2026</strong>.
            Elle sera mise à jour régulièrement pour refléter les améliorations apportées 
            et les évolutions des standards d'accessibilité.
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
          Engagement pour un web accessible à tous
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
          
          .flex-container {
            flex-direction: column !important;
            gap: 0.5rem !important;
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
          
          ul {
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
        
        /* Pour les liens externes */
        a[target="_blank"]::after {
          content: " ↗";
          font-size: 0.8em;
        }
        
        /* Focus visible pour l'accessibilité */
        a:focus, button:focus {
          outline: 2px solid #3498db;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default DeclarationAccessibilite;