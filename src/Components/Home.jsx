/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your academic and professional focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 */
import image from "../images/jr2.jpg";

const imageAltText =
  "Graduate software engineer in a professional setting, representing research, innovation, and advanced computing";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "clamp(50vh, 65vh, 70vh)",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={imageAltText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "brightness(0.85)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9) 70%)",
            zIndex: 2,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(1rem, 5vw, 3rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box", // ← corrige le débordement horizontal sur mobile
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            borderRadius: "clamp(12px, 2vw, 20px)",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            maxWidth: "800px",
            width: "100%",
            marginTop: "clamp(30vh, 40vh, 45vh)",
            boxSizing: "border-box", // ← corrige le débordement horizontal sur mobile
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
              marginBottom: "clamp(0.8rem, 2vw, 1.5rem)",
              color: "#2c3e50",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            {name}
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
              color: "#34495e",
              fontWeight: "400",
              marginBottom: "clamp(1rem, 2vw, 1.8rem)",
              lineHeight: "1.3",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "#5d6d7e",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto clamp(1.5rem, 3vw, 2rem)",
            }}
          >
            Welcome to my academic and professional portfolio, where I share my
            work, research interests, and contributions in computer systems and
            intelligent technologies.
          </p>

          <div
            style={{
              display: "flex",
              gap: "clamp(0.8rem, 2vw, 1.5rem)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#about"
              style={{
                display: "inline-block",
                padding:
                  "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.2rem, 2.5vw, 1.8rem)",
                backgroundColor: "#3498db",
                color: "white",
                textDecoration: "none",
                borderRadius: "clamp(25px, 3vw, 30px)",
                fontWeight: "500",
                transition: "all 0.3s ease",
                border: "2px solid #3498db",
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                whiteSpace: "nowrap",
              }}
            >
              Explore my work
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding:
                  "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.2rem, 2.5vw, 1.8rem)",
                backgroundColor: "transparent",
                color: "#3498db",
                textDecoration: "none",
                borderRadius: "clamp(25px, 3vw, 30px)",
                fontWeight: "500",
                transition: "all 0.3s ease",
                border: "2px solid #3498db",
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                whiteSpace: "nowrap",
              }}
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 4vh, 2.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          animation: "bounce 2s infinite",
        }}
      >
        <a href="#about" aria-label="Go to next section">
          <img
            src={arrowSvg}
            alt="Scroll down"
            style={{
              height: "clamp(2rem, 5vw, 3rem)",
              width: "clamp(2rem, 5vw, 3rem)",
              opacity: "0.8",
            }}
          />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;