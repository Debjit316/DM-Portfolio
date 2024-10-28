import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const iV = (duration) => ({
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

const Contacts = () => {
  return (
    <div id="contact" className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75 }}
        className="my-8 text-center text-4xl"
      >
        Get in
        <span className="text-violet-800"> Touch</span>
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <motion.a
          variants={iV(2.5)}
          initial="initial"
          animate="animate"
          href="https://www.linkedin.com/in/debjit-mukhopadhyay/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaLinkedin className="text-4xl p-1 text-blue-600" />
        </motion.a>

        <motion.a
          variants={iV(5)}
          initial="initial"
          animate="animate"
          href="https://medium.com/@debjitmukhopadhyay316"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaMedium className="text-4xl p-1" />
        </motion.a>

        <motion.a
          variants={iV(3)}
          initial="initial"
          animate="animate"
          href="https://leetcode.com/u/DebJ88/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiLeetcode className="text-4xl p-1" />
        </motion.a>

        <motion.a
          variants={iV(4.5)}
          initial="initial"
          animate="animate"
          href="https://github.com/Debjit316"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <FaGithub className="text-4xl p-1" />
        </motion.a>

        <motion.a
          variants={iV(3.75)}
          initial="initial"
          animate="animate"
          href="https://www.geeksforgeeks.org/user/debjit316/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-4 border-neutral-800"
        >
          <SiGeeksforgeeks className="text-4xl p-1 text-green-600" />
        </motion.a>
      </div>
    </div>
  );
};

export default Contacts;
