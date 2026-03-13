/**
 * Team component - Page dédiée à l'équipe Elephant (Team 19)
 * Innovation Crunch Time 2026 - Université de Lomé
 */
import React, { useState, useEffect } from "react";
import amelaPhoto from "../images/jr2.jpg";
import hyacinthaPhoto from "../images/Hycintas.jpg";

const teamMembers = [
  {
    name: "Emmanuel AMELA",
    role: "Chef d'équipe",
    description: "Coordination du projet et développement de la plateforme web",
    initials: "EA",
    image: amelaPhoto,
  },
  {
    name: "Lang-Hèziè Paltiël AMEDRO",
    role: "Analyste",
    description: "Analyse des besoins et spécifications fonctionnelles du projet",
    initials: "LA",
  },
  {
    name: "Sully BABELESSA",
    role: "Analyste",
    description: "Analyse des données et optimisation des performances du foyer",
    initials: "SB",
  },
  {
    name: "Kossi Shelter DABONI",
    role: "Designer",
    description: "Design de l'interface utilisateur et expérience utilisateur",
    initials: "KD",
  },
  {
    name: "Hyacinthe d'ALMEIDA",
    role: "Analyste",
    description: "Analyse technique et recherche sur les technologies IoT",
    initials: "Hd",
    image: hyacinthaPhoto,
  },
  {
    name: "Mathilde HOUNGBEDJI",
    role: "Développeur",
    description: "Développement du chatbot IA et intégration des capteurs",
    initials: "MH",
  },
  {
    name: "Josué SOLAGNI",
    role: "Gardien du temps",
    description: "Gestion du planning et suivi des délais du projet",
    initials: "JS",
  },
  {
    name: "Abalakata TCHASSEMA",
    role: "Communication",
    description: "Communication du projet et relations avec les parties prenantes",
    initials: "AT",
  },
  {
    name: "Kisito AGBEHOM",
    role: "Designer 3D",
    description: "Modélisation 3D et conception visuelle du projet",
    initials: "KA",
  },
  {
    name: "Tagnambime Julie BLOACK",
    role: "Communication",
    description: "Stratégie de communication et promotion du projet",
    initials: "JB",
  },
];

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
      setIsTablet(window.innerWidth >= 576 && window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "5.5rem 0.8rem 2rem" : isTablet ? "6rem 1.5rem 3rem" : "7rem 2rem 3rem",
        maxWidth: "1100px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#e67e22",
            letterSpacing: "0.3rem",
            marginBottom: "1rem",
          }}
        >
          ELEPHANT
        </div>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "2.5rem",
            color: "#2c3e50",
            fontWeight: "700",
            marginBottom: "0.5rem",
            lineHeight: "1.2",
          }}
        >
          Team Elephant
        </h1>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#e67e22",
            fontWeight: "600",
            marginBottom: "0.3rem",
          }}
        >
          Équipe 19
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "#7f8c8d",
            maxWidth: "600px",
            margin: "0.5rem auto 0",
            lineHeight: "1.6",
          }}
        >
          Innovation Crunch Time 2026 — Université de Lomé
        </p>
      </div>

      {/* Mission */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.2rem" : isTablet ? "2rem" : "2.5rem",
          color: "white",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            marginBottom: "1rem",
            fontWeight: "600",
          }}
        >
          Notre Mission
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            maxWidth: "750px",
            margin: "0 auto",
            opacity: 0.9,
          }}
        >
          Optimiser le foyer amélioré Apeli en intégrant des technologies de pointe : Intelligence Artificielle, Internet des Objets (IoT) et automatisation. Notre objectif est de rendre la cuisson plus précise, plus efficiente et plus accessible grâce à un assistant cuisine intelligent connecté directement au foyer.
        </p>
      </div>

      {/* Membres de l'équipe */}
      <h2
        style={{
          fontSize: isMobile ? "1.3rem" : "1.8rem",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Membres de l'Équipe
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? "1rem" : "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: isMobile ? "1.5rem" : "2rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                width: isMobile ? "60px" : "70px",
                height: isMobile ? "60px" : "70px",
                borderRadius: "50%",
                background: member.image ? "none" : `linear-gradient(135deg, ${
                  ["#e67e22, #f39c12", "#3498db, #2980b9", "#2ecc71, #27ae60", "#9b59b6, #8e44ad", "#e74c3c, #c0392b", "#1abc9c, #16a085", "#34495e, #2c3e50", "#d35400, #e67e22", "#8e44ad, #9b59b6", "#2980b9, #3498db"][index]
                })`,
                margin: "0 auto 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                overflow: "hidden",
              }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span style={{ color: "white", fontWeight: "700", fontSize: "1rem" }}>
                  {member.initials}
                </span>
              )}
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                color: "#2c3e50",
                marginBottom: "0.3rem",
                fontWeight: "600",
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#e67e22",
                fontWeight: "500",
                marginBottom: "0.8rem",
              }}
            >
              {member.role}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* Le Projet */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: isMobile ? "1.5rem" : "2.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Notre Projet : Optimisation du Foyer Apeli
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1rem" : "1.5rem",
          }}
        >
          {[
            {
              title: "Chatbot IA Cuisine",
              desc: "Un assistant intelligent basé sur un LLM avec RAG spécialisé en cuisine. Il guide les utilisateurs étape par étape dans la préparation de leurs plats.",
            },
            {
              title: "Capteurs IoT",
              desc: "Des capteurs de température et de poids connectés au foyer transmettent les données en temps réel à l'interface web.",
            },
            {
              title: "Serveur MCP",
              desc: "Un serveur MCP (Model Context Protocol) permet à l'IA de contrôler le ventilateur d'aération pour réguler la température du foyer.",
            },
            {
              title: "Interface Web",
              desc: "Une plateforme web responsive permettant aux utilisateurs d'interagir avec le foyer et l'IA depuis n'importe quel appareil.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "1.5rem",
                background: "#f8f9fa",
                borderRadius: "12px",
                borderLeft: "4px solid #e67e22",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <h3 style={{ fontSize: "1rem", color: "#2c3e50", fontWeight: "600", margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.6", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline / 5 jours */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: isMobile ? "1.5rem" : "2.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          5 Jours d'Innovation
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "0.8rem" : "1rem" }}>
          {[
            { day: "Jour 1", title: "Idéation & Conception", desc: "Brainstorming, définition du concept et planification technique" },
            { day: "Jour 2", title: "Prototype Hardware", desc: "Assemblage des capteurs IoT et configuration du foyer Apeli" },
            { day: "Jour 3", title: "Développement Software", desc: "Création de la plateforme web et intégration du chatbot IA" },
            { day: "Jour 4", title: "Intégration & Tests", desc: "Connexion MCP, tests de cuisson réelle et ajustements" },
            { day: "Jour 5", title: "Présentation Finale", desc: "Démonstration live du foyer intelligent devant le jury" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "1rem",
                background: i % 2 === 0 ? "#fef9e7" : "#f8f9fa",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  minWidth: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  background: "#e67e22",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                {item.day}
              </div>
              <div>
                <h4 style={{ fontSize: "0.95rem", color: "#2c3e50", margin: "0 0 0.2rem" }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#666", margin: 0, lineHeight: "1.4" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer section */}
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #e67e22, #f39c12)",
          borderRadius: "16px",
          color: "white",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            marginBottom: "0.8rem",
          }}
        >
          Team Elephant — Équipe 19
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            opacity: 0.9,
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Innovation Crunch Time 2026 • Université de Lomé
          <br />
          Optimisation du Foyer Amélioré Apeli
        </p>
      </div>
    </section>
  );
};

export default Team;
