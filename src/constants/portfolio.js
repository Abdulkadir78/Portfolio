const navLinks = ["about", "skills", "projects", "contact"];

const typingEffect = {
  strings: ["web developer", "tech enthusiast", "student"],
  typeSpeed: 100,
  backSpeed: 75,
};

const about = {
  para1: `My name is Abdulkadir. I'm a passionate web developer 
          and a knowledge seeker, always open to learning new skills.
          I like to connect the dots and find solutions to real world problems.`,

  para2: `I'm currently pursuing a bachelor's degree in Computer Engineering 
          from the University of Mumbai.`,

  para3: "My hobbies include playing football, gaming, and....sleeping.",

  resumeLink:
    "https://drive.google.com/file/d/1AEa_MyuF0Uq0P7O_bmSXGZWZClnvOa9n/view?usp=sharing",
};

const projects = [
  {
    title: "Profeed",
    body: "A full stack feedback sharing platform where users can interact with project creators.",
    codeLink: "https://github.com/Abdulkadir78/Profeed",
    demoLink: "https://profeed.vercel.app",
    tags: ["Next.js", "Redux", "Firebase"],
  },
  {
    title: "adrak",
    body: "A project management system web application.",
    codeLink: "https://github.com/Abdulkadir78/Adrak",
    demoLink: "https://adrak.vercel.app",
    tags: ["React.js", "Redux", "Express.js", "MongoDb"],
  },
  {
    title: "webbuy",
    body: "An Ecommerce web application.",
    codeLink: "https://github.com/Abdulkadir78/WebBuy",
    demoLink: "https://webbuy78.herokuapp.com",
    tags: ["React.js", "Node.js", "MongoDb"],
  },
  {
    title: "photoTab",
    body: "An Instagram clone web application.",
    codeLink: "https://github.com/Abdulkadir78/PhotoTab",
    demoLink: "https://phototab-23cd2.web.app",
    tags: ["React.js", "Firebase"],
  },
  {
    title: "ak drive",
    body: "A mobile app to store, view, and download your files and folders.",
    codeLink: "https://github.com/Abdulkadir78/Ak-drive",
    demoLink: "https://expo.dev/@abdulkadir78/Ak-drive",
    tags: ["React native", "Firebase"],
  },
  {
    title: "Code Inn",
    body: "A web based tool to share code snippets with your peers.",
    codeLink: "https://github.com/Abdulkadir78/Code-Inn",
    demoLink: "https://code-inn.vercel.app",
    tags: ["Next.js", "Firebase"],
  },
  {
    title: "git-it",
    body: "A new look for your github profile with charts.",
    codeLink: "https://github.com/Abdulkadir78/Git-it",
    demoLink: "https://git-it.netlify.app",
    tags: ["React.js", "Chart.js", "Github API"],
  },
  {
    title: "DemMovies",
    body: "A web based app to search for your favorite movies and shows.",
    codeLink: "https://github.com/Abdulkadir78/DemMovies",
    demoLink: "https://demmovies.vercel.app",
    tags: ["Next.js", "Tmdb API"],
  },
  {
    title: "Shortly",
    body: "A simple url shortener with a landing page.",
    codeLink: "https://github.com/Abdulkadir78/Shortly",
    demoLink: "https://shortly-urls.netlify.app",
    tags: ["React.js"],
  },
];

const contact = {
  para: `Have a question? Want to discuss a project? Or just want to say hi? 
         Feel free to get in touch, my inbox is always open.`,

  email: "shekhaabdulkadir@gmail.com",
  linkedIn: "linkedin.com/in/abdulkadir-shekha",
};

const footer = {
  author: "Abdulkadir",
};

export { navLinks, typingEffect, about, projects, contact, footer };
