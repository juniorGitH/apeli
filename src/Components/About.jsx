/**
 * About component
 */
import React from "react";
import image from "../images/fondo-tecnologia.jpg";

const imageAltText = "purple and blue abstract technology background";

const description =
  "I am a Software Engineer and Microsoft Student Ambassador, currently pursuing a Master of Science (MSc) in Computer Systems through a double-degree program between the École Polytechnique de Lomé (EPL) and the Université de Technologie de Belfort-Montbéliard (UTBM). My academic focus is on advanced computing, intelligent systems, and scientific computing, with a strong interest in research-driven technological innovation.";

const skillsList = [
  "Software engineering and system design",
  "Backend and RESTful API development",
  "Artificial intelligence and machine learning fundamentals",
  "Scientific computing and data-driven modeling",
  "Cloud computing and containerized deployment",
  "CI/CD pipelines and DevOps practices",
  "Database design and data management",
  "Research-oriented problem solving and experimentation",
];

const detailOrQuote =
  "I am driven by the application of computing to scientific and societal challenges. Through research, engineering, and community engagement, I strive to contribute to the development of intelligent, reliable, and accessible systems that can create meaningful impact in Africa and beyond.";

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
      }}
    >
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "1000px",
          padding: "clamp(1rem, 4vw, 2rem)",
          margin: "3rem auto",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          boxSizing: "border-box",
          wordBreak: "break-word",
        }}
      >
        <h2 style={{ fontSize: "calc(1.5rem + 1vw)" }}>About Myself</h2>

        <p
          className="large"
          style={{
            fontSize: "calc(0.9rem + 0.4vw)",
            lineHeight: "1.7",
            wordBreak: "break-word",
          }}
        >
          {description}
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
          <ul
            style={{
              columns: "auto 2",
              columnGap: "2rem",
              fontSize: "calc(0.85rem + 0.3vw)",
              padding: "0 0.5rem",
              listStylePosition: "inside",
              boxSizing: "border-box",
            }}
          >
            {skillsList.map((skill) => (
              <li
                key={skill}
                style={{
                  marginBottom: "0.75rem",
                  breakInside: "avoid", // évite qu'un item soit coupé entre 2 colonnes
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
            fontSize: "calc(0.85rem + 0.3vw)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.7",
            wordBreak: "break-word",
          }}
        >
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;