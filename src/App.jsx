/**
 * Application component - Fichier principal avec toutes les routes
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Ressources from "./Components/Ressources";
import Admin from "./Components/Admin";
import Dashboard from "./Components/Dashboard";
import ProjectDetail from "./Components/ProjectDetail";
import ProjectView from "./Components/ProjectView";
import NewProject from "./Components/NewProject";
import ProjectsList from "./Components/ProjectsList";
import Mentoring from "./Components/Mentoring";
import ScheduleMentoring from "./Components/ScheduleMentoring";
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

const siteProps = {
  name: "Emmanuel AMELA",
  title: "full-stack developer",
  email: "Emmanuel.Amela@studentambassadors.com",
  gitHub: "juniorGitH",
  instagram: "",
  linkedIn: "emmanuel-amela/",
  twitter: "AmelaJunior",
  youTube: "@codeAiMastery/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

// Layout principal avec gestion du défilement
const Layout = ({ children }) => {
  const location = useLocation();

  // Gérer le défilement après navigation depuis une autre page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      // Attendre un peu que le DOM soit mis à jour
      setTimeout(() => {
        scrollToSection(sectionId);
        // Nettoyer l'état pour éviter les déclenchements répétés
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  // Gérer le défilement via le hash (ex: /#portfolio)
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location.pathname, location.hash]);

  // Fonction pour faire défiler vers une section (avec retries)
  const scrollToSection = (sectionId, attempt = 0) => {
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.offsetHeight ?? 70;

      // Scroll vers la section via l'API native (plus fiable selon le navigateur)
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Ajustement pour le header fixe
      setTimeout(() => {
        window.scrollBy({ top: -headerHeight, behavior: "smooth" });
      }, 50);
      return;
    }

    // Réessayer si l'élément n'est pas encore disponible
    if (attempt < 20) {
      setTimeout(() => scrollToSection(sectionId, attempt + 1), 100);
    }
  };

  return (
    <div id="main">
      <Header />
      {children}
      <Footer 
        {...siteProps} 
        primaryColor={primaryColor} 
        secondaryColor={secondaryColor} 
      />
    </div>
  );
};

// Composant HomePage qui regroupe les sections de la page d'accueil
const HomePage = ({ name, title }) => {
  return (
    <>
      <Home name={name} title={title} />
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
            <HomePage name={siteProps.name} title={siteProps.title} />
          </Layout>
        } />
        
        {/* Ressources */}
        <Route path="/ressources" element={
          <Layout>
            <Ressources />
          </Layout>
        } />
        
        {/* Administration */}
        <Route path="/admin" element={
          <Layout>
            <Admin />
          </Layout>
        } />
        
        {/* Tableau de bord client */}
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        
        {/* Détail d'un projet - Ancienne version */}
        <Route path="/project/:id" element={
          <Layout>
            <ProjectDetail />
          </Layout>
        } />
        
        {/* Vue détaillée d'un projet - Nouvelle version améliorée */}
        <Route path="/project-view/:id" element={
          <Layout>
            <ProjectView />
          </Layout>
        } />
        
        {/* Nouveau projet */}
        <Route path="/new-project" element={
          <Layout>
            <NewProject />
          </Layout>
        } />
        
        {/* Liste des projets (admin) */}
        <Route path="/projects" element={
          <Layout>
            <ProjectsList />
          </Layout>
        } />
        
        {/* Mentorat */}
        <Route path="/mentoring" element={
          <Layout>
            <Mentoring />
          </Layout>
        } />
        
        {/* Planification de mentorat */}
        <Route path="/schedule-mentoring" element={
          <Layout>
            <ScheduleMentoring />
          </Layout>
        } />
        
        {/* Profil client */}
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
            <HomePage name={siteProps.name} title={siteProps.title} />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;