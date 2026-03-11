/**
 * FoyerApeli component - Page dédiée au Foyer Amélioré Apeli
 * Présentation, composants, évolution et problématique
 */
import React, { useState, useEffect } from "react";

const foyerParts = [
  {
    name: "Chambre de combustion",
    description: "Zone principale de combustion des pellets. Conçue pour optimiser la circulation d'air et maintenir une température élevée pour une combustion complète.",
    placeholder: "CC",
  },
  {
    name: "Grille de support",
    description: "Support perforé qui maintient le combustible en place tout en permettant la circulation d'air par le bas et l'évacuation des cendres.",
    placeholder: "GS",
  },
  {
    name: "Cendrier",
    description: "Compartiment amovible situé sous la grille pour collecter et faciliter l'évacuation des cendres produites par la combustion.",
    placeholder: "CE",
  },
  {
    name: "Support de marmite",
    description: "Structure adaptable conçue pour accueillir différentes tailles de marmites, assurant un transfert thermique optimal entre la flamme et le récipient.",
    placeholder: "SM",
  },
  {
    name: "Paroi isolante",
    description: "Revêtement en matériau réfractaire qui retient la chaleur à l'intérieur du foyer, réduisant les pertes énergétiques et protégeant l'utilisateur.",
    placeholder: "PI",
  },
  {
    name: "Entrée d'air (ventilation)",
    description: "Ouverture réglable permettant de contrôler le flux d'air entrant dans la chambre de combustion pour moduler l'intensité de la flamme.",
    placeholder: "EA",
  },
];

const evolution = [
  {
    phase: "Foyer traditionnel",
    period: "Avant Apeli",
    description: "Foyer à trois pierres ou foyer ouvert. Rendement énergétique très faible (environ 10-15%), forte émission de fumées nocives, consommation excessive de bois.",
    improvements: ["Aucune isolation", "Pas de contrôle d'air", "Pertes thermiques importantes"],
  },
  {
    phase: "Foyer Apeli v1",
    period: "Conception initiale",
    description: "Premier modèle du foyer amélioré avec chambre de combustion fermée. Introduction de la paroi isolante et du support de marmite standardisé.",
    improvements: ["Chambre de combustion fermée", "Paroi isolante ajoutée", "Rendement amélioré (30-40%)"],
  },
  {
    phase: "Foyer Apeli v2",
    period: "Améliorations",
    description: "Ajout du cendrier amovible et de la grille de support. Optimisation de la circulation d'air pour une meilleure combustion.",
    improvements: ["Cendrier amovible", "Grille de support", "Meilleure circulation d'air"],
  },
  {
    phase: "Foyer Apeli v3 (Crunch Time)",
    period: "Innovation 2026",
    description: "Reconception complète avec utilisation de pellets, capteurs IoT (température, poids), ventilateur d'aération contrôlé par IA, et adaptation multi-tailles de marmites.",
    improvements: ["Pellets (résidus agricoles)", "Capteurs IoT intégrés", "IA + MCP Server", "Multi-tailles de marmites", "Ventilation intelligente"],
  },
];

