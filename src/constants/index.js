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
    name: "ChatPdf",
    description:
      "Full-stack AI chatbot app using Next.js, ChatGPT, and Gemini to chat with PDFs or images. Includes live chat, export, auth, and theme support.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "Chat Gpt", color: "red-text-gradient" },
      { name: "Gemini", color: "yellow-text-gradient" },
    ],
    image:
      "data:image/jpeg;base64,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",
    source_code_link: "https://github.com/Shikha-9125/ChatDoc-AI",
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

