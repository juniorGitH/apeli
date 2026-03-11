/**
 * About component - À propos du projet Foyer Amélioré Apeli
 */
import React from "react";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      style={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
        position: "relative",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "900px",
          padding: "clamp(1rem, 4vw, 2rem)",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          boxSizing: "border-box",
          wordBreak: "break-word",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: "#2c3e50", paddingTop: 0 }}>
          À propos du Projet
        </h2>

        <p
          className="large"
          style={{
            fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
            lineHeight: "1.7",
            wordBreak: "break-word",
            color: "#555",
          }}
        >
          Le projet <strong>Foyer Amélioré Apeli</strong> vise à optimiser un dispositif de cuisson innovant développé par la doctorante <strong>Mme AMOUZOU-ATCHOE Akoua Gabriela</strong> de l'Université de Lomé. Notre équipe <strong>Elephant</strong> (Team 19) intègre l'Intelligence Artificielle, l'Internet des Objets et l'automatisation pour rendre la cuisson plus précise, efficiente et accessible.
        </p>

        <hr style={{ margin: "2rem auto", width: "80%" }} />

        <div
          style={{
            textAlign: "left",
            margin: "2rem auto",
            maxWidth: "800px",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#e67e22", marginBottom: "1rem", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Technologies & Innovations
          </h3>
          <ul
            style={{
              columns: "auto 2",
              columnGap: "2rem",
              fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
              padding: "0 0.5rem",
              listStylePosition: "inside",
              boxSizing: "border-box",
            }}
          >
            {[
              "Chatbot IA cuisine (RAG + LLM)",
              "Capteurs de température connectés",
              "Capteurs de poids de marmite",
              "Serveur MCP pour ventilateur",
              "Interface web responsive",
              "Contrôle automatique d'aération",
              "Suivi en temps réel des données",
              "Recettes guidées par l'IA",
            ].map((skill) => (
              <li
                key={skill}
                style={{
                  marginBottom: "0.75rem",
                  breakInside: "avoid",
                  wordBreak: "break-word",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <hr style={{ margin: "2rem auto", width: "80%" }} />

        <p
          style={{
            padding: "1rem",
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.7",
            wordBreak: "break-word",
            color: "#555",
          }}
        >
          Grâce à un dispositif connecté installé sur le foyer Apeli, nous captons en temps réel la température et le poids de la marmite. Notre IA, via un serveur MCP, contrôle le ventilateur d'aération pour maintenir la température idéale de cuisson — guidant l'utilisateur pas à pas dans la préparation de ses plats.
        </p>
      </div>
    </section>
  );
};

export default About;