/**
 * Application component - Foyer Amélioré Apeli
 * Team Elephant - Innovation Crunch Time 2026 - Université de Lomé
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Chatbot from "./Components/Chatbot";
import Doctorante from "./Components/Doctorante";
import Team from "./Components/Team";
import FoyerApeli from "./Components/FoyerApeli";
import Admin from "./Components/Admin";
import Dashboard from "./Components/Dashboard";
import ClientProfile from "./Components/ClientProfile";
import MentionsLegales from "./Components/MentionsLegales";
import ConditionsGeneralesUtilisation from "./Components/ConditionsGeneralesUtilisation";
import PolitiqueProtectionDonneesPersonnelles from "./Components/PolitiqueProtectionDonneesPersonnelles";
import PolitiqueCookies from "./Components/PolitiqueCookies";
import DeclarationAccessibilite from "./Components/DeclarationAccessibilite";
import Securite from "./Components/Securite";

import "./styles.css";

// Initialisation des données
import { initializeData } from "./utils/initializeData";
initializeData();

const primaryColor = "#1a1a2e";
const secondaryColor = "#e67e22";

// Layout principal avec gestion du défilement
const Layout = ({ children, noFooter }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        scrollToSection(sectionId);
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId, attempt = 0) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.offsetHeight ?? 70;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollBy({ top: -headerHeight, behavior: "smooth" });
      }, 50);
      return;
    }
    if (attempt < 20) {
      setTimeout(() => scrollToSection(sectionId, attempt + 1), 100);
    }
  };

  return (
    <div id="main">
      <Header />
      {children}
      {!noFooter && (
        <Footer primaryColor={primaryColor} secondaryColor={secondaryColor} />
      )}
    </div>
  );
};

// Page d'accueil
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
    </>
  );
};

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        
        {/* Chatbot IA Cuisine - sans footer car interface pleine page */}
        <Route path="/chatbot" element={
          <Layout noFooter>
            <Chatbot />
          </Layout>
        } />

        {/* Page Doctorante */}
        <Route path="/doctorante" element={
          <Layout>
            <Doctorante />
          </Layout>
        } />

        {/* Page Équipe */}
        <Route path="/equipe" element={
          <Layout>
            <Team />
          </Layout>
        } />

        {/* Page Foyer Apeli */}
        <Route path="/foyer" element={
          <Layout>
            <FoyerApeli />
          </Layout>
        } />
        
        {/* Administration */}
        <Route path="/admin" element={
          <Layout>
            <Admin />
          </Layout>
        } />
        
        {/* Tableau de bord */}
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        
        {/* Profil */}
        <Route path="/profile" element={
          <Layout>
            <ClientProfile />
          </Layout>
        } />

        {/* Mentions Légales */}
        <Route path="/mentions-legales" element={
          <Layout>
            <MentionsLegales />
          </Layout>
        } />

        {/* Conditions Générales d'Utilisation */}
        <Route path="/conditions-generales-utilisation" element={
          <Layout>
            <ConditionsGeneralesUtilisation />
          </Layout>
        } />

        {/* Politique de Protection des Données Personnelles */}
        <Route path="/politique-protection-donnees-personnelles" element={
          <Layout>
            <PolitiqueProtectionDonneesPersonnelles />
          </Layout>
        } />

        {/* Politique de Cookies */}
        <Route path="/politique-cookies" element={
          <Layout>
            <PolitiqueCookies />
          </Layout>
        } />

        {/* Déclaration d'Accessibilité */}
        <Route path="/declaration-accessibilite" element={
          <Layout>
            <DeclarationAccessibilite />
          </Layout>
        } />

        {/* Sécurité */}
        <Route path="/securite" element={
          <Layout>
            <Securite />
          </Layout>
        } />
        
        {/* Route de fallback */}
        <Route path="*" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;