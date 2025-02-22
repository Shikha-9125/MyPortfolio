import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  nitj,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "NIT Jalandhar",
    icon: nitj,
    iconBg: "#383E56",
    date: "March 2023 - Nov 2024",
    points: [
      "Developed front-end for over 10 pages in the Administration section of the Institute’s website.",
      "Worked primarily with HTML, Tailwind CSS, and JavaScript to build responsive and user-friendly interfaces.",
      "Collaborated with team members to enhance the website's functionality and design.",
      "Ensured cross-browser compatibility and optimized website performance.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Cognifyz",
    icon: "https://cognifyz.com/wp-content/uploads/2023/11/cognifyz-1.png",
    iconBg: "#383E56",
    date: "Summer 2024",
    points: [
      "Worked on two major projects: a password manager and a text-based game.",
      "Developed the backend and frontend for the password manager, ensuring security features like password validation and encryption.",
      "Created an engaging text-based game with dynamic user interaction and scoring features.",
      "Collaborated with the team to integrate various tools and libraries for enhanced functionality and performance.",
      "Gained hands-on experience with both front-end and back-end technologies, including React, Node.js, Express, and MongoDB.",
    ],
  },
];

const projects = [
  {
    name: "Realtime Collaborative IDE",
    description:
      "Developed an online IDE enabling real-time code collaboration, allowing multiple users to edit the same file simultaneously. The platform includes code compilation, input handling (stdin), syntax highlighting, user authentication, and role-based access control.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "webRTC", color: "yellow-text-gradient" },
      { name: "Yjs", color: "grey-text-gradient" },
    ],
    image: "https://discuss.yjs.dev/uploads/default/original/1X/8c8a1961aaa1fa50aa240e81a98e733d0900f99f.jpeg",
    source_code_link: "https://github.com/Shikha-9125/RealtimeIDE",
  },
  {
    "name": "FlightMate",
    "description": 
      "Developed a system that finds the shortest possible flight route between two airports, even if no direct flight is available. Utilizes graph algorithms to determine the most efficient paths, minimizing stops and travel time.",
    "tags": [
      { "name": "graph-algorithms", "color": "blue-text-gradient" },
      { "name": "route-optimization", "color": "green-text-gradient" },
      { "name": "aviation", "color": "yellow-text-gradient" },
    ],
    "image": "https://static.vecteezy.com/system/resources/thumbnails/050/966/684/small/miniature-airplane-on-a-city-map-showing-the-destination-point-with-a-red-pin-photo.jpg",
    "source_code_link": "https://flight-mate.vercel.app/"
}
,
  {
    name: "Job Portal",
    description:
      "Developed CareerBloom, a full-stack job portal designed to seamlessly connect job seekers and recruiters. The motivation behind this project was to bridge the gap between talent and opportunity.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "https://cdn.phpjabbers.com/files/templates_img/template133-list.jpg",
    source_code_link: "https://job-linker-xoes.onrender.com/",
  },
  {
    name: "e-Aarogya",
    description:
      "Developed e-Arogya, an online doctor appointment system, as a full-stack web application to address the challenges faced in accessing healthcare in rural areas.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
    ],
    image: "https://hrbanana.com/wp-content/uploads/2020/12/book-your-medical-appointment-online-using-mobile-app-doctor-sitting-desk-background-wearing-face-mask-190595834.jpg",
    source_code_link: "https://bookmydoc-six.vercel.app/login",
  },
  {
    name: "BookStore",
    description:
      "Developed a bookstore app that allows users to search for and purchase books, featuring both free and paid content.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "https://png.pngtree.com/thumb_back/fw800/background/20230120/pngtree-bookstore-bookshelf-display-photography-image_1534440.jpg",
    source_code_link: "https://github.com/Shikha-9125/bookstoreApp",
  },
];

export { services, technologies, experiences, projects };

