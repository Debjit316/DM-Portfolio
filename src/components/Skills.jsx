import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { SiNeo4J } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: duration,
      ease: "linear",
    },
  },
});

const Skills = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 p-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaJava className="text-6xl p-1 text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiReactjsLine className="text-6xl p-1 text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiNextjsLine className="text-6xl p-1 text-neutral-300" />
        </motion.div>

        <motion.div
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <DiNodejs className="text-6xl p-2 text-green-600" />
        </motion.div>

        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiPostgresql className="text-6xl p-2 text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiMongodb className="text-6xl p-2 text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <RiFirebaseLine className="text-6xl p-2 text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVar(6.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiNeo4J className="text-6xl p-2 text-slate-400" />
        </motion.div>

        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiExpress className="text-6xl p-2 text-neutral-200" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
