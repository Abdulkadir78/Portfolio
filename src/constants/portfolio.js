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
    title: "library management system",
    body: "A simple command line program for library management.",
    codeLink: "https://github.com/Abdulkadir78/mini-project-in-c",
    tags: ["C", "Data Structures"],
  },
  {
    title: "webbuy",
    body: "An Ecommerce web application.",
    codeLink: "https://github.com/Abdulkadir78/WebBuy",
    demoLink: "https://webbuy78.herokuapp.com/",
    tags: ["Node.js", "React.js", "MongoDb"],
  },
  {
    title: "photoTab",
    body: "An Instagram clone web application.",
    codeLink: "https://github.com/Abdulkadir78/PhotoTab",
    demoLink: "https://phototab-23cd2.web.app/",
    tags: ["React.js", "Firebase"],
  },
  {
    title: "ak drive",
    body: "A mobile app to store, view, and download your files and folders.",
    codeLink: "https://github.com/Abdulkadir78/Ak-drive",
    demoLink: "https://expo.io/@abdulkadir78/projects/Ak-drive",
    tags: ["React native", "Firebase"],
  },
  {
    title: "chattin'",
    body: "A real-time chat application.",
    codeLink: "https://github.com/Abdulkadir78/Chat-app",
    demoLink: "https://chat-app-1.netlify.app/",
    tags: ["Node.js", "React.js", "Socket.io"],
  },
  {
    title: "git-it",
    body: "A new look for your github profile with charts.",
    codeLink: "https://github.com/Abdulkadir78/Git-it",
    demoLink: "https://git-it.netlify.app/",
    tags: ["React.js", "Chart.js", "Github API"],
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
