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

const App: React.FC = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default App;
