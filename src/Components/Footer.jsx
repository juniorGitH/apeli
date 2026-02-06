/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = ({
    devDotTo = "",
    email = "Emmanuel.Amela@studentambassadors.com",
    gitHub = "https://github.com/juniorGitH",
    instagram = "https://www.instagram.com/amela_emmanuel/",
    linkedIn = "linkedin.com/in/emmanuel-amela/",
    name = "Emmanuel Amela",
    primaryColor = "#000", // tu peux ajuster selon ton thème
    twitter = "https://x.com/AmelaJunior",
    youTube = "https://www.youtube.com/@codeAiMastery",
}) => {
    return (
        <div
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                padding: "3rem 1rem",
                backgroundColor: primaryColor,
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    maxWidth: "100%",
                    padding: "0 1rem",
                }}
            >
                {email && (
                    <a href={`mailto:${email}`} style={{ margin: "0.5rem" }}>
                        <img src={envelopeIcon} alt="email" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {devDotTo && (
                    <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={devDotToIcon} alt="Dev.to" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {gitHub && (
                    <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={gitHubIcon} alt="GitHub" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {instagram && (
                    <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={instagramIcon} alt="Instagram" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {linkedIn && (
                    <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {twitter && (
                    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={twitterIcon} alt="Twitter" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
                {youTube && (
                    <a href={`https://www.youtube.com/${youTube}`} target="_blank" rel="noopener noreferrer" style={{ margin: "0.5rem" }}>
                        <img src={youTubeIcon} alt="YouTube" className="socialIcon" style={{ maxWidth: "100%", height: "auto" }} />
                    </a>
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    maxWidth: "100%",
                    padding: "0 1rem",
                    marginTop: "1rem",
                }}
            >
                <a href="/mentions-legales" style={{ color: "white", textDecoration: "none" }}>Mentions légales</a>
                <a href="/conditions-generales-utilisation" style={{ color: "white", textDecoration: "none" }}>Conditions générales d'utilisation</a>
                <a href="/politique-protection-donnees-personnelles" style={{ color: "white", textDecoration: "none" }}>Politique de protection des données personnelles</a>
                <a href="/politique-cookies" style={{ color: "white", textDecoration: "none" }}>Cookies</a>
                <a href="/declaration-accessibilite" style={{ color: "white", textDecoration: "none" }}>Déclaration d'accessibilité</a>
                <a href="/securite" style={{ color: "white", textDecoration: "none" }}>Sécurité</a>
            </div>
            <p
                className="small"
                style={{
                    marginTop: 0,
                    color: "white",
                    textAlign: "center",
                    padding: "0 1rem",
                    wordWrap: "break-word",
                }}
            >
                 {name}
            </p>
        </div>
    );
};

export default Footer;