const FoyerApeli = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
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
      <div style={{ textAlign: "center", marginBottom: isMobile ? "2rem" : "3rem" }}>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          Le Foyer Ameliore Apeli
        </h1>
        <p
          style={{
            fontSize: isMobile ? "0.9rem" : "1rem",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Decouvrez le foyer ameliore Apeli, ses composants, son evolution et la problematique
          que notre equipe cherche a resoudre durant l'Innovation Crunch Time 2026.
        </p>
      </div>

      {/* Problématique */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.5rem" : "2.5rem",
          marginBottom: isMobile ? "2rem" : "3rem",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.1rem" : "1.4rem",
            marginBottom: "1rem",
            fontWeight: "600",
            color: "#e67e22",
          }}
        >
          Problematique
        </h2>
        <p
          style={{
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.9)",
            textAlign: "justify",
          }}
        >
          Bien que le foyer Apeli constitue une solution prometteuse pour ameliorer l'efficacite
          de la cuisson domestique, certaines limites liees a l'alimentation en combustible,
          a l'evacuation des cendres et a l'adaptation aux differentes tailles de marmites
          persistent.
        </p>
        <p
          style={{
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.9)",
            marginTop: "1rem",
            textAlign: "justify",
            fontStyle: "italic",
          }}
        >
          Comment optimiser le foyer Apeli (reconception) avec l'utilisation de pellets
          (combustibles issus de residus agricoles) pour ameliorer les performances energetiques
          ainsi que ses conditions d'utilisation (differentes tailles de menage et differents
          environnements de cuisine) ?
        </p>
        <div
          style={{
            marginTop: "1.2rem",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          -- Problematique posee par Mme AMOUZOU-ATCHOE Akoua Gabriela, Doctorante
        </div>
      </div>

      {/* Composants du foyer */}
      <div style={{ marginBottom: isMobile ? "2rem" : "3rem" }}>
        <h2
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Composants du Foyer Apeli
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "1rem" : "1.5rem",
          }}
        >
          {foyerParts.map((part, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: isMobile ? "1.2rem" : "1.5rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Placeholder photo */}
              <div
                style={{
                  width: "100%",
                  height: isMobile ? "120px" : "140px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #f5f5f5, #e8e8e8)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  border: "2px dashed #ddd",
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? "1.5rem" : "1.8rem",
                    fontWeight: "700",
                    color: "#e67e22",
                  }}
                >
                  {part.placeholder}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#999",
                    marginTop: "0.3rem",
                  }}
                >
                  Photo a venir
                </span>
              </div>
              <h3
                style={{
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  color: "#2c3e50",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                {part.name}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Évolution du foyer */}
      <div style={{ marginBottom: isMobile ? "2rem" : "3rem" }}>
        <h2
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Evolution du Foyer Apeli
        </h2>
        <div style={{ position: "relative" }}>
          {/* Ligne verticale de timeline */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "0",
                bottom: "0",
                width: "3px",
                background: "linear-gradient(to bottom, #e67e22, #f39c12, #2ecc71)",
                borderRadius: "2px",
              }}
            />
          )}

          {evolution.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: isMobile ? "0" : "2rem",
                marginBottom: "1.5rem",
                position: "relative",
              }}
            >
              {/* Point sur la timeline */}
              {!isMobile && (
                <div
                  style={{
                    width: "42px",
                    minWidth: "42px",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1.5rem",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: index === evolution.length - 1 ? "#e67e22" : "#bdc3c7",
                      border: index === evolution.length - 1 ? "3px solid #f39c12" : "3px solid #ecf0f1",
                      boxShadow: index === evolution.length - 1 ? "0 0 10px rgba(230,126,34,0.4)" : "none",
                    }}
                  />
                </div>
              )}

              {/* Carte */}
              <div
                style={{
                  flex: 1,
                  background: index === evolution.length - 1
                    ? "linear-gradient(135deg, #fef9f3, #fdf2e9)"
                    : "white",
                  borderRadius: "12px",
                  padding: isMobile ? "1.2rem" : "1.5rem",
                  boxShadow: index === evolution.length - 1
                    ? "0 4px 20px rgba(230,126,34,0.15)"
                    : "0 4px 15px rgba(0,0,0,0.08)",
                  border: index === evolution.length - 1
                    ? "2px solid #e67e22"
                    : "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      color: index === evolution.length - 1 ? "#e67e22" : "#2c3e50",
                      fontWeight: "600",
                    }}
                  >
                    {step.phase}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "white",
                      background: index === evolution.length - 1 ? "#e67e22" : "#95a5a6",
                      padding: "0.2rem 0.8rem",
                      borderRadius: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {step.period}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: isMobile ? "0.8rem" : "0.88rem",
                    color: "#555",
                    lineHeight: "1.7",
                    marginBottom: "0.8rem",
                  }}
                >
                  {step.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {step.improvements.map((imp, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.72rem",
                        background: index === evolution.length - 1
                          ? "rgba(230,126,34,0.1)"
                          : "#f8f9fa",
                        color: index === evolution.length - 1 ? "#e67e22" : "#666",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "6px",
                        fontWeight: "500",
                      }}
                    >
                      {imp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objectifs de l'optimisation */}
      <div
        style={{
          background: "linear-gradient(135deg, #fef9f3, #fdf2e9)",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.5rem" : "2rem",
          border: "1px solid rgba(230,126,34,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            color: "#2c3e50",
            marginBottom: "1.2rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Objectifs de l'optimisation
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1rem",
          }}
        >
          {[
            {
              title: "Alimentation en pellets",
              desc: "Remplacer le bois par des pellets issus de residus agricoles pour une combustion plus propre et efficace.",
            },
            {
              title: "Evacuation des cendres",
              desc: "Systeme de cendrier amovible optimise pour un nettoyage facile et rapide entre les cuissons.",
            },
            {
              title: "Adaptation multi-marmites",
              desc: "Support ajustable pour accueillir differentes tailles de marmites selon la taille du menage.",
            },
            {
              title: "Controle intelligent",
              desc: "Capteurs IoT et ventilation pilotee par IA via MCP Server pour un controle precis de la temperature.",
            },
          ].map((obj, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "10px",
                padding: isMobile ? "1rem" : "1.2rem",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  marginBottom: "0.6rem",
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
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontSize: isMobile ? "0.9rem" : "0.95rem",
                    color: "#2c3e50",
                    fontWeight: "600",
                  }}
                >
                  {obj.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#666",
                  lineHeight: "1.6",
                  paddingLeft: "2.8rem",
                }}
              >
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoyerApeli;
