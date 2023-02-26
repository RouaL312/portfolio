export const METADATA = {
  title: "Portfolio | Roua laadouz",
  description:
    "Roua laadouz is a Full Stack Developer from Tunisia.",
  siteUrl: "https://Roualaadouz.com/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "An Analyst Developer",
  "I build application requirements ",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: roua.laadouz21@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/roua-laadouz/",
  },
  {
    name: "github",
    url: "https://github.com/RouaL312",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "cpp",
    "c",
    "SpringBoot",
    "java",
    "python",
    "firebase",
    // "figma"
  ],
  librariesAndFrameworks: [
    "Angular",
    "nodejs", 
    "Flask",
    "react",
  ],
  databases: [
    "mysql",
    "mongodb",
    "Postgresql",
    "SQLite",
    "Oracle",
  ],
  other: ["git", "Jenkins","Jira","Mantis"],
};

export const PROJECTS = [
  {
    name: "Speaker Recognition",
    image: "/projects/VoiceRecognition.webp",
    blurImage: "/projects/blur/VoiceRecognition-modified.webp",
    description: "this recognition application uses meaningful and well organized data and information, allows the extraction of vocal characteristics from short recordings and provides correct and reliable identification results 🎙️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://youtu.be/FdrT1oJK8DA",
    tech: ["python", "Flask" , "SQLite"],
  },
  {
    name: "Formations",
    image: "/projects/gestionFormation.webp",
    blurImage: "/projects/blur/gestionFormation-modified.webp",
    description:
    "Developed with complete E-commerce functionality and User Authentication 👨‍💻",
    gradient: ["#FFCF1B", "#FF881B"],
    tech: ["Angular", "postgre","SpringBoot"],
  },
  {
    name: "Project Management",
    image: "/projects/projectManagement.webp",
    blurImage: "/projects/blur/projectManagement-modified.webp",
    description: "Management of the main project tasks. Assures communication between project members (conversation, messages). ✍🏻",
    gradient: ["#F14658", "#DC2537"],
    tech: ["Angular", "nodejs" , "mongodb"],
  },
  {
    name: "Simulation VR",
    image: "/projects/SimulationVR.webp",
    blurImage: "/projects/blur/SimulationVR-modified.webp",
    description:
    "The objective was to create an atmosphere and a faithful perception of the reality of schizophrenia and autism based on empirical data collected from articles by psychologists and psychiatrists 🕹️👨‍💻 ",
    gradient: ["#000066", "#6699FF"],
    url: "https://youtu.be/M80Bi51vays",
    tech: ["unrealengine", "oculus", "blender"],
  },
  {
    name: "MovieTime",
    image: "/projects/movieTime.webp",
    blurImage: "/projects/blur/movieTime-modified.webp",
    description: "Is an independent internet service dedicated to discovering movies 🎥",
    gradient: ["#F14658", "#DC2537"],
    //url: "",
    tech: ["react","Jira","nodejs","postgre"],
  },
];

export const WORK = [
  {
    company: "B2M-It",
    title: "Analyst Developer",
    location: "Tunis, tunis",
    image: "/work/logob2m.webp",
    blurImage: "/work/logob2m.webpp",
    range: "October 2020 - now",
    gradient: ["#FF881B", "#FF881B"],
    responsibilities: [
      "- Design and develop new needs by spring boot and AngulaJs on a sale management software ",
      "- Development with JAVA on a solution that offers personal assistance services",
      "- Task tracking via JIRA and Mantis.",
      "- Agile Scrum methodology"
    ],
    url: "https://b2m-it.com/",
  },
  // {
  //   company: "Spacenos",
  //   title: "SDE",
  //   location: "Bangalore, Karnataka",
  //   range: "September - December 2021",
  //   responsibilities: [
  //     "Led the Full Stack revamp on the Admin Portal.",
  //     "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
  //     "Implemented CRUD features for all the services and providers",
  //   ],
  //   url: "https://spacenos.com/",
  // },
  // {
  //   company: "Spacenos",
  //   title: "Web Developer Intern",
  //   location: "Bangalore, Karnataka",
  //   range: "September - December 2021",
  //   responsibilities: [
  //     "Led the Full Stack revamp on the Admin Portal.",
  //     "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
  //     "Implemented CRUD features for all the services and providers.",
  //   ],
  //   url: "https://spacenos.com/",
  // },
];

export const GTAG = "G-5HCTL2TJ5W";
