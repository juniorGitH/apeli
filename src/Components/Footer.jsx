/**
 * Footer component - Foyer Amélioré Apeli
 * Team Elephant - Innovation Crunch Time 2026
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = ({
    primaryColor = "#1a1a2e",
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = () => setIsLoggedIn(!!localStorage.getItem("currentUser"));
        checkAuth();
        window.addEventListener("storage", checkAuth);
        const interval = setInterval(checkAuth, 1000);
        return () => { window.removeEventListener("storage", checkAuth); clearInterval(interval); };
    }, []);

    return (
        <div
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                padding: "clamp(1.5rem, 4vw, 3rem) 1rem",
                backgroundColor: primaryColor,
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            {/* Navigation rapide */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "clamp(0.8rem, 2vw, 1.5rem)",
                    maxWidth: "100%",
                    padding: "0 0.5rem",
                }}
            >
                <Link to="/" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.9rem" }}>Accueil</Link>
                {isLoggedIn && <Link to="/chatbot" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.9rem" }}>Chatbot IA</Link>}
                <Link to="/foyer" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.9rem" }}>Foyer Apeli</Link>
                <Link to="/doctorante" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.9rem" }}>Doctorante</Link>
                <Link to="/equipe" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.9rem" }}>Équipe</Link>
            </div>

            {/* Liens légaux */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "clamp(0.6rem, 2vw, 1.5rem)",
                    maxWidth: "100%",
                    padding: "0 0.5rem",
                }}
            >
                <Link to="/mentions-legales" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>Mentions légales</Link>
                <Link to="/conditions-generales-utilisation" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>CGU</Link>
                <Link to="/politique-protection-donnees-personnelles" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>Données personnelles</Link>
                <Link to="/politique-cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>Cookies</Link>
                <Link to="/securite" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>Sécurité</Link>
            </div>

            {/* Branding */}
            <div
                style={{
                    textAlign: "center",
                    padding: "0 1rem",
                }}
            >
                <p
                    style={{
                        color: "#e67e22",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        marginBottom: "0.3rem",
                    }}
                >
                    Team Elephant — Équipe 19
                </p>
                <p
                    className="small"
                    style={{
                        marginTop: 0,
                        color: "rgba(255,255,255,0.5)",
                        textAlign: "center",
                        wordWrap: "break-word",
                        fontSize: "0.8rem",
                    }}
                >
                    Innovation Crunch Time 2026 • Université de Lomé
                </p>
                <p
                    className="small"
                    style={{
                        marginTop: "0.2rem",
                        color: "rgba(255,255,255,0.35)",
                        textAlign: "center",
                        fontSize: "0.75rem",
                    }}
                >
                    Optimisation du Foyer Amélioré Apeli
                </p>
            </div>
        </div>
    );
};

export default Footer;
