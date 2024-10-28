import { HERO_CONTENT } from "../constants";
import IconCloud from "./ui/icon-cloud.jsx";
import HyperText from "./ui/hyper-text.jsx";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "python",
  "javascript",
  "java",
  "react",
  "nodejs",
  "neo4j",
  "mongodb",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div id="hero" className="hero-section border-b border-neutral-900 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              <HyperText
                className="pb-8 text-6xl font-thin tracking-tight lg:pt-10"
                text="Debjit Mukhopadhyay"
              />
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 inline-block text-4xl tracking-tight text-transparent bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:px-8">
          <div className="relative flex  max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-transparent ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
