import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

const HomePage = ({ name, title }) => {
  const location = useLocation();

  useEffect(() => {
    // Vérifier si l'état de la location contient une section à laquelle faire défiler
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Attendre un peu que la page soit rendue
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Home name={name} title={title} />
      <About />
      <Portfolio />
    </>
  );
};

export default HomePage;