import React from "react";

const PolitiqueCookies = () => {
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
        borderBottom: "3px solid #e67e22",
        paddingBottom: "1rem",
        marginBottom: "2rem",
        fontSize: "clamp(1.3rem, 3.5vw, 2.5rem)",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        Politique de Cookies
      </h1>

      <div style={{
        backgroundColor: "#fff8e1",
        padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
        borderRadius: "10px",
        marginBottom: "2rem",
        borderLeft: "4px solid #e67e22",
        width: "100%",
        boxSizing: "border-box",
        overflowWrap: "break-word",
        wordBreak: "break-word"
      }}>
        <p style={{ fontStyle: "italic", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
          <strong>Note importante :</strong> Cette politique de cookies a été rédigée en tenant compte 
          des dispositions du droit togolais et des principes généraux de protection des données. 
          Elle est conforme au Règlement Général sur la Protection des Données (RGPD) pour les résidents européens.
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
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Conformément aux définitions légales et aux bonnes pratiques internationales :
        </p>
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
          <p style={{ margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Un <strong>cookie</strong> est un petit fichier texte déposé et stocké sur votre terminal 
            (ordinateur, smartphone, tablette) lorsque vous consultez un site internet.
          </p>
          <p style={{ margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Les cookies sont gérés par votre navigateur internet et seul l'émetteur d'un cookie 
            est susceptible de lire ou de modifier les informations qui y sont contenues.
          </p>
          <p style={{ margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Conformément à la <strong>loi togolaise n°2019-014 du 20 septembre 2019</strong> relative 
            à la protection des données à caractère personnel, les cookies peuvent être considérés 
            comme des traitements de données personnelles lorsqu'ils permettent d'identifier une personne.
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
          2. Types de cookies utilisés
        </h2>
        
        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            2.1. Cookies strictement nécessaires (essentiels)
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
          </p>
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
                    Nom du cookie
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Finalité
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Durée
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
                    session_id
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Maintien de la session utilisateur
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Session
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    csrf_token
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Protection contre les attaques CSRF
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    1 heure
                  </td>
                </tr>
              </tbody>
            </table>
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
            2.2. Cookies de performance et d'analyse
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Ces cookies nous permettent d'analyser l'utilisation du site pour en améliorer 
            le fonctionnement et l'expérience utilisateur.
          </p>
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
                    Nom du cookie
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Finalité
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Durée
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Fournisseur
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
                    _ga
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Analyse d'audience (Google Analytics)
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    2 ans
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Google LLC
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    _gid
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Analyse d'audience (Google Analytics)
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    24 heures
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Google LLC
                  </td>
                </tr>
              </tbody>
            </table>
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
            2.3. Cookies de fonctionnalité
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Ces cookies permettent de mémoriser vos préférences et choix pour personnaliser 
            votre expérience de navigation.
          </p>
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
                    Nom du cookie
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Finalité
                  </th>
                  <th style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)", 
                    textAlign: "left",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Durée
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
                    language
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Mémorisation de la langue préférée
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    1 an
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    theme
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    Mémorisation du thème (clair/sombre)
                  </td>
                  <td style={{ 
                    border: "1px solid #ddd", 
                    padding: "clamp(0.5rem, 1.5vw, 0.8rem)",
                    overflowWrap: "break-word",
                    wordBreak: "break-word"
                  }}>
                    1 an
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
          3. Finalités des cookies
        </h2>
        <div style={{
          backgroundColor: "#f0f7ff",
          padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
          borderRadius: "8px",
          margin: "1rem 0",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p style={{ margin: "0.5rem 0", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Les cookies que nous utilisons ont pour finalités :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Améliorer l'expérience utilisateur :</strong> personnalisation de l'interface, 
              mémorisation des préférences
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Analyser le trafic :</strong> statistiques anonymes de fréquentation, 
              analyse des parcours utilisateurs
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Assurer la sécurité :</strong> protection contre les attaques, 
              authentification sécurisée
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              <strong>Faciliter la navigation :</strong> maintien de session, 
              chargement optimisé des pages
            </li>
          </ul>
        </div>
        
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            Base légale du traitement
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Conformément à l'article 6 du RGPD et à la loi togolaise sur la protection des données :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Les cookies strictement nécessaires sont fondés sur l'intérêt légitime
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Les cookies de performance et de fonctionnalité sont soumis à votre consentement exprès
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              Vous pouvez retirer votre consentement à tout moment
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
          4. Gestion des cookies
        </h2>
        
        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            4.1. Consentement
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Lors de votre première visite sur notre site, un bandeau d'information concernant 
            les cookies s'affiche. Vous avez alors la possibilité :
          </p>
          <div style={{
            backgroundColor: "#f9f9f9",
            padding: "clamp(0.8rem, 2.5vw, 1.2rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #e67e22",
            width: "100%",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", margin: 0 }}>
              <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                D'accepter tous les cookies (cookies essentiels et optionnels)
              </li>
              <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                De refuser les cookies optionnels (seuls les cookies essentiels seront déposés)
              </li>
              <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
                De personnaliser vos préférences par catégorie de cookies
              </li>
              <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
                De consulter cette politique de cookies pour plus d'informations
              </li>
            </ul>
          </div>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Votre consentement est valable pour une durée de <strong>13 mois</strong>. 
            Passé ce délai, nous vous redemanderons votre consentement.
          </p>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            4.2. Modification de vos préférences
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Vous pouvez modifier vos choix concernant les cookies à tout moment :
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            margin: "1rem 0"
          }}>
            <div style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "clamp(0.8rem, 2vw, 1.2rem)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h4 style={{ color: "#2c3e50", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
                Via notre interface
              </h4>
              <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                Cliquez sur l'icône "Gestion des cookies" en bas à droite de l'écran
              </p>
            </div>
            <div style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "clamp(0.8rem, 2vw, 1.2rem)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h4 style={{ color: "#2c3e50", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
                Via votre navigateur
              </h4>
              <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
                Paramètres → Confidentialité et sécurité → Cookies
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
            4.3. Configuration par navigateur
          </h3>
          <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
            Vous pouvez configurer votre navigateur pour :
          </p>
          <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Accepter ou refuser les cookies systématiquement
            </li>
            <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Être averti à chaque dépôt de cookie
            </li>
            <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
              Supprimer périodiquement les cookies stockés
            </li>
          </ul>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2.5vw, 1.2rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            width: "100%",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold", overflowWrap: "break-word", wordBreak: "break-word" }}>
              Liens de configuration pour les navigateurs populaires :
            </p>
            <ul style={{ 
              paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
              margin: 0
            }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="https://support.google.com/chrome/answer/95647" 
                   style={{ color: "#3498db", textDecoration: "none", wordBreak: "break-all" }}
                   target="_blank" rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" 
                   style={{ color: "#3498db", textDecoration: "none", wordBreak: "break-all" }}
                   target="_blank" rel="noopener noreferrer">
                  Mozilla Firefox
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" 
                   style={{ color: "#3498db", textDecoration: "none", wordBreak: "break-all" }}
                   target="_blank" rel="noopener noreferrer">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                   style={{ color: "#3498db", textDecoration: "none", wordBreak: "break-all" }}
                   target="_blank" rel="noopener noreferrer">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>
          
          <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", fontStyle: "italic", marginTop: "1rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Note : La désactivation des cookies peut altérer le fonctionnement de certaines 
            fonctionnalités du site.
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
          5. Transferts de données
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Certains cookies tiers peuvent entraîner des transferts de données en dehors du Togo, 
          notamment vers les États-Unis. Ces transferts sont encadrés par :
        </p>
        <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Les clauses contractuelles types de la Commission européenne
          </li>
          <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Le Privacy Shield (pour les transferts vers les États-Unis)
          </li>
          <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            Les garanties appropriées prévues par la loi togolaise
          </li>
        </ul>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Pour plus d'informations sur les transferts internationaux de données, 
          consultez notre politique de confidentialité.
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
          6. Vos droits
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Conformément à la loi togolaise n°2019-014 et au RGPD, vous disposez des droits suivants :
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          margin: "1.5rem 0"
        }}>
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              Droit d'accès
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Accéder aux informations concernant les cookies déposés sur votre terminal
            </p>
          </div>
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              Droit d'opposition
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Vous opposer au dépôt de cookies non essentiels à tout moment
            </p>
          </div>
          <div style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "clamp(0.8rem, 2vw, 1.2rem)",
            boxSizing: "border-box",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <h4 style={{ color: "#2c3e50", marginBottom: "0.5rem", fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              Droit de retrait
            </h4>
            <p style={{ fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)", margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
              Retirer votre consentement concernant les cookies optionnels
            </p>
          </div>
        </div>
        
        <div style={{
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeaa7",
          borderRadius: "8px",
          padding: "clamp(0.8rem, 2vw, 1.2rem)",
          marginTop: "1rem",
          width: "100%",
          boxSizing: "border-box",
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p style={{ margin: 0, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Pour exercer vos droits ou pour toute question concernant cette politique de cookies, 
            contactez-nous à :{" "}
            <a href="mailto:Emmanuel.Amela@outlook.com" style={{ color: "#3498db", fontWeight: "bold", wordBreak: "break-all" }}>
              Emmanuel.Amela@outlook.com
            </a>
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
          7. Mises à jour de la politique
        </h2>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Cette politique de cookies peut être mise à jour périodiquement pour tenir compte :
        </p>
        <ul style={{ paddingLeft: "clamp(1rem, 3vw, 1.5rem)", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Des évolutions législatives et réglementaires
          </li>
          <li style={{ marginBottom: "0.5rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
            Des changements dans nos pratiques de traitement des données
          </li>
          <li style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            Des nouvelles technologies de suivi et de mesure
          </li>
        </ul>
        <p style={{ overflowWrap: "break-word", wordBreak: "break-word", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          La version en ligne de cette politique fait foi. Nous vous recommandons de la consulter 
          régulièrement.
        </p>
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
        <p style={{ margin: 0, fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          <strong>Dernière mise à jour :</strong> 18 janvier 2026
        </p>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)", overflowWrap: "break-word", wordBreak: "break-word" }}>
          Cette politique de cookies est partie intégrante des mentions légales du site.
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
        
        /* Amélioration des listes */
        ul li {
          margin-bottom: 0.3rem;
        }
        
        /* Pour les liens externes */
        a[target="_blank"]::after {
          content: " ↗";
          font-size: 0.8em;
        }
      `}</style>
    </div>
  );
};

export default PolitiqueCookies;