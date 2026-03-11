import React from "react";

const ConditionsGeneralesUtilisation = () => {
  return (
    <div className="cgu-container">
      {/* Espace pour compenser le header fixe */}
      <div className="header-spacer"></div>

      <h1 className="cgu-title">
        Conditions Générales d'Utilisation
      </h1>

      <div className="disclaimer-box">
        <p>
          <strong>Note juridique importante :</strong> Ces conditions générales d'utilisation 
          ont été rédigées conformément aux dispositions du droit togolais, notamment la loi 
          n°2004-005 du 23 avril 2004 relative à la communication électronique et la loi 
          n°2019-014 du 20 septembre 2019 sur la protection des données personnelles. Elles 
          sont fournies à titre informatif.
        </p>
      </div>

      <h2 className="article-title">Article 1 : Objet</h2>
      <p className="paragraph">
        Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités 
        de mise à disposition du site <strong>e-a.codes</strong> et des services associés, 
        ainsi que les conditions d'accès et d'utilisation desdits services par tout Utilisateur.
      </p>
      <p className="paragraph">
        En accédant et utilisant ce site, l'Utilisateur accepte sans réserve l'ensemble des 
        dispositions des présentes CGU. Le cas échéant, toute souscription à des services 
        supplémentaires fera l'objet de conditions particulières qui viendront compléter les 
        présentes CGU.
      </p>

      <h2 className="article-title">Article 2 : Définitions</h2>
      <p className="paragraph">
        <strong>Site :</strong> Désigne le site internet accessible à l'adresse emmanuelamela.com, 
        incluant l'ensemble de ses pages, sous-domaines, contenus et services.
      </p>
      <p className="paragraph">
        <strong>Éditeur :</strong> Emmanuel AMELA, développeur indépendant, responsable de la 
        publication et de la maintenance du Site.
      </p>
      <p className="paragraph">
        <strong>Utilisateur :</strong> Toute personne physique ou morale accédant au Site ou utilisant 
        l'un de ses services.
      </p>
      <p className="paragraph">
        <strong>Contenu :</strong> Ensemble des éléments présents sur le Site, notamment textes, images, 
        vidéos, logos, codes sources, bases de données.
      </p>

      <h2 className="article-title">Article 3 : Accès aux services</h2>
      <p className="paragraph">
        Le Site est accessible gratuitement en tout lieu à tout Utilisateur disposant d'un accès 
        à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel 
        informatique, logiciels, connexion Internet, etc.) sont à sa charge.
      </p>
      <div className="highlighted-box">
        <p>
          <strong>Accessibilité :</strong> Le Site est conçu pour être accessible sur tous les 
          supports (ordinateur, tablette, smartphone) et navigateurs modernes. L'Éditeur s'efforce 
          de maintenir un accès permanent mais ne peut garantir l'absence d'interruption pour 
          maintenance technique ou cas de force majeure.
        </p>
      </div>
      <p className="paragraph">
        L'Éditeur se réserve le droit de refuser l'accès au Site, unilatéralement et sans notification 
        préalable, à tout Utilisateur qui contreviendrait aux présentes CGU.
      </p>

      <h2 className="article-title">Article 4 : Propriété intellectuelle</h2>
      <p className="paragraph">
        Conformément au droit togolais de la propriété intellectuelle et aux principes généraux 
        du droit d'auteur :
      </p>
      <ul className="list">
        <li>
          L'ensemble du Site et de son Contenu (textes, images, logos, code source, maquettes, 
          bases de données) est protégé par le droit d'auteur et appartient à l'Éditeur ou à 
          ses partenaires
        </li>
        <li>
          Toute reproduction, représentation, modification, publication, adaptation de tout ou 
          partie du Site ou de son Contenu, par quelque procédé que ce soit, est interdite sans 
          autorisation écrite préalable de l'Éditeur
        </li>
        <li>
          Les marques et logos figurant sur le Site sont des marques déposées. Toute reproduction, 
          imitation ou usage sans autorisation est prohibé
        </li>
        <li>
          Les logiciels et applications présentés font l'objet de licences d'utilisation spécifiques 
          et sont protégés contre toute contrefaçon
        </li>
      </ul>
      <div className="warning-box">
        <p>
          <strong>⚠️ Sanctions :</strong> Toute violation des droits de propriété intellectuelle 
          peut entraîner des poursuites civiles et pénales conformément à la législation togolaise 
          et aux conventions internationales.
        </p>
      </div>

      <h2 className="article-title">Article 5 : Responsabilités</h2>
      <p className="paragraph">
        <strong>5.1. Responsabilité de l'Éditeur :</strong> L'Éditeur s'efforce d'assurer au mieux 
        de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le Site. 
        Toutefois, il ne peut garantir l'exhaustivité, la précision ou l'absence de modification 
        par un tiers.
      </p>
      <p className="paragraph">
        <strong>5.2. Limitation de responsabilité :</strong> L'Éditeur ne pourra être tenu responsable :
      </p>
      <ul className="list">
        <li>Des dommages directs ou indirects résultant de l'utilisation du Site</li>
        <li>Des interruptions, suspensions ou dysfonctionnements techniques</li>
        <li>De l'introduction de virus ou autres éléments nuisibles par des tiers</li>
        <li>De l'utilisation frauduleuse des identifiants et mots de passe</li>
        <li>De l'interprétation ou de l'utilisation des informations publiées</li>
      </ul>
      <p className="paragraph">
        <strong>5.3. Responsabilité de l'Utilisateur :</strong> L'Utilisateur s'engage à :
      </p>
      <ul className="list">
        <li>
          Utiliser le Site conformément à sa destination et dans le respect des lois en vigueur
        </li>
        <li>
          Ne pas porter atteinte à la sécurité ou à l'intégrité du Site
        </li>
        <li>
          Ne pas utiliser le Site à des fins illicites, frauduleuses ou nuisibles
        </li>
        <li>
          Informer l'Éditeur de toute utilisation non autorisée ou violation de sécurité
        </li>
      </ul>

      <h2 className="article-title">Article 6 : Données personnelles</h2>
      <p className="paragraph">
        La collecte et le traitement des données personnelles des Utilisateurs sont régis par 
        notre <a href="/politique-confidentialite" className="link">
          Politique de Confidentialité
        </a> et conformes :
      </p>
      <ul className="list">
        <li>
          À la loi togolaise n°2019-014 du 20 septembre 2019 relative à la protection des données 
          à caractère personnel
        </li>
        <li>
          Au Règlement Général sur la Protection des Données (RGPD) pour les résidents de l'Union Européenne
        </li>
        <li>
          Aux principes de licéité, loyauté, transparence et minimisation des données
        </li>
      </ul>
      <p className="paragraph">
        L'Utilisateur dispose d'un droit d'accès, de rectification, d'effacement, de limitation, 
        d'opposition et de portabilité sur ses données personnelles.
      </p>

      <h2 className="article-title">Article 7 : Liens hypertextes</h2>
      <p className="paragraph">
        Le Site peut contenir des liens hypertextes vers d'autres sites internet. L'Éditeur ne 
        dispose d'aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
        contenu, leur accessibilité, leur fonctionnement ou leur politique de confidentialité.
      </p>
      <p className="paragraph">
        La création de liens hypertextes vers le Site est autorisée sous réserve de :
      </p>
      <ul className="list">
        <li>Ne pas utiliser de techniques de "framing" ou "inlining"</li>
        <li>Ne pas porter atteinte à l'image ou à la réputation de l'Éditeur</li>
        <li>Mentionner clairement la source avec un lien actif</li>
      </ul>

      <h2 className="article-title">Article 8 : Cookies</h2>
      <p className="paragraph">
        Le Site utilise des cookies pour améliorer l'expérience de navigation, analyser le trafic 
        et personnaliser le contenu. En poursuivant votre navigation, vous acceptez l'utilisation 
        des cookies conformément à notre politique en la matière.
      </p>
      <p className="paragraph">
        L'Utilisateur peut configurer son navigateur pour refuser les cookies, mais certaines 
        fonctionnalités du Site pourraient ne plus être accessibles.
      </p>

      <h2 className="article-title">Article 9 : Droit applicable et juridiction compétente</h2>
      <p className="paragraph">
        Les présentes CGU sont régies et interprétées conformément au droit togolais. En cas de 
        litige, et à défaut de solution amiable, les tribunaux compétents de Lomé seront seuls 
        compétents.
      </p>
      <p className="paragraph">
        Cette clause attributive de juridiction s'applique même en cas de pluralité de défendeurs 
        ou d'appel en garantie.
      </p>

      <h2 className="article-title">Article 10 : Modifications des CGU</h2>
      <p className="paragraph">
        L'Éditeur se réserve le droit de modifier à tout moment les présentes CGU. Les nouvelles 
        conditions seront applicables dès leur mise en ligne sur le Site.
      </p>
      <p className="paragraph">
        Il appartient à l'Utilisateur de consulter régulièrement les CGU. La poursuite de 
        l'utilisation du Site après modification vaut acceptation des nouvelles conditions.
      </p>

      <div className="footer-box">
        <p className="footer-main">
          <strong>Date d'entrée en vigueur :</strong> 18 janvier 2026
        </p>
        <p className="footer-sub">
          Dernière mise à jour : 18 janvier 2026 • Ces CGU sont disponibles en permanence sur le Site
        </p>
      </div>

      <style jsx>{`
        .cgu-container {
          padding: clamp(1rem, 3vw, 3rem);
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.7;
          color: #2c3e50;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* Espace pour le header fixe */
        .header-spacer {
          height: 70px; /* Hauteur du header sur desktop */
        }

        .cgu-title {
          color: #2c3e50;
          border-bottom: 3px solid #e74c3c;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          font-size: clamp(1.4rem, 4vw, 2.3rem);
          font-weight: 700;
          text-align: center;
          line-height: 1.3;
        }

        .disclaimer-box {
          background-color: #fff8e1;
          border: 1px solid #ffd54f;
          padding: clamp(1rem, 2vw, 1.2rem);
          border-radius: 6px;
          margin-bottom: 2rem;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          color: #5d4037;
        }

        .disclaimer-box p {
          margin: 0;
          font-weight: 500;
        }

        .article-title {
          color: #2c3e50;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 600;
          padding-left: 0.5rem;
          border-left: 4px solid #3498db;
          line-height: 1.4;
        }

        .paragraph {
          margin-bottom: 1.2rem;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          text-align: justify;
          hyphens: auto;
        }

        .list {
          padding-left: clamp(1.2rem, 3vw, 1.5rem);
          margin-bottom: 1.2rem;
        }

        .list li {
          margin-bottom: 0.7rem;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          line-height: 1.6;
        }

        .highlighted-box {
          background-color: #f8f9fa;
          border-left: 4px solid #2ecc71;
          padding: clamp(1rem, 2vw, 1.2rem);
          border-radius: 6px;
          margin: 1.5rem 0;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .highlighted-box p {
          margin: 0;
        }

        .warning-box {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          padding: clamp(1rem, 2vw, 1.2rem);
          border-radius: 6px;
          margin: 1.5rem 0;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .warning-box p {
          margin: 0;
        }

        .link {
          color: #3498db;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .link:hover {
          text-decoration: underline;
          color: #2980b9;
        }

        .footer-box {
          background-color: #2c3e50;
          color: white;
          padding: clamp(1.2rem, 2.5vw, 1.5rem);
          border-radius: 8px;
          margin-top: 3rem;
          text-align: center;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .footer-main {
          margin: 0;
          font-weight: 500;
        }

        .footer-sub {
          margin: 0.5rem 0 0 0;
          font-size: clamp(0.75rem, 1.3vw, 0.85rem);
          opacity: 0.9;
        }

        /* Tablettes */
        @media (max-width: 768px) {
          .header-spacer {
            height: 60px;
          }
          .cgu-container {
            padding: 1.2rem;
            border-radius: 0;
            box-shadow: none;
          }
          .cgu-title {
            font-size: 1.6rem;
            padding-bottom: 0.8rem;
            margin-bottom: 1.5rem;
          }
          .article-title {
            margin-top: 1.5rem;
            font-size: 1.25rem;
            padding-left: 0.4rem;
          }
          .paragraph {
            text-align: left;
            font-size: 0.95rem;
          }
          .list {
            padding-left: 1.3rem;
          }
          .list li {
            font-size: 0.95rem;
          }
          .disclaimer-box,
          .highlighted-box,
          .warning-box {
            padding: 1rem;
            font-size: 0.9rem;
          }
          .footer-box {
            padding: 1.2rem;
            margin-top: 2rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .header-spacer {
            height: 50px;
          }
          .cgu-container {
            padding: 1rem;
          }
          .cgu-title {
            font-size: 1.4rem;
            border-bottom-width: 2px;
          }
          .article-title {
            font-size: 1.15rem;
            margin-top: 1.2rem;
            padding-left: 0.3rem;
            border-left-width: 3px;
          }
          .paragraph {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          .list {
            padding-left: 1rem;
          }
          .list li {
            font-size: 0.9rem;
            margin-bottom: 0.6rem;
          }
          .disclaimer-box,
          .highlighted-box,
          .warning-box {
            padding: 0.9rem;
            font-size: 0.85rem;
            margin: 1rem 0;
          }
          .footer-box {
            padding: 1rem;
            font-size: 0.85rem;
          }
          .footer-main {
            font-size: 0.9rem;
          }
          .footer-sub {
            font-size: 0.75rem;
          }
        }

        /* Très petits écrans */
        @media (max-width: 360px) {
          .cgu-container {
            padding: 0.8rem;
          }
          .cgu-title {
            font-size: 1.3rem;
          }
          .article-title {
            font-size: 1.1rem;
          }
          .paragraph,
          .list li {
            font-size: 0.85rem;
          }
          .disclaimer-box,
          .highlighted-box,
          .warning-box,
          .footer-box {
            padding: 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ConditionsGeneralesUtilisation;