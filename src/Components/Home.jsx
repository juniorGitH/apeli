/**
 * Home component - Page d'accueil du Foyer Amélioré Apeli
 * Team Elephant - Innovation Crunch Time 2026
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const handleChatbotClick = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("currentUser");
    if (user) {
      navigate("/chatbot");
    } else {
      setShowAuthPrompt(true);
    }
  };

  return (
    <>
    {showAuthPrompt && (
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
        onClick={() => setShowAuthPrompt(false)}
      >
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            maxWidth: "400px",
            width: "90%",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#e67e22",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            !
          </div>
          <h3 style={{ fontSize: "1.2rem", color: "#2c3e50", marginBottom: "0.8rem" }}>
            Connexion requise
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.6", marginBottom: "1.5rem" }}>
            Pour acceder au Chatbot IA Cuisine, vous devez d'abord vous connecter ou creer un compte.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center" }}>
            <button
              onClick={() => setShowAuthPrompt(false)}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                background: "white",
                color: "#666",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Annuler
            </button>
            <button
              onClick={() => {
                setShowAuthPrompt(false);
                // Dispatch event to open auth modal in Header
                window.dispatchEvent(new CustomEvent("openAuthModal", { detail: { mode: "signup" } }));
              }}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                border: "none",
                background: "#e67e22",
                color: "white",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    )}
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        paddingTop: "70px",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "clamp(100px, 20vw, 200px)",
          height: "clamp(100px, 20vw, 200px)",
          borderRadius: "50%",
          background: "rgba(230, 126, 34, 0.1)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "clamp(80px, 15vw, 150px)",
          height: "clamp(80px, 15vw, 150px)",
          borderRadius: "50%",
          background: "rgba(243, 156, 18, 0.08)",
          filter: "blur(30px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "clamp(1rem, 4vw, 2rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Logo text */}
        <div style={{ 
          fontSize: "clamp(0.9rem, 2vw, 1.2rem)", 
          marginBottom: "0.8rem",
          color: "#e67e22",
          fontWeight: "700",
          letterSpacing: "0.2em",
        }}>APELI</div>

        <h1
          style={{
            fontSize: "clamp(1.6rem, 5vw, 3rem)",
            marginBottom: "0.5rem",
            color: "white",
            fontWeight: "700",
            lineHeight: "1.2",
          }}
        >
          Foyer Amélioré{" "}
          <span style={{ color: "#e67e22" }}>Apeli</span>
        </h1>

        <h2
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.8)",
            fontWeight: "400",
            marginBottom: "0.8rem",
            lineHeight: "1.4",
          }}
        >
          Cuisson Intelligente Assistée par IA
        </h2>

        <p
          style={{
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "0.3rem",
          }}
        >
          Team Elephant — Équipe 19 | Innovation Crunch Time 2026
        </p>
        <p
          style={{
            fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "1.5rem",
          }}
        >
          Université de Lomé
        </p>

        {/* Features icons */}
        <div
          style={{
            display: "flex",
            gap: "clamp(1rem, 3vw, 2rem)",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[
            { label: "IA Cuisine" },
            { label: "Capteurs IoT" },
            { label: "Ventilation MCP" },
            { label: "Interface Web" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  width: "clamp(45px, 8vw, 60px)",
                  height: "clamp(45px, 8vw, 60px)",
                  borderRadius: "50%",
                  background: "rgba(230, 126, 34, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
                  color: "#e67e22",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: "1.2",
                  padding: "0.2rem",
                }}
              >
                {item.label.split(" ")[0]}
              </div>
              <span
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "clamp(0.7rem, 1.3vw, 0.8rem)",
                  fontWeight: "500",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "clamp(0.6rem, 2vw, 1.2rem)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleChatbotClick}
            style={{
              display: "inline-block",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.2rem, 3vw, 2rem)",
              backgroundColor: "#e67e22",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "2px solid #e67e22",
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Accéder au Chatbot
          </button>

          <a
            href="#about"
            style={{
              display: "inline-block",
              padding: "clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.2rem, 3vw, 2rem)",
              backgroundColor: "transparent",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255,255,255,0.3)",
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
              whiteSpace: "nowrap",
            }}
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1rem, 3vh, 2rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          animation: "bounce 2s infinite",
        }}
      >
        <a href="#about" aria-label="Découvrir le projet">
          <img
            src={arrowSvg}
            alt="Défiler vers le bas"
            style={{
              height: "clamp(1.5rem, 4vw, 2.5rem)",
              width: "clamp(1.5rem, 4vw, 2.5rem)",
              opacity: "0.6",
              filter: "brightness(10)",
            }}
          />
        </a>
      </div>
    </section>
    </>
  );
};

export default Home;