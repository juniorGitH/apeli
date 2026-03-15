/**
 * Portfolio component - Fonctionnalités du Foyer Amélioré Apeli
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const featureList = [
  {
    title: "Reconception du Foyer Apeli",
    description:
      "Optimisation de la structure du foyer pour améliorer les performances énergétiques : meilleure chambre de combustion, isolation renforcée, système d'évacuation des cendres repensé et support adaptable multi-tailles de marmites.",
    link: "/foyer",
    linkText: "Découvrir le foyer",
  },
  {
    title: "Pellets — Combustible Bio",
    description:
      "Remplacement du bois traditionnel par des pellets issus de résidus agricoles (coques, tiges, sciure). Combustion plus propre, plus efficace et plus écologique, avec un approvisionnement local et durable.",
    link: "/foyer",
    linkText: "En savoir plus",
  },
  {
    title: "Capteurs IoT + IA Cuisine",
    description:
      "Des capteurs de température et de poids transmettent les données en temps réel. Un chatbot IA (RAG + LLM) guide l'utilisateur étape par étape dans la cuisson, en adaptant les instructions aux conditions réelles du foyer.",
    link: "/chatbot",
    linkText: "Accéder au Chatbot",
  },
  {
    title: "Ventilation Intelligente (MCP)",
    description:
      "Un serveur MCP (Model Context Protocol) permet à l'IA de contrôler automatiquement le ventilateur d'aération du foyer pour réguler la température selon les besoins de la recette en cours.",
    link: "/recherche",
    linkText: "Voir la recherche",
  },
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="portfolio"
      style={{
        padding: "clamp(1.5rem, 4vw, 3rem) 1rem",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: isMobile ? "1.4rem" : "1.8rem",
          marginBottom: isMobile ? "1.2rem" : "2rem",
          color: "#2c3e50",
          paddingTop: 0,
        }}
      >
        Fonctionnalités
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "1rem" : "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      >
        {featureList.map((feature) => (
          <div
            key={feature.title}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "12px",
              padding: isMobile ? "1.2rem" : "1.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              minWidth: 0,
              wordBreak: "break-word",
              borderLeft: "4px solid #e67e22",
            }}
          >
            <div>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "1rem",
                  fontSize: isMobile ? "1rem" : "1.15rem",
                  lineHeight: "1.3",
                  fontWeight: "600",
                  wordBreak: "break-word",
                  color: "#2c3e50",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#555",
                  margin: 0,
                  wordBreak: "break-word",
                }}
              >
                {feature.description}
              </p>
            </div>

            {feature.link ? (
              <Link
                to={feature.link}
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  color: "#e67e22",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                {feature.linkText}
              </Link>
            ) : (
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  color: "#999",
                  fontWeight: "500",
                }}
              >
                {feature.linkText}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;