"use client";
import Container from "@/src/components/essential-components/Container";
import React from "react";

import Intro from "@/src/components/section-components/Intro";
import AboutMe from "@/src/components/section-components/AboutMe";

const MainPage = () => {
  return (
    <Container className="">
      {/* Intro Section */}
      <section className={`relative h-[calc(100vh-5rem)]`}>
        <Intro />
      </section>

      {/* About Me Section */}
      <section className="h-[calc(100vh-5rem)] scroll-mt-24" id="about-me">
        <AboutMe />
      </section>
    </Container>
  );
};

export default MainPage;
