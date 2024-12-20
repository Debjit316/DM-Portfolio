import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 p-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={250}
                  height={300}
                  alt={project.name}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="ml-8 w-full lg:w-3/4 max-w-xl"
              >
                <h6 className="mb-2 text-slate-400 font-semibold">
                  {project.title}{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 ml-5 text-sm italic px-2 rounded  font-medium hover:underline"
                  >
                    View on GitHub
                  </a>
                </h6>
                <p className="mb-4 tracking-tight text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="rounded bg-neutral-900 p-2 text-sm font-medium text-purple-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
