import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  itec,
  jp,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "My Resume",
    link: "https://drive.google.com/file/d/1Zhv1BhmKiza7ygHI3C2qny9vMnGbxMbs/view",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Full stack Developer",
    icon: backend,
  },
  {
    title: "UI & UX Designer",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "JP Morgan Chase",
    icon: jp,
    iconBg: "#383E56",
    date: "September 2024 - September 2024",
    points: [
      "Assisting in the development and optimization of financial models and algorithms.",
      "Collaborating with team members to analyze and interpret data, ensuring the accuracy of reports and analyses.",
      "Participating in code reviews and contributing to the improvement of software tools.",
      "Gaining insights into the intersection of finance and technology, developing a deeper understanding of the industry’s technical requirements.",
      "Demonstrating strong problem-solving skills while working with diverse teams across multiple departments.",
    ],
  },
  {
    title: "Software Engineering",
    company_name: "ITech",
    icon: itec,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - March 2024",
    points: [
      "Assisting instructors in delivering lessons on topics like Web Programming, Java, SQL, and C/C++.",
      "Providing one-on-one mentorship and guidance to students, helping them troubleshoot coding issues and understand complex concepts.",
      "Designing and conducting hands-on coding workshops to reinforce students’ learning.",
      "Managing classroom environments and assisting with the grading of assignments and projects.",
      "Collaborating with fellow assistants to improve learning materials and course delivery methods.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Snapeshare",
    description:
      "Snapeshare is a web-based platform enabling users to connect and share moments seamlessly. It offers real-time social interactions with a focus on a user-friendly design and engaging features, improving user experience by 35%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/xing24xing/SnapSharingRepo.git",
  },
  {
    name: "RealTime ChatApp",
    description:
     "RealTime ChatApp is a dynamic web application for instant communication. With features like private messaging, group chats, and real-time notifications, it provides a responsive platform built with WebSockets for smooth interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/xing24xing/FullStack-ChatApp.git",
  },
  {
    name: "Movie Review",
    description:
     "Movie Review is a platform for movie enthusiasts to explore, rate, and review their favorite films. It offers detailed movie information, user-generated reviews, and personalized recommendations based on viewing history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/xing24xing/MovieReview.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
