/**
 * About component
 *
 * Space for you to describe more about yourself.
 */
import React from "react";

/**
 * About background image
 *
 * Upload the image of your choice into the "images" directory
 * and import it here.
 */
import image from "../images/fondo-tecnologia.jpg";

const imageAltText = "purple and blue abstract technology background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
    "I am a Software Engineer and Microsoft Student Ambassador, currently pursuing a Master of Science (MSc) in Computer Systems through a double-degree program between the École Polytechnique de Lomé (EPL) and the Université de Technologie de Belfort-Montbéliard (UTBM). My academic focus is on advanced computing, intelligent systems, and scientific computing, with a strong interest in research-driven technological innovation.";

/**
 * List of skills, technologies, and areas of expertise.
 */
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

/**
 * Additional information or personal statement.
 */
const detailOrQuote =
    "I am driven by the application of computing to scientific and societal challenges. Through research, engineering, and community engagement, I strive to contribute to the development of intelligent, reliable, and accessible systems that can create meaningful impact in Africa and beyond.";

const About = () => {
    return (
        <section className="padding" id="about">
            <img
                className="background"
                src={image}
                alt={imageAltText}
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    backgroundColor: "white",
                    width: "90%",
                    maxWidth: "1000px",
                    padding: "2rem",
                    margin: "3rem auto",
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                }}
            >
                <h2 style={{ fontSize: "calc(1.5rem + 1vw)" }}> 
                    About Myself
                </h2>

                <p
                    className="large"
                    style={{ fontSize: "calc(1rem + 0.5vw)" }}
                >
                    {description}
                </p>

                <hr style={{ margin: "2rem auto", width: "80%" }} />

                <div
                    style={{
                        textAlign: "left",
                        margin: "2rem auto",
                        maxWidth: "800px",
                    }}
                >
                    <ul
                        style={{
                            columns: "auto 2",
                            columnGap: "3rem",
                            fontSize: "calc(0.9rem + 0.4vw)",
                            padding: "0 1rem",
                            listStylePosition: "inside",
                        }}
                    >
                        {skillsList.map((skill) => (
                            <li
                                key={skill}
                                style={{ marginBottom: "0.75rem" }}
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
                        fontSize: "calc(0.9rem + 0.4vw)",
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    {detailOrQuote}
                </p>
            </div>
        </section>
    );
};

export default About;
