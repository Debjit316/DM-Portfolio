import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ripple from "./components/ui/ripple";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-700">
      <div className="fixed top-0 -z-10 h-full w-[100vw] "></div>
      <div class="absolute top-0 z-[-2] min-h-screen w-[100vw] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container px-20">
          <Ripple />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>  */
}
{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen  bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e)]"></div>; */
}
