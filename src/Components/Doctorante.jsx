/**
 * Doctorante component - Page dédiée à Mme AMOUZOU-ATCHOE Akoua Gabriela
 */
import React, { useState, useEffect } from "react";
import doctorantePhoto from "../images/doctorante.png";

const Doctorante = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "5.5rem 0.8rem 2rem" : "7rem 2rem 3rem",
        maxWidth: "1000px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      {/* En-tête */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "2rem" : "3rem",
        }}
      >
        <div
          style={{
            width: isMobile ? "100px" : "140px",
            height: isMobile ? "100px" : "140px",
            borderRadius: "50%",
            margin: "0 auto 1.5rem",
            overflow: "hidden",
            boxShadow: "0 8px 25px rgba(230, 126, 34, 0.3)",
          }}
        >
          <img
            src={doctorantePhoto}
            alt="Mme AMOUZOU-ATCHOE Akoua Gabriela"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "2.2rem",
            color: "#2c3e50",
            fontWeight: "700",
            marginBottom: "0.5rem",
            lineHeight: "1.3",
          }}
        >
          Mme AMOUZOU-ATCHOE Akoua Gabriela
        </h1>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#e67e22",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Doctorante — Chercheuse
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#7f8c8d",
          }}
        >
          Université de Lomé
        </p>
      </div>

      {/* Section Article de recherche */}
      <div
        style={{
          background: "white",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.2rem" : "2.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: isMobile ? "1.5rem" : "2rem",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Article de Recherche
        </h2>
        <div
          style={{
            background: "linear-gradient(135deg, #fef9e7, #fdebd0)",
            borderRadius: "12px",
            padding: isMobile ? "1.2rem" : "2rem",
            borderLeft: "4px solid #e67e22",
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#2c3e50",
              marginBottom: "1rem",
              fontWeight: "600",
              lineHeight: "1.4",
            }}
          >
            Étude et Optimisation du Foyer Amélioré Apeli : Vers une Cuisson Efficiente et Durable
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            Cet article présente une étude approfondie du foyer amélioré Apeli, un dispositif de cuisson conçu pour réduire la consommation de combustible et améliorer l'efficacité énergétique dans les ménages. La recherche analyse les performances thermiques du foyer, identifie les axes d'amélioration et propose des solutions innovantes pour optimiser son fonctionnement.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            Les résultats montrent que l'intégration de capteurs de température et de systèmes de contrôle automatisé de la ventilation peut significativement améliorer la régulation thermique, permettant une cuisson plus précise et économe en énergie.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {["Foyer amélioré", "Efficacité énergétique", "Cuisson durable", "IoT", "Capteurs thermiques"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(230, 126, 34, 0.15)",
                  color: "#e67e22",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem 1.5rem",
              background: "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(230,126,34,0.2)",
            }}
          >
            <h4 style={{ fontSize: "0.95rem", color: "#2c3e50", marginBottom: "0.5rem" }}>
              Références et liens
            </h4>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem", lineHeight: "1.8", color: "#555" }}>
              <li>
                AMOUZOU-ATCHOE, A. G. (2024). <em>Étude et Optimisation du Foyer Amélioré Apeli</em>. Université de Lomé.
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/profile/Akoua-Gabriela-Amouzou-Atchoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e67e22", textDecoration: "none" }}
                >
                  Profil ResearchGate — Mme AMOUZOU-ATCHOE
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e67e22", textDecoration: "none" }}
                >
                  Google Scholar — Publications associées
                </a>
              </li>
              <li>
                <a
                  href="https://www.univ-lome.tg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e67e22", textDecoration: "none" }}
                >
                  Université de Lomé — Site officiel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Le Foyer Apeli */}
      <div
        style={{
          background: "white",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.2rem" : "2.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: isMobile ? "1.5rem" : "2rem",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Le Foyer Amélioré Apeli
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
          }}
        >
          Le foyer amélioré Apeli est un dispositif de cuisson innovant développé dans le cadre des recherches de Mme AMOUZOU-ATCHOE. Conçu pour les besoins spécifiques des ménages togolais et ouest-africains, il vise à :
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1rem",
          }}
        >
          {[
            { title: "Efficacité thermique", desc: "Réduction de 40% de la consommation de combustible par rapport aux foyers traditionnels" },
            { title: "Impact environnemental", desc: "Réduction des émissions de CO₂ et de la déforestation liée au bois de chauffe" },
            { title: "Qualité de l'air", desc: "Diminution significative des fumées nocives grâce à une meilleure combustion" },
            { title: "Impact social", desc: "Amélioration des conditions de vie des ménages, particulièrement des femmes et enfants" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.2rem",
                background: "#f8f9fa",
                borderRadius: "10px",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #e67e22, #f39c12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  flexShrink: 0,
                }}
              >
                {item.title.charAt(0)}
              </div>
              <div>
                <h4 style={{ fontSize: "0.95rem", color: "#2c3e50", marginBottom: "0.3rem" }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Notre Contribution */}
      <div
        style={{
          background: "white",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.2rem" : "2.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: isMobile ? "1.5rem" : "2rem",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Notre Contribution — Innovation Crunch Time 2026
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
          }}
        >
          Dans le cadre de l'Innovation Crunch Time 2026 à l'Université de Lomé, l'équipe <strong>Elephant</strong> (Team 19) travaille durant 5 jours intensifs pour améliorer le foyer Apeli de Mme AMOUZOU-ATCHOE avec des technologies innovantes :
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { text: "Intégration d'un chatbot IA (RAG + LLM) spécialisé en cuisine pour guider les utilisateurs" },
            { text: "Capteurs de température et de poids connectés pour un suivi en temps réel" },
            { text: "Contrôle automatisé du ventilateur d'aération via un serveur MCP" },
            { text: "Interface web intuitive pour interagir avec le foyer à distance" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "0.8rem",
                background: i % 2 === 0 ? "#fef9e7" : "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#e67e22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#555", margin: 0, lineHeight: "1.5" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Citation */}
      <div
        style={{
          textAlign: "center",
          padding: isMobile ? "1.5rem 1rem" : "2rem",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          borderRadius: isMobile ? "12px" : "16px",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.15rem",
            fontStyle: "italic",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto 1rem",
          }}
        >
          "L'innovation au service de la cuisson durable — ensemble, nous pouvons transformer le quotidien de millions de foyers africains."
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            opacity: 0.7,
          }}
        >
          — Mme AMOUZOU-ATCHOE Akoua Gabriela
        </p>
      </div>
    </section>
  );
};

export default Doctorante;
