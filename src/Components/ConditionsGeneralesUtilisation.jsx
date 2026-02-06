import React from "react";

const ConditionsGeneralesUtilisation = () => {
  const containerStyle = {
    padding: "clamp(1.5rem, 4vw, 3rem)",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.7",
    color: "#2c3e50",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
    overflowWrap: "break-word",
    wordBreak: "break-word"
  };

  const titleStyle = {
    color: "#2c3e50",
    borderBottom: "3px solid #e74c3c",
    paddingBottom: "1rem",
    marginBottom: "2rem",
    fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
    fontWeight: "700",
    textAlign: "center"
  };

  const disclaimerStyle = {
    backgroundColor: "#fff8e1",
    border: "1px solid #ffd54f",
    padding: "1.2rem",
    borderRadius: "6px",
    marginBottom: "2rem",
    fontSize: "0.95rem",
    color: "#5d4037"
  };

  const articleTitleStyle = {
    color: "#2c3e50",
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontWeight: "600",
    paddingLeft: "0.5rem",
    borderLeft: "4px solid #3498db"
  };

  const paragraphStyle = {
    marginBottom: "1.2rem",
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    textAlign: "justify"
  };

  const listStyle = {
    paddingLeft: "1.5rem",
    marginBottom: "1.2rem"
  };

  const listItemStyle = {
    marginBottom: "0.5rem"
  };

  const highlightedBoxStyle = {
    backgroundColor: "#f8f9fa",
    borderLeft: "4px solid #2ecc71",
    padding: "1.2rem",
    borderRadius: "6px",
    margin: "1.5rem 0",
    fontSize: "0.95rem"
  };

  const warningBoxStyle = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeaa7",
    padding: "1.2rem",
    borderRadius: "6px",
    margin: "1.5rem 0",
    fontSize: "0.95rem"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Conditions Générales d'Utilisation
      </h1>

      <div style={disclaimerStyle}>
        <p style={{ margin: 0, fontWeight: "500" }}>
          ⚖️ <strong>Note juridique importante :</strong> Ces conditions générales d'utilisation 
          ont été rédigées conformément aux dispositions du droit togolais, notamment la loi 
          n°2004-005 du 23 avril 2004 relative à la communication électronique et la loi 
          n°2019-014 du 20 septembre 2019 sur la protection des données personnelles. Elles 
          sont fournies à titre informatif.
        </p>
      </div>

      <h2 style={articleTitleStyle}>Article 1 : Objet</h2>
      <p style={paragraphStyle}>
        Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités 
        de mise à disposition du site <strong>emmanuelamela.com</strong> et des services associés, 
        ainsi que les conditions d'accès et d'utilisation desdits services par tout Utilisateur.
      </p>
      <p style={paragraphStyle}>
        En accédant et utilisant ce site, l'Utilisateur accepte sans réserve l'ensemble des 
        dispositions des présentes CGU. Le cas échéant, toute souscription à des services 
        supplémentaires fera l'objet de conditions particulières qui viendront compléter les 
        présentes CGU.
      </p>

      <h2 style={articleTitleStyle}>Article 2 : Définitions</h2>
      <p style={paragraphStyle}>
        <strong>Site :</strong> Désigne le site internet accessible à l'adresse emmanuelamela.com, 
        incluant l'ensemble de ses pages, sous-domaines, contenus et services.
      </p>
      <p style={paragraphStyle}>
        <strong>Éditeur :</strong> Emmanuel AMELA, développeur web indépendant, responsable de la 
        publication et de la maintenance du Site.
      </p>
      <p style={paragraphStyle}>
        <strong>Utilisateur :</strong> Toute personne physique ou morale accédant au Site ou utilisant 
        l'un de ses services.
      </p>
      <p style={paragraphStyle}>
        <strong>Contenu :</strong> Ensemble des éléments présents sur le Site, notamment textes, images, 
        vidéos, logos, codes sources, bases de données.
      </p>

      <h2 style={articleTitleStyle}>Article 3 : Accès aux services</h2>
      <p style={paragraphStyle}>
        Le Site est accessible gratuitement en tout lieu à tout Utilisateur disposant d'un accès 
        à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel 
        informatique, logiciels, connexion Internet, etc.) sont à sa charge.
      </p>
      <div style={highlightedBoxStyle}>
        <p style={{ margin: 0 }}>
          <strong>📱 Accessibilité :</strong> Le Site est conçu pour être accessible sur tous les 
          supports (ordinateur, tablette, smartphone) et navigateurs modernes. L'Éditeur s'efforce 
          de maintenir un accès permanent mais ne peut garantir l'absence d'interruption pour 
          maintenance technique ou cas de force majeure.
        </p>
      </div>
      <p style={paragraphStyle}>
        L'Éditeur se réserve le droit de refuser l'accès au Site, unilatéralement et sans notification 
        préalable, à tout Utilisateur qui contreviendrait aux présentes CGU.
      </p>

      <h2 style={articleTitleStyle}>Article 4 : Propriété intellectuelle</h2>
      <p style={paragraphStyle}>
        Conformément au droit togolais de la propriété intellectuelle et aux principes généraux 
        du droit d'auteur :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          L'ensemble du Site et de son Contenu (textes, images, logos, code source, maquettes, 
          bases de données) est protégé par le droit d'auteur et appartient à l'Éditeur ou à 
          ses partenaires
        </li>
        <li style={listItemStyle}>
          Toute reproduction, représentation, modification, publication, adaptation de tout ou 
          partie du Site ou de son Contenu, par quelque procédé que ce soit, est interdite sans 
          autorisation écrite préalable de l'Éditeur
        </li>
        <li style={listItemStyle}>
          Les marques et logos figurant sur le Site sont des marques déposées. Toute reproduction, 
          imitation ou usage sans autorisation est prohibé
        </li>
        <li style={listItemStyle}>
          Les logiciels et applications présentés font l'objet de licences d'utilisation spécifiques 
          et sont protégés contre toute contrefaçon
        </li>
      </ul>
      <div style={warningBoxStyle}>
        <p style={{ margin: 0 }}>
          <strong>⚠️ Sanctions :</strong> Toute violation des droits de propriété intellectuelle 
          peut entraîner des poursuites civiles et pénales conformément à la législation togolaise 
          et aux conventions internationales.
        </p>
      </div>

      <h2 style={articleTitleStyle}>Article 5 : Responsabilités</h2>
      <p style={paragraphStyle}>
        <strong>5.1. Responsabilité de l'Éditeur :</strong> L'Éditeur s'efforce d'assurer au mieux 
        de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le Site. 
        Toutefois, il ne peut garantir l'exhaustivité, la précision ou l'absence de modification 
        par un tiers.
      </p>
      <p style={paragraphStyle}>
        <strong>5.2. Limitation de responsabilité :</strong> L'Éditeur ne pourra être tenu responsable :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Des dommages directs ou indirects résultant de l'utilisation du Site</li>
        <li style={listItemStyle}>Des interruptions, suspensions ou dysfonctionnements techniques</li>
        <li style={listItemStyle}>De l'introduction de virus ou autres éléments nuisibles par des tiers</li>
        <li style={listItemStyle}>De l'utilisation frauduleuse des identifiants et mots de passe</li>
        <li style={listItemStyle}>De l'interprétation ou de l'utilisation des informations publiées</li>
      </ul>
      <p style={paragraphStyle}>
        <strong>5.3. Responsabilité de l'Utilisateur :</strong> L'Utilisateur s'engage à :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Utiliser le Site conformément à sa destination et dans le respect des lois en vigueur
        </li>
        <li style={listItemStyle}>
          Ne pas porter atteinte à la sécurité ou à l'intégrité du Site
        </li>
        <li style={listItemStyle}>
          Ne pas utiliser le Site à des fins illicites, frauduleuses ou nuisibles
        </li>
        <li style={listItemStyle}>
          Informer l'Éditeur de toute utilisation non autorisée ou violation de sécurité
        </li>
      </ul>

      <h2 style={articleTitleStyle}>Article 6 : Données personnelles</h2>
      <p style={paragraphStyle}>
        La collecte et le traitement des données personnelles des Utilisateurs sont régis par 
        notre <a href="/politique-confidentialite" style={{ color: "#3498db", textDecoration: "none" }}>
          Politique de Confidentialité
        </a> et conformes :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          À la loi togolaise n°2019-014 du 20 septembre 2019 relative à la protection des données 
          à caractère personnel
        </li>
        <li style={listItemStyle}>
          Au Règlement Général sur la Protection des Données (RGPD) pour les résidents de l'Union Européenne
        </li>
        <li style={listItemStyle}>
          Aux principes de licéité, loyauté, transparence et minimisation des données
        </li>
      </ul>
      <p style={paragraphStyle}>
        L'Utilisateur dispose d'un droit d'accès, de rectification, d'effacement, de limitation, 
        d'opposition et de portabilité sur ses données personnelles.
      </p>

      <h2 style={articleTitleStyle}>Article 7 : Liens hypertextes</h2>
      <p style={paragraphStyle}>
        Le Site peut contenir des liens hypertextes vers d'autres sites internet. L'Éditeur ne 
        dispose d'aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
        contenu, leur accessibilité, leur fonctionnement ou leur politique de confidentialité.
      </p>
      <p style={paragraphStyle}>
        La création de liens hypertextes vers le Site est autorisée sous réserve de :
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Ne pas utiliser de techniques de "framing" ou "inlining"</li>
        <li style={listItemStyle}>Ne pas porter atteinte à l'image ou à la réputation de l'Éditeur</li>
        <li style={listItemStyle}>Mentionner clairement la source avec un lien actif</li>
      </ul>

      <h2 style={articleTitleStyle}>Article 8 : Cookies</h2>
      <p style={paragraphStyle}>
        Le Site utilise des cookies pour améliorer l'expérience de navigation, analyser le trafic 
        et personnaliser le contenu. En poursuivant votre navigation, vous acceptez l'utilisation 
        des cookies conformément à notre politique en la matière.
      </p>
      <p style={paragraphStyle}>
        L'Utilisateur peut configurer son navigateur pour refuser les cookies, mais certaines 
        fonctionnalités du Site pourraient ne plus être accessibles.
      </p>

      <h2 style={articleTitleStyle}>Article 9 : Droit applicable et juridiction compétente</h2>
      <p style={paragraphStyle}>
        Les présentes CGU sont régies et interprétées conformément au droit togolais. En cas de 
        litige, et à défaut de solution amiable, les tribunaux compétents de Lomé seront seuls 
        compétents.
      </p>
      <p style={paragraphStyle}>
        Cette clause attributive de juridiction s'applique même en cas de pluralité de défendeurs 
        ou d'appel en garantie.
      </p>

      <h2 style={articleTitleStyle}>Article 10 : Modifications des CGU</h2>
      <p style={paragraphStyle}>
        L'Éditeur se réserve le droit de modifier à tout moment les présentes CGU. Les nouvelles 
        conditions seront applicables dès leur mise en ligne sur le Site.
      </p>
      <p style={paragraphStyle}>
        Il appartient à l'Utilisateur de consulter régulièrement les CGU. La poursuite de 
        l'utilisation du Site après modification vaut acceptation des nouvelles conditions.
      </p>

      <div style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "1.5rem",
        borderRadius: "8px",
        marginTop: "3rem",
        textAlign: "center",
        fontSize: "0.95rem"
      }}>
        <p style={{ margin: 0, fontWeight: "500" }}>
          <strong>Date d'entrée en vigueur :</strong> 18 janvier 2026
        </p>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", opacity: "0.9" }}>
          Dernière mise à jour : 18 janvier 2026 • Ces CGU sont disponibles en permanence sur le Site
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style] {
            padding: 1.2rem !important;
          }
          
          h1 {
            font-size: 1.5rem !important;
          }
          
          h2 {
            font-size: 1.2rem !important;
            margin-top: 1.5rem !important;
          }
          
          p, li {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style] {
            padding: 1rem !important;
          }
          
          h1 {
            font-size: 1.3rem !important;
          }
          
          h2 {
            font-size: 1.1rem !important;
            padding-left: 0.5rem !important;
          }
          
          .disclaimer-box {
            padding: 1rem !important;
            font-size: 0.85rem !important;
          }
          
          .highlighted-box, .warning-box {
            padding: 1rem !important;
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

export default ConditionsGeneralesUtilisation;