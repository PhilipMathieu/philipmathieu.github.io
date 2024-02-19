import React from "react";
import Header from "./components/Header";
import ProjectSlideshow from "./components/ProjectSlideshow";
import AboutMe from "./components/AboutMe";
import LatestListing from "./components/LatestListing";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <ProjectSlideshow /> */}
      <AboutMe />
      <LatestListing />
    </>
  );
};

export default HomePage;
