import React from "react";

const MentionsLegales = () => {
  const containerStyle = {
    padding: "clamp(0.5rem, 2vw, 3rem)",
    paddingTop: "calc(70px + clamp(1.5rem, 4vw, 3rem))",
    maxWidth: "1200px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#333",
    boxSizing: "border-box",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden"
  };

  const titleStyle = {
    color: "#2c3e50",
    borderBottom: "3px solid #3498db",
    paddingBottom: "0.8rem",
    marginBottom: "1.5rem",
    fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
    fontWeight: "bold",
    overflowWrap: "break-word"
  };

  const disclaimerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    borderRadius: "8px",
    marginBottom: "clamp(1.5rem, 4vw, 2rem)",
    borderLeft: "4px solid #3498db",
    fontSize: "clamp(0.9rem, 2vw, 1rem)"
  };

  const sectionStyle = {
    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
    breakInside: "avoid",
    pageBreakInside: "avoid"
  };

  const h2Style = {
    color: "#2c3e50",
    borderBottom: "2px solid #eee",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontWeight: "600",
    overflowWrap: "break-word"
  };

  const pStyle = {
    fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
    marginBottom: "1rem",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    hyphens: "auto",
    maxWidth: "100%"
  };

  const infoCardStyle = {
    backgroundColor: "#f5f5f5",
    padding: "clamp(0.8rem, 2.5vw, 1.5rem)",
    borderRadius: "8px",
    margin: "1rem 0",
    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
    overflow: "hidden",
    width: "100%",
    boxSizing: "border-box"
  };

  const linkStyle = {
    color: "#3498db",
    textDecoration: "none",
    wordBreak: "break-all",
    display: "inline-block",
    maxWidth: "100%"
  };

  const footerStyle = {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    borderRadius: "8px",
    marginTop: "clamp(2rem, 5vw, 3rem)",
    textAlign: "center",
    fontSize: "clamp(0.9rem, 2vw, 1rem)"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Mentions Légales
      </h1>

      <div style={disclaimerStyle}>
        <p style={{ fontStyle: "italic", margin: 0 }}>
          <strong>Note importante :</strong> Ces mentions légales ont été rédigées en tenant compte 
          des dispositions du droit togolais et des principes généraux du droit informatique. 
          Elles sont fournies à titre informatif et ne constituent pas un avis juridique.
        </p>
      </div>

      <section style={sectionStyle}>
        <h2 style={h2Style}>
          1. Éditeur du site
        </h2>
        <p style={pStyle}>
          Conformément aux dispositions de l'article 6 de la loi n°2004-005 du 23 avril 2004 
          relative à la communication audiovisuelle et à la communication électronique au Togo :
        </p>
        <div style={infoCardStyle}>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Nom :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>Emmanuel AMELA</span>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Statut :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>Développeur web indépendant</span>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem", 
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content", paddingTop: "2px" }}>Email :</strong>
            <a href="mailto:Emmanuel.Amela@outlook.com" style={{
              ...linkStyle,
              flex: "1",
              minWidth: "0"
            }}>
              Emmanuel.Amela@outlook.com
            </a>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem", 
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content", paddingTop: "2px" }}>Site web :</strong>
            <a href="https://www.emmanuelamela.com" style={{
              ...linkStyle,
              flex: "1",
              minWidth: "0"
            }}>
              https://www.emmanuelamela.com
            </a>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Activité :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>Développement web, création d'applications, conseil en informatique</span>
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>
          2. Hébergement
        </h2>
        <p style={pStyle}>
          Ce site est hébergé par :
        </p>
        <div style={infoCardStyle}>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Hébergeur :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>Vercel Inc.</span>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Adresse :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</span>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem", 
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content", paddingTop: "2px" }}>Site web :</strong>
            <a href="https://vercel.com" style={{
              ...linkStyle,
              flex: "1",
              minWidth: "0"
            }}>
              https://vercel.com
            </a>
          </p>
          <p style={{ 
            margin: "0.5rem 0", 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "break-word"
          }}>
            <strong style={{ minWidth: "fit-content" }}>Téléphone :</strong>
            <span style={{ flex: "1", minWidth: "0", wordBreak: "break-word" }}>Non disponible publiquement</span>
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>
          3. Propriété intellectuelle
        </h2>
        <p style={pStyle}>
          Conformément aux principes du <strong>droit d'auteur</strong> (droit subjectif extra-patrimonial 
          et patrimonial) et à la loi togolaise sur la propriété intellectuelle :
        </p>
        
        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            3.1. Droits d'auteur
          </h3>
          <p style={pStyle}>
            L'ensemble de ce site relève de la législation togolaise et internationale sur le droit 
            d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, 
            y compris pour :
          </p>
          <ul style={{ 
            paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            marginBottom: "1rem"
          }}>
            <li>Les documents téléchargeables</li>
            <li>Les représentations iconographiques et photographiques</li>
            <li>Le code source des applications présentées</li>
            <li>Les maquettes et designs</li>
            <li>Les contenus textuels</li>
          </ul>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #3498db",
            fontSize: "clamp(0.9rem, 2vw, 1rem)"
          }}>
            <p style={{ margin: 0 }}>
              <strong>Droit moral (extra-patrimonial) :</strong> Emmanuel AMELA se réserve le droit 
              à la paternité de ses créations et au respect de l'intégrité de ses œuvres.
            </p>
          </div>
          
          <div style={{
            backgroundColor: "#e8f4f8",
            padding: "clamp(0.8rem, 2vw, 1rem)",
            borderRadius: "6px",
            margin: "1rem 0",
            borderLeft: "3px solid #3498db",
            fontSize: "clamp(0.9rem, 2vw, 1rem)"
          }}>
            <p style={{ margin: 0 }}>
              <strong>Droit patrimonial :</strong> Toute reproduction, représentation, modification, 
              publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen 
              ou le procédé utilisé, est interdite sans autorisation préalable écrite.
            </p>
          </div>
        </div>

        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            3.2. Logiciels et créations
          </h3>
          <p style={pStyle}>
            Concernant les logiciels présentés sur ce site :
          </p>
          <ul style={{ 
            paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
          }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Licences :</strong> Les logiciels sont fournis sous licence, accordant un droit 
              d'utilisation non exclusif (cf. distinction licence/vente du droit contractuel informatique)
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Contrefaçon :</strong> Toute copie servile, inspiration directe ou plagiat 
              des logiciels présentés constitue une contrefaçon sanctionnée par la loi
            </li>
            <li>
              <strong>Dépôts :</strong> Les créations logicielles font l'objet de dépôts probatoires 
              pour prouver leur antériorité
            </li>
          </ul>
        </div>

        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            3.3. Marques et noms de domaine
          </h3>
          <p style={pStyle}>
            Les marques et logos figurant sur ce site sont des marques déposées. 
            Tout nom de domaine utilisé est enregistré conformément aux règles de l'ICANN 
            et respecte le principe d'antériorité.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>
          4. Protection des données personnelles
        </h2>
        
        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            4.1. Collecte des données
          </h3>
          <p style={pStyle}>
            Conformément à la loi togolaise n°2019-014 du 20 septembre 2019 relative à la protection 
            des données à caractère personnel et au Règlement Général sur la Protection des Données 
            (RGPD) pour les résidents européens :
          </p>
          <ul style={{ 
            paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
          }}>
            <li style={{ marginBottom: "0.5rem" }}>
              Les données collectées via les formulaires de contact sont utilisées exclusivement 
              pour répondre aux demandes
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Aucune donnée personnelle n'est cédée à des tiers sans consentement exprès
            </li>
            <li>
              Les données sont conservées pendant la durée strictement nécessaire à leur traitement
            </li>
          </ul>
        </div>

        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            4.2. Droits des personnes
          </h3>
          <p style={pStyle}>
            Conformément au droit des personnes sur leurs données (droit subjectif extra-patrimonial) :
          </p>
          <ul style={{ 
            paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            marginBottom: "1rem"
          }}>
            <li style={{ marginBottom: "0.3rem" }}>Droit d'accès à vos données personnelles</li>
            <li style={{ marginBottom: "0.3rem" }}>Droit de rectification des données inexactes</li>
            <li style={{ marginBottom: "0.3rem" }}>Droit à l'effacement (droit à l'oubli)</li>
            <li style={{ marginBottom: "0.3rem" }}>Droit à la limitation du traitement</li>
            <li style={{ marginBottom: "0.3rem" }}>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p style={pStyle}>
            Pour exercer ces droits, contactez :{" "}
            <a href="mailto:Emmanuel.Amela@outlook.com" style={linkStyle}>
              Emmanuel.Amela@outlook.com
            </a>
          </p>
        </div>

        <div style={{ margin: "clamp(1rem, 3vw, 1.5rem) 0" }}>
          <h3 style={{ 
            color: "#34495e", 
            marginBottom: "0.8rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            fontWeight: "600"
          }}>
            4.3. Cookies
          </h3>
          <p style={pStyle}>
            Ce site utilise des cookies pour :
          </p>
          <ul style={{ 
            paddingLeft: "clamp(1rem, 3vw, 1.5rem)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            marginBottom: "1rem"
          }}>
            <li style={{ marginBottom: "0.3rem" }}>Améliorer l'expérience utilisateur</li>
            <li style={{ marginBottom: "0.3rem" }}>Analyser le trafic de manière anonyme</li>
            <li>Mémoriser les préférences de navigation</li>
          </ul>
          <p style={pStyle}>
            En naviguant sur ce site, vous acceptez l'utilisation des cookies conformément à 
            notre politique de confidentialité.
          </p>
        </div>
      </section>

      <div style={footerStyle}>
        <p style={{ margin: 0 }}>
          <strong>Dernière mise à jour :</strong> 18 janvier 2026
        </p>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)" }}>
          Ces mentions légales peuvent être modifiées à tout moment. La version en ligne fait foi.
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
        p, li, span, strong, em, a, div {
          max-width: 100%;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          hyphens: auto;
        }
        
        /* Corrections spécifiques pour les longues URLs et emails */
        a {
          word-break: break-all !important;
          overflow-wrap: anywhere !important;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          * {
            max-width: 100%;
          }
          
          p, li, span, strong {
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 1.4rem !important;
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
          
          section {
            margin-bottom: 1rem !important;
          }
          
          div[style*="backgroundColor"] {
            padding: 0.6rem !important;
          }
          
          strong {
            display: block;
            width: 100%;
            margin-bottom: 0.2rem;
          }
        }
        
        @media (max-width: 320px) {
          h1 {
            font-size: 1.2rem !important;
          }
          
          h2 {
            font-size: 1rem !important;
          }
          
          h3 {
            font-size: 0.95rem !important;
          }
          
          p, li {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
        }
        
        a:hover {
          text-decoration: underline;
          color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default MentionsLegales;