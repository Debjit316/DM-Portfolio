import vault from "/vault.gif";
import codepen from "/codepen.gif";
import detris from "/detris.gif";
import LiveDocs from "/LiveDocs.gif";
import jupyter from "/jupyter.gif";

export const HERO_CONTENT = `Final-year Computer Science student with a passion for crafting elegant solutions through code. Leveraging strong programming fundamentals and diverse technical expertise to build impactful software solutions. Ready to transition from academic excellence to professional impact. Seeking an entry-level software engineering role to contribute innovative solutions and accelerate professional growth.`;

export const ABOUT_TEXT = `I am an ambitious final-year Computer Science student with an 8.75 CGPA and a passion for full-stack development. My technical portfolio includes projects built with React, Next.js, Node.js, and various databases like PostgreSQL and MongoDB. I've demonstrated my capabilities through projects such as Vault, a secure document management system, and CodeLive, a real-time code editing platform. I thrive in collaborative environments and consistently seek to expand my technical expertise while maintaining a keen interest in emerging technologies. Eager to transition from academic excellence to professional impact, I am seeking an opportunity to contribute my fresh perspective and problem-solving abilities to an innovative software engineering team.`;

export const EDUCATION = [
  {
    year: "2021 - Present",
    institution: "Academy of Technology",
    description: `Hooghly, West Bengal`,
    marks: "8.75 CGPA",
  },
  {
    year: "2018 - 2020",
    institution: "St. Xavier's School",
    description: `Bardhaman, West Bengal`,
    marks: "ISC  86.25%",
  },
  {
    year: "2007 - 2018",
    institution: "St. Xavier's School",
    description: `Bardhaman, West Bengal`,
    marks: "ICSE  90.6%",
  },
];

export const PROJECTS = [
  {
    title: "Document Management System",
    image: vault,
    description:
      "Vault is a secure document management site using Next.js, TypeScript, and Firebase Firestore. It features Clerk authentication, allowing users to upload, store, view, and edit documents easily. The intuitive interface ensures secure and accessible document management.",
    technologies: ["NextJS", "Tailwind CSS", "Firebase", "Clerk"],
    link: "https://github.com/Debjit316/Vault",
  },
  {
    title: "LiveDocs",
    image: LiveDocs,
    description:
      "LiveDocs is a beginner-friendly document collaboration platform that explores the power of WebSockets. Built with React, Tailwind CSS, and the Quill editor, this project enables multiple users to work simultaneously on a single document or maintain separate workspaces, providing an introductory experience in real-time collaboration technologies.",
    technologies: ["React", "Tailwind CSS", "Socket.io", "Quill Editor"],
    link: "https://github.com/Debjit316/LiveDocs",
  },
  {
    title: "CodeLive",
    image: codepen,
    description:
      "CodeLive is a real-time code editing and sharing platform. Features include syntax-highlighted code panels for HTML, CSS, and JavaScript, a live preview pane, and the ability to save and collaborate on code snippets. Designed for responsive mobile and desktop use, CodeLive enables seamless real-time coding experiences.",
    technologies: ["CodeMirror", "Tailwind CSS", "MaterialUI"],
    link: "https://github.com/Debjit316/CodeLive",
  },
  {
    title: "Cricket Match Analysis",
    image: jupyter,
    description:
      "Cricket Match Analysis is a data-driven project that leverages Colab to visualize key cricket metrics. Featuring graphs and plots, the application analyzes run rates, wicket falls, player batting averages, bowler economies, and more, providing comprehensive insights into the dynamics of a cricket match.",
    technologies: ["Jupyter Notebook", "Colab"],
    link: "https://github.com/Debjit316/Cricket-Match-Analysis",
  },
  {
    title: "Detris",
    image: detris,
    description:
      "Detris is a desktop Tetris game built using Java Swing's robust GUI framework. As an avid programmer, I created this project to enhance my OOP skills and explore game loop architecture. Detris faithfully recreates the classic Tetris experience with clean, modular code and efficient mechanics, showcasing my ability to translate CS concepts into a polished, interactive application.",
    technologies: ["Java", "Java Swing"],
    link: "https://github.com/Debjit316/Detris",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
