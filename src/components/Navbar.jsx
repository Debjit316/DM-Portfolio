import React from "react";
import logo from "../assets/DMlogo.png";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* <FaLinkedin />
        <FaGithub />
        <FaMedium />
         */}
        {/* <a href="#hero" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">1.</span>
          <span className="ml-1 font-mono font-light tracking-tighter text-base text-neutral-300">
            Home
          </span>
        </a> */}

        <a href="#about" className="flex  items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">1.</span>
          <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
            About
          </span>
        </a>

        <a href="#skills" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light ">2.</span>
          <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
            Skills
          </span>
        </a>

        <a href="#education" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">3.</span>
          <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
            Education
          </span>
        </a>

        {/* <a href="#education" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">5.</span>
          <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
            Certifications
          </span>
        </a> */}

        <a href="#projects" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">4.</span>
          <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
            Projects
          </span>
        </a>

        <a href="#contact" className="flex items-center text-neutral-100">
          <span className="text-violet-800 text-base font-light">5.</span>
          <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
            Contact
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
