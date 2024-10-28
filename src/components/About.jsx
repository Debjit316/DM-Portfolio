import about from "/about.jpg";
import { ABOUT_TEXT } from "../constants";
import ShinyButton from "./ui/shiny-button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-violet-800"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-5"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-80 h-80 "
              src={about}
              alt="About Me"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-4 italic font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1K_LPkC4ZaZzcAQ8EyhQpShw6MZ_oUChI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="text-xs font-semibold rounded border-2  border-neutral-300 px-2 py-1">
                📄Resume &rarr;
              </ShinyButton>
            </a>
            {/* <ShinyButton
              className="text-xs font-semibold rounded border-2  border-neutral-300 px-2 py-1"
              link="https://drive.google.com/file/d/1K_LPkC4ZaZzcAQ8EyhQpShw6MZ_oUChI/view?usp=drive_link"
            >
              📄Resume &rarr;
            </ShinyButton> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
