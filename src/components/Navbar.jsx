// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="mb-10 flex items-center justify-between py-6 ">
//       <div className="flex flex-shrink-0 items-center">
//         <img src={logo} alt="logo" className="mx-2 w-10" />
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         {/* <FaLinkedin />
//         <FaGithub />
//         <FaMedium />
//  */}
//         {/* <a href="#hero" className="flex items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light">1.</span>
//           <span className="ml-1 font-mono font-light tracking-tighter text-base text-neutral-300">
//             Home
//           </span>
//         </a> */}

//         <a href="#about" className="flex  items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light">1.</span>
//           <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
//             About
//           </span>
//         </a>

//         <a href="#skills" className="flex items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light ">2.</span>
//           <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
//             Skills
//           </span>
//         </a>

//         <a href="#education" className="flex items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light">3.</span>
//           <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
//             Education
//           </span>
//         </a>

//         {/* <a href="#education" className="flex items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light">5.</span>
//           <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
//             Certifications
//           </span>
//         </a> */}

//         <a href="#projects" className="flex items-center text-neutral-100">
//           <span className="text-violet-800 text-base font-light">4.</span>
//           <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
//             Projects
//           </span>
//         </a>

// {
/* <a href="#contact" className="flex items-center text-neutral-100">
  <span className="text-violet-800 text-base font-light">5.</span>
  <span className="ml-1 font-mono text-base font-light tracking-tighter text-neutral-300">
    Contact
  </span>
</a>; */
// }
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/DMlogo.png";
import { FaTimesCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container  py-6">
        <div className="flex items-center justify-between py-6">
          {/* Brand or Logo */}
          <div className="flex flex-shrink-0 items-center">
            <motion.img
              src={logo}
              alt="logo"
              className="mx-2 w-10"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            />
          </div>
          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimesCircle size={24} />
              ) : (
                <FaBarsStaggered size={24} />
              )}
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center space-x-3 py-6">
            <a href="#about" className="flex items-center text-neutral-100">
              <span className="text-violet-800 text-base font-light">1.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                About
              </span>
            </a>
            <a href="#skills" className="flex items-center text-neutral-100">
              <span className="text-violet-800 text-base font-light">2.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Skills
              </span>
            </a>
            <a href="#education" className="flex items-center text-neutral-100">
              <span className="text-violet-800 text-base font-light">3.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Education
              </span>
            </a>
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
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="px-2 py-6 space-y-1">
            <a
              href="#about"
              className="flex items-center text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-violet-800 text-base font-light">1.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                About
              </span>
            </a>
            <a
              href="#skills"
              className="flex items-center text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-violet-800 text-base font-light">2.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Skills
              </span>
            </a>
            <a
              href="#education"
              className="flex items-center text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-violet-800 text-base font-light">3.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Education
              </span>
            </a>
            <a
              href="#projects"
              className="flex items-center text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-violet-800 text-base font-light">4.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Projects
              </span>
            </a>
            <a
              href="#contact"
              className="flex items-center text-neutral-100 px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-violet-800 text-base font-light">5.</span>
              <span className="ml-1 font-mono font-light text-base tracking-tighter text-neutral-300">
                Contact
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
