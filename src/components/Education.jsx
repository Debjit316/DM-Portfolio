import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="flex items-center justify-center">
      <div className="border-b border-neutral-800 p-9">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.75 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2021-present</time>
              <div className="text-md font-semibold ">
                {" "}
                Academy of Technology
              </div>
              <div className="text-md font-semibold text-slate-500">
                {" "}
                Hooghly, West Bengal
              </div>
              <div className="text-md font-semibold text-purple-500">
                {" "}
                8.75 CGPA
              </div>{" "}
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2018 - 2020</time>
              <div className="text-md font-semibold "> St. Xavier's School</div>
              <div className="text-md font-semibold text-slate-500">
                {" "}
                Bardhaman, West Bengal
              </div>
              <div className="text-md font-semibold text-purple-500">
                {" "}
                ISC : 86.25%
              </div>{" "}
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2007 - 2018</time>
              <div className="text-md font-semibold "> St. Xavier's School</div>
              <div className="text-md font-semibold text-slate-500">
                {" "}
                Bardhaman, West Bengal
              </div>
              <div className="text-md font-semibold text-purple-500">
                {" "}
                ICSE : 90.6%
              </div>{" "}
            </div>
            <hr />
          </li>
          <li>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
