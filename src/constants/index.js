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
    moneymates
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
        "As an experienced electrician at GK, I have honed my skills in electrical engineering and maintenance, working on a diverse range of projects from residential electrical repairs to large-scale commercial installations.",
        "With a talent for troubleshooting and problem-solving, I excel at diagnosing issues with electrical systems, identifying faulty components, and devising innovative solutions to challenging problems. My technical knowledge is matched by my excellent communication and collaboration skills, allowing me to work closely with engineers, project managers, and construction workers to ensure that projects are completed to the highest standards of quality and on time.",
        "Throughout my tenure at GK, I have gained invaluable experience in working in a dynamic, fast-paced environment, where precision, safety, and attention to detail are paramount. My ability to work effectively in a team, share knowledge, and collaborate towards common goals have been instrumental in achieving success on a wide variety of projects.",
        "In summary, my work experience as an electrician at GK has equipped me with the technical and interpersonal skills necessary to excel in this field, and I am confident that my expertise will be an asset to any organization.",
      ],
    },
    {
      title: "Fire Alarm Systems Electrician/Programmer",
      company_name: "Pettersson & Gjellesvik",
      icon: pglogo,
      iconBg: "#E6DEDD",
      date: "March 2020 - August 2020",
      points: [
        "As a skilled electrician at PG, I specialized in fire alarm systems and programming, gaining extensive experience in this field.",
        "In this role, I was responsible for designing, installing, and maintaining fire alarm systems, ensuring that they were fully operational and met all safety regulations. I also excelled at programming and configuring fire alarm systems, using my technical expertise to troubleshoot and resolve issues quickly and efficiently.",
        "Throughout my time at PG, I developed a reputation for my attention to detail, precision, and safety-consciousness, ensuring that all systems were installed and maintained to the highest standards. I also demonstrated excellent communication and collaboration skills, working closely with other professionals, such as building managers, safety inspectors, and engineers, to ensure that projects were completed on time and to the satisfaction of all stakeholders.",
        "Overall, my experience at PG has given me a deep understanding of fire alarm systems and programming, and the critical role that they play in ensuring safety and security in a range of settings. I am confident that my expertise in this area, coupled with my proven ability to work in a fast-paced, high-pressure environment, make me a valuable asset to any team.",
      ],
    },
    {
      title: "Service Worker",
      company_name: "SATS",
      icon: satslogo,
      iconBg: "#fff",
      date: "May 2021 - October 2022",
      points: [
        "As a service worker at SATS, I had the opportunity to gain valuable life experience and develop my interpersonal skills in a dynamic and fast-paced environment.",
        "In this role, I interacted with customers on a daily basis, helping them with their fitness goals and ensuring that they had a positive experience at the gym. I also worked closely with other service workers, trainers, and managers, collaborating to ensure that all aspects of gym operations ran smoothly.",
        "Throughout my time at SATS, I developed excellent communication, problem-solving, and teamwork skills, which are invaluable in all areas of life. I learned how to work effectively with people from diverse backgrounds, and how to handle challenging situations with professionalism and grace.",
        "Overall, my experience at SATS taught me the importance of hard work, dedication, and a positive attitude, and gave me the confidence to pursue my goals both inside and outside of the workplace. I am grateful for the opportunity to have worked in such an exciting and fulfilling role, and I am confident that the skills and experience I gained will serve me well in all of my future endeavors.",
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
        "In my work experience as a full stack developer, I have applied these skills to build high-quality, user-friendly web applications for clients in a range of industries. I have worked on both large-scale and small-scale projects, collaborating with other developers, project managers, and stakeholders to ensure that applications meet the needs of the business and the end-user.",
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
      name: "TBA",
      description:
        "What would you like me to make?",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: "TBA",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };