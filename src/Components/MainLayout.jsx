/**
 * MainLayout component
 * Common layout for all pages (Header & Footer)
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const siteProps = {
  name: "Emmanuel AMELA",
  title: "full-stack developer",
  email: "Emmanuel.Amela@studentambassadors.com",
  gitHub: "juniorGitH",
  instagram: "",
  linkedIn: "emmanuel-amela/",
  medium: "",
  twitter: "AmelaJunior",
  youTube: "@codeAiMastery/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Ceci rendra les composants de la route actuelle */}
      </main>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </>
  );
};

export default MainLayout;