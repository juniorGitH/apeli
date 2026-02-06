import React from "react";

const PolitiqueProtectionDonneesPersonnelles = () => {
  const containerStyle = {
    padding: "clamp(0.5rem, 2vw, 3rem)",
    paddingTop: "calc(70px + clamp(1.5rem, 4vw, 3rem))",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.7",
    color: "#2c3e50",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
    minHeight: "100vh"
  };

  const titleStyle = {
    color: "#2c3e50",
    borderBottom: "3px solid #3498db",
    paddingBottom: "1rem",
    marginBottom: "2rem",
    fontSize: "clamp(1.3rem, 3.5vw, 2.3rem)",
    fontWeight: "700",
    textAlign: "center",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const disclaimerStyle = {
    backgroundColor: "#e8f4f8",
    border: "1px solid #b3e5fc",
    padding: "clamp(0.8rem, 2.5vw, 1.2rem)",
    borderRadius: "6px",
    marginBottom: "2rem",
    fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
    color: "#0d47a1",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    boxSizing: "border-box"
  };

  const sectionTitleStyle = {
    color: "#2c3e50",
    marginTop: "2rem",
    marginBottom: "1.2rem",
    fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)",
    fontWeight: "600",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #eee",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const subsectionTitleStyle = {
    color: "#34495e",
    marginTop: "1.5rem",
    marginBottom: "0.8rem",
    fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
    fontWeight: "600",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const paragraphStyle = {
    marginBottom: "1.2rem",
    fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
    textAlign: "justify",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
    maxWidth: "100%"
  };

  const listStyle = {
    paddingLeft: "clamp(1rem, 3vw, 1.8rem)",
    marginBottom: "1.2rem",
    maxWidth: "100%"
  };

  const listItemStyle = {
    marginBottom: "0.6rem",
    position: "relative",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const legalBoxStyle = {
    backgroundColor: "#f5f5f5",
    borderLeft: "4px solid #607d8b",
    padding: "clamp(0.8rem, 2.5vw, 1.2rem)",
    borderRadius: "6px",
    margin: "1.5rem 0",
    fontSize: "clamp(0.85rem, 1.7vw, 0.9rem)",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    boxSizing: "border-box"
  };

  const contactBoxStyle = {
    backgroundColor: "#e8f5e9",
    border: "1px solid #c8e6c9",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    borderRadius: "8px",
    margin: "2rem 0",
    textAlign: "center",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    boxSizing: "border-box"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "1.5rem 0",
    fontSize: "clamp(0.8rem, 1.7vw, 0.95rem)",
    overflowX: "auto",
    display: "block"
  };

  const thStyle = {
    backgroundColor: "#f8f9fa",
    padding: "clamp(8px, 2vw, 12px)",
    border: "1px solid #ddd",
    textAlign: "left",
    fontWeight: "600",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const tdStyle = {
    padding: "clamp(8px, 2vw, 12px)",
    border: "1px solid #ddd",
    verticalAlign: "top",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Politique de Protection des Données Personnelles
      </h1>

      <div style={disclaimerStyle}>
        <p style={{ margin: 0, fontWeight: "500", overflowWrap: "break-word", wordBreak: "break-word" }}>
          🔐 <strong>Conformité légale :</strong> Cette politique est rédigée conformément à la loi 
          togolaise n°2019-014 du 20 septembre 2019 relative à la protection des données à caractère 
          personnel, ainsi qu'au Règlement Général sur la Protection des Données (RGPD 2016/679) 
          pour les résidents de l'Union Européenne.
        </p>
      </div>

      <div style={legalBoxStyle}>
        <p style={{ margin: 0, fontStyle: "italic" }}>
          <strong>Définitions :</strong> 
          <br/>
          • <strong>Données personnelles :</strong> Toute information relative à une personne physique 
          identifiée ou identifiable.
          <br/>
          • <strong>Traitement :</strong> Toute opération effectuée sur des données personnelles.
          <br/>
          • <strong>Responsable du traitement :</strong> Emmanuel AMELA, déterminant les finalités 
          et moyens du traitement.
        </p>
      </div>

      <h2 style={sectionTitleStyle}>1. Collecte des données personnelles</h2>
      
      <h3 style={subsectionTitleStyle}>1.1. Types de données collectées</h3>
      <p style={paragraphStyle}>
        Nous collectons les données personnelles suivantes, de manière licite, loyale et transparente :
      </p>
      
      <div style={{ overflowX: "auto", width: "100%", maxWidth: "100%" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Catégorie de données</th>
              <th style={thStyle}>Exemples de données</th>
              <th style={thStyle}>Mode de collecte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <strong>Données d'identité</strong>
              </td>
              <td style={tdStyle}>
                Nom, prénom, adresse email professionnelle, numéro de téléphone
              </td>
              <td style={tdStyle}>
                Formulaire de contact, demande de devis, inscription newsletter
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Données professionnelles</strong>
              </td>
              <td style={tdStyle}>
                Entreprise, poste, secteur d'activité, besoins spécifiques
              </td>
              <td style={tdStyle}>
                Échanges professionnels, consultations, projets collaboratifs
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Données techniques</strong>
              </td>
              <td style={tdStyle}>
                Adresse IP, type de navigateur, système d'exploitation, pages visitées
              </td>
              <td style={tdStyle}>
                Cookies et technologies similaires, journaux de serveur
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                <strong>Données de communication</strong>
              </td>
              <td style={tdStyle}>
                Historique des échanges, préférences de contact, demandes spécifiques
              </td>
              <td style={tdStyle}>
                Correspondances email, messages via formulaire, échanges téléphoniques
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={legalBoxStyle}>
        <p style={{ margin: 0 }}>
          <strong>Principe de minimisation :</strong> Seules les données strictement nécessaires 
          aux finalités déclarées sont collectées. Aucune donnée sensible (origine raciale, opinions 
          politiques, croyances religieuses, santé, vie sexuelle) n'est collectée.
        </p>
      </div>

      <h3 style={subsectionTitleStyle}>1.2. Bases légales du traitement</h3>
      <p style={paragraphStyle}>
        Conformément au droit togolais et au RGPD, chaque traitement de données repose sur une 
        base légale appropriée :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Exécution d'un contrat :</strong> Pour répondre à vos demandes de devis, 
          propositions commerciales ou exécution de services
        </li>
        <li style={listItemStyle}>
          <strong>Intérêt légitime :</strong> Pour améliorer nos services, assurer la sécurité 
          du site et prévenir les fraudes
        </li>
        <li style={listItemStyle}>
          <strong>Consentement :</strong> Pour l'envoi de newsletters ou communications marketing 
          (vous pouvez retirer votre consentement à tout moment)
        </li>
        <li style={listItemStyle}>
          <strong>Obligation légale :</strong> Pour respecter nos obligations comptables et fiscales
        </li>
      </ul>

      <h2 style={sectionTitleStyle}>2. Finalités de la collecte</h2>
      <p style={paragraphStyle}>
        Vos données personnelles sont traitées pour les finalités suivantes :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Gestion de la relation client :</strong> Répondre à vos demandes, fournir des 
          informations sur nos services, établir des devis
        </li>
        <li style={listItemStyle}>
          <strong>Exécution des services :</strong> Développement de projets web, maintenance, 
          conseil en informatique selon vos besoins spécifiques
        </li>
        <li style={listItemStyle}>
          <strong>Communication professionnelle :</strong> Vous informer des nouveautés, des mises 
          à jour importantes, des offres promotionnelles (avec votre consentement)
        </li>
        <li style={listItemStyle}>
          <strong>Amélioration des services :</strong> Analyser l'utilisation du site pour optimiser 
          l'expérience utilisateur et le contenu
        </li>
        <li style={listItemStyle}>
          <strong>Sécurité et prévention :</strong> Détecter et prévenir les activités frauduleuses, 
          assurer la sécurité du site et de ses utilisateurs
        </li>
        <li style={listItemStyle}>
          <strong>Conformité légale :</strong> Respecter nos obligations légales, réglementaires et fiscales
        </li>
      </ul>

      <h2 style={sectionTitleStyle}>3. Partage des données</h2>
      <p style={paragraphStyle}>
        Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers à des fins 
        commerciales. Elles peuvent être partagées uniquement dans les cas suivants :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Sous-traitants techniques :</strong> Avec nos prestataires d'hébergement (Vercel) 
          et d'infrastructure technique, sous stricte obligation de confidentialité
        </li>
        <li style={listItemStyle}>
          <strong>Obligation légale :</strong> Si requis par une autorité judiciaire, administrative 
          ou réglementaire togolaise
        </li>
        <li style={listItemStyle}>
          <strong>Protection des droits :</strong> Pour protéger nos droits, notre propriété, notre 
          sécurité ou celle de nos utilisateurs
        </li>
        <li style={listItemStyle}>
          <strong>Partenaires de projet :</strong> Exceptionnellement avec des partenaires techniques 
          pour l'exécution de projets spécifiques (avec votre accord préalable)
        </li>
      </ul>

      <div style={legalBoxStyle}>
        <p style={{ margin: 0 }}>
          <strong>Transferts internationaux :</strong> Certains sous-traitants peuvent être situés 
          hors du Togo. Dans ce cas, nous assurons que des garanties appropriées sont mises en place 
          (clauses contractuelles types, décisions d'adéquation).
        </p>
      </div>

      <h2 style={sectionTitleStyle}>4. Conservation des données</h2>
      <p style={paragraphStyle}>
        Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux 
        finalités pour lesquelles elles ont été collectées :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Données de contact et prospects :</strong> 3 ans à compter du dernier contact actif
        </li>
        <li style={listItemStyle}>
          <strong>Données clients et facturation :</strong> 10 ans pour les obligations comptables 
          et fiscales (conformément au droit togolais)
        </li>
        <li style={listItemStyle}>
          <strong>Données techniques et cookies :</strong> Jusqu'à 13 mois maximum
        </li>
        <li style={listItemStyle}>
          <strong>Consentements :</strong> Jusqu'à leur retrait ou 3 ans après le dernier contact
        </li>
      </ul>
      <p style={paragraphStyle}>
        Passés ces délais, les données sont soit anonymisées pour des analyses statistiques, 
        soit définitivement supprimées.
      </p>

      <h2 style={sectionTitleStyle}>5. Droits des personnes concernées</h2>
      <p style={paragraphStyle}>
        Conformément à la loi togolaise et au RGPD, vous disposez des droits suivants sur vos 
        données personnelles :
      </p>
      
      <div style={{
        backgroundColor: "#f0f8ff",
        padding: "clamp(1rem, 3vw, 1.5rem)",
        borderRadius: "8px",
        margin: "1.5rem 0",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>1</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous
            </div>
          </li>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>2</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes
            </div>
          </li>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>3</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit à l'effacement :</strong> Demander la suppression de vos données 
              (droit à l'oubli)
            </div>
          </li>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>4</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit à la limitation :</strong> Restreindre temporairement le traitement 
              de vos données
            </div>
          </li>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>5</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit d'opposition :</strong> Vous opposer au traitement pour des motifs 
              légitimes
            </div>
          </li>
          <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>6</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit à la portabilité :</strong> Recevoir vos données dans un format 
              structuré et lisible
            </div>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span style={{
              backgroundColor: "#3498db",
              color: "white",
              borderRadius: "50%",
              minWidth: "24px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              flexShrink: 0,
              fontSize: "0.85rem"
            }}>7</span>
            <div style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>
              <strong>Droit de retirer son consentement :</strong> À tout moment, pour les 
              traitements basés sur le consentement
            </div>
          </li>
        </ul>
      </div>

      <div style={contactBoxStyle}>
        <h3 style={{ color: "#2c3e50", marginBottom: "1rem", fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)" }}>
          Exercer vos droits
        </h3>
        <p style={{ marginBottom: "1rem", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          Pour exercer vos droits ou pour toute question concernant la protection de vos données, 
          contactez notre délégué à la protection des données :
        </p>
        <p style={{ margin: 0, wordBreak: "break-all" }}>
          <strong>Email :</strong>{' '}
          <a 
            href="mailto:Emmanuel.Amela@outlook.com"
            style={{
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "600",
              wordBreak: "break-all"
            }}
          >
            Emmanuel.Amela@outlook.com
          </a>
        </p>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)" }}>
          Nous nous engageons à répondre dans un délai d'un mois maximum
        </p>
      </div>

      <h2 style={sectionTitleStyle}>6. Sécurité des données</h2>
      <p style={paragraphStyle}>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
        protéger vos données personnelles contre :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Accès non autorisé :</strong> Authentification, contrôle d'accès, pare-feu
        </li>
        <li style={listItemStyle}>
          <strong>Divulgation non autorisée :</strong> Chiffrement des données sensibles, 
          communications sécurisées
        </li>
        <li style={listItemStyle}>
          <strong>Altération ou destruction :</strong> Sauvegardes régulières, systèmes de détection 
          d'intrusion
        </li>
        <li style={listItemStyle}>
          <strong>Perte accidentelle :</strong> Procédures de sauvegarde et de récupération
        </li>
      </ul>
      <p style={paragraphStyle}>
        En cas de violation de données personnelles présentant un risque pour vos droits et 
        libertés, nous nous engageons à en informer l'Autorité de protection des données 
        togolaise et, le cas échéant, les personnes concernées.
      </p>

      <h2 style={sectionTitleStyle}>7. Cookies et technologies similaires</h2>
      <p style={paragraphStyle}>
        Notre site utilise des cookies pour :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Cookies essentiels :</strong> Assurer le fonctionnement technique du site
        </li>
        <li style={listItemStyle}>
          <strong>Cookies analytiques :</strong> Comprendre comment les visiteurs utilisent le site 
          (anonymisé)
        </li>
        <li style={listItemStyle}>
          <strong>Cookies de préférence :</strong> Mémoriser vos choix (langue, paramètres d'affichage)
        </li>
      </ul>
      <p style={paragraphStyle}>
        Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines 
        fonctionnalités du site pourraient ne plus être accessibles.
      </p>

      <h2 style={sectionTitleStyle}>8. Modifications de la politique</h2>
      <p style={paragraphStyle}>
        Cette politique de protection des données peut être mise à jour pour tenir compte des 
        évolutions légales, réglementaires ou techniques. La version en vigueur est toujours 
        celle accessible sur notre site.
      </p>
      <p style={paragraphStyle}>
        Nous vous informerons des changements substantiels par un avis visible sur notre site 
        ou par email si vous êtes concerné.
      </p>

      <div style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "clamp(1rem, 3vw, 1.5rem)",
        borderRadius: "8px",
        marginTop: "3rem",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <p style={{ margin: 0, fontWeight: "500", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
          <strong>Date d'entrée en vigueur :</strong> 18 janvier 2026
        </p>
        <p style={{ 
          margin: "0.5rem 0 0 0", 
          fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)", 
          opacity: "0.9",
          wordBreak: "break-word"
        }}>
          Dernière mise à jour : 18 janvier 2026 • 
          {' '}
          <a 
            href="/mentions-legales" 
            style={{ color: "#bbdefb", textDecoration: "none" }}
          >
            Voir aussi nos Mentions Légales
          </a>
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
        p, li, span, strong, em, a, div, td, th {
          max-width: 100%;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          hyphens: auto;
        }
        
        /* Corrections spécifiques pour les URLs et emails */
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
          
          table {
            font-size: 0.85rem !important;
          }
          
          th, td {
            padding: 8px !important;
            min-width: 100px;
          }
          
          h1 {
            font-size: 1.4rem !important;
          }
          
          h2 {
            font-size: 1.2rem !important;
            margin-top: 1.5rem !important;
          }
          
          h3 {
            font-size: 1.05rem !important;
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
          
          h3 {
            font-size: 1rem !important;
          }
          
          p, li {
            font-size: 0.85rem !important;
          }
          
          table {
            font-size: 0.75rem !important;
          }
          
          th, td {
            padding: 6px !important;
            font-size: 0.75rem !important;
            min-width: 80px;
          }
          
          div[style*="backgroundColor"] {
            padding: 0.8rem !important;
          }
        }
        
        @media (max-width: 320px) {
          h1 {
            font-size: 1.1rem !important;
          }
          
          h2 {
            font-size: 1rem !important;
          }
          
          h3 {
            font-size: 0.95rem !important;
          }
          
          p, li {
            font-size: 0.8rem !important;
            line-height: 1.5 !important;
          }
          
          table {
            font-size: 0.7rem !important;
          }
          
          th, td {
            padding: 4px !important;
            font-size: 0.7rem !important;
          }
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        tr:hover {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default PolitiqueProtectionDonneesPersonnelles;