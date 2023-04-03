import {
  awlogo,
  satslogo,
  pglogo,
  gklogo,
  nerd,
  backend,
  uxui,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  postgresql,
  git,
  figma,
  threejs,
  moneymates,
  todo,
  pokedex
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "PC Enthusiast",
    icon: nerd,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Creator",
    icon: uxui,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Electrician",
    company_name: "GK",
    icon: gklogo,
    iconBg: "#fff",
    date: "August 2015 - March 2020",
    points: [
      "Managed diverse electrical projects from residential repairs to commercial installations.",
      "Excelled at troubleshooting and problem-solving for complex electrical issues.",
      "Thrived in a fast-paced environment, emphasizing precision, safety, and attention to detail.",
      "Collaborated effectively with engineers, project managers, and construction workers.",
    ],
  },
  {
    title: "Fire Alarm Systems Electrician/Programmer",
    company_name: "Pettersson & Gjellesvik",
    icon: pglogo,
    iconBg: "#E6DEDD",
    date: "March 2020 - August 2020",
    points: [
      "Designed, installed, and maintained fire alarm systems meeting safety regulations.",
      "Troubleshot and resolved system issues using programming and technical expertise.",
      "Prioritized detail, precision, and safety-consciousness in all aspects of work.",
      "Communicated and collaborated with building managers, safety inspectors, and engineers.",
    ],
  },
  {
    title: "Service Worker",
    company_name: "SATS",
    icon: satslogo,
    iconBg: "#fff",
    date: "May 2021 - October 2022",
    points: [
      "Assisted customers with fitness goals, ensuring a positive gym experience.",
      "Collaborated with service workers, trainers, and managers for smooth gym operations.",
      "Developed excellent communication, problem-solving, and teamwork skills.",
      "Learned to work effectively with people from diverse backgrounds and handle challenging situations.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "AW Academy",
    icon: awlogo,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "As a full stack developer who has completed the AW Academy program for Javascript, I have gained extensive knowledge and hands-on experience in building and maintaining web applications.",
      "During my time at AW Academy, I learned the fundamentals of web development, including HTML, CSS, and Javascript, as well as modern frameworks and tools like React, Node.js, and Git. Through hands-on coding projects and real-world scenarios, I honed my skills in front-end and back-end development, including creating responsive designs, managing databases, and implementing secure authentication.",
      "Overall, my experience as a full stack developer and AW Academy graduate has given me a deep understanding of web development best practices and the ability to apply these skills to create high-quality, responsive applications. I am excited to continue growing and expanding my knowledge and skills in this field, and I am confident that my expertise will make me a valuable asset to any team.",
    ],
  },
];


const projects = [
  {
    name: "MoneyMates - Frontend",
    description:
      "MoneyMates is a web application that helps users manage shared expenses within groups, enabling easy tracking of transactions, balances, and invitations for a seamless, collaborative financial experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "Auth0",
        color: "pink-text-gradient",
      },
    ],
    image: moneymates,
    source_code_link: "https://github.com/MariusGjerd/moneymates-frontend",
  },
  {
    name: "MoneyMates - Backend",
    description:
      "MoneyMates backend is a server-side application that powers the MoneyMates web app, handling group-based expense management, processing transactions, and storing data to ensure a smooth, collaborative financial experience for users.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: moneymates,
    source_code_link: "https://github.com/MariusGjerd/moneymates-backend",
  },
  {
    name: "PERN-Stack Todo-app",
    description:
      "Simple todo list with CRUD. Add, edit and delete your own todo list",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express/Node.js",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/MariusGjerd/todolistapp",
  },
  {
    name: "Pokedex",
    description:
      "The Pokedex app is a user-friendly tool for Pokémon fans to explore the first 151 Pokémon.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/MariusGjerd/Pokedex-vite-react",
  },
];

export { services, technologies, experiences, projects };