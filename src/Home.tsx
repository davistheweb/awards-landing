import React from "react";
import {
  Hero,
  About,
  Navbar,
  Features,
  Story,
  Contact,
  Footer,
} from "@components/index";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;