import {
  mobile,
  backend,
//   creator,
  web,
  javascript,
//   typescript,
  html,
  css,
  reactjs,
//   redux,
  tailwind,
  nodejs,
//   mongodb,
  git,
  figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
  threejs,
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
    id: "resume",
    title: "Resume",
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
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
  {
    name: "React JS",
    icon: reactjs,
  },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
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
//   {
//     name: "docker",
//     icon: docker,
//   },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept,2021 - Dec,2021",
    points: [
      "Drafted a proposal for a Public Participation Guideline that is available to the public and taxpayers",
      "Responsible for preparing reports on topics related to taxation procedures and tax policy that were discussed with Parliamentary Committees.",
      "keeping track of data related to stakeholder engagement and providing input on how to improve engagement strategies",
      "Monitoring of the stakeholder action plan and ensuring that all stakeholders were aware of their responsibilities and deadlines.",
      "Organizing and participating in stakeholder engagements",
      "Participant in the KRA Marketing and Communication Event Planning Committees, which oversaw the efficient organization and management of business events."
    ],
  }
];

const blogs = [
  {
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--LxH1yY2M--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3kewvdau9uz6j2bf02u9.jpg",
    name: "Guide to adding storage disks to Linux Virtual Machine on Azure",
    blog:
      "Are you new to Linux virtual machines on Azure? Need more storage or flexibility? This step-by-step guide will show you how to create, connect, and format a data disk for your Linux VM in Azure.",
    blog_url: "https://dev.to/b_mududa/guide-to-adding-storage-disks-to-linux-virtual-machine-on-azure-225f",
  },
   {
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--XcM8J4ah--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/48j0dslyxcl4sv3ifnxa.jpg",
    name: "Creating a Static Web App on Azure Using a Linux VM",
    blog:
      "Static web apps have grown in popularity for a wide range of applications, from basic marketing websites to large online applications.You can quickly deploy your React project as a static web app on Microsoft Azure .",
    blog_url: "https://dev.to/b_mududa/creating-a-static-web-app-on-azure-using-a-linux-vm-deploy-your-react-app-with-create-static-web-app-m7l",
  },
   {
    image: "https://www.eginnovations.com/blog/wp-content/uploads/2021/09/Amazon-AWS-Cloud-Topimage-1.jpg",
    name: "Mastering the Art of Instance Management",
    blog:
      "Amazon Elastic Compute Cloud (EC2) is a cloud computing service that provides scalable computing capacity in the Amazon Web Services (AWS) cloud. It is designed to make web-scale cloud computing easier for developers.",
    blog_url: "https://dev.to/b_mududa/mastering-the-art-of-instance-management-a-comprehensive-guide-to-creating-and-terminating-instances-like-a-pro-2kio",
  }
];

const projects = [
  {
    name: "my-portfolio",
    description:
      "My website showcases my educational background, projects, and blog. Explore my journey and gain insight into my skills and experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/Barbra-Mududa/my-portfolio",
  },
  {
    name: "Movie-Forum",
    description:
      "This is a simple web app that allows movie lovers around the world to come to our platform and checkout the latest and highest rated films. A user is able to to log into the plaform, view the latest titles and reviews/comments on the movies left by other users who have watched them before.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/W1w8rxsp/movieforum.png",
    source_code_link: "https://github.com/JosephNjeruNjenga/movie-forum",
  },
    {
    name: "Sweet-Living",
    description:
      "Sweet-Living website allows realtors and users around the world to buy,sell and rent real estate properties . A user is able to to log into the plaform, view the available real estate properties and decide whether they will purchase it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "render",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/GmKP9YjH/sweet-living.png",
    source_code_link: "https://github.com/Tjay114/sweet-living-frontend",
  },
  {
    name: "Vikali",
    description:
      "Vikali seeks to create an online store for consumers so that it is simple to shop for your favorite items from the vast array of online shopping websites that are readily available on the internet. One may make purchases online from the comfort of their homes using our website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/8PhmQxJd/vikali.png",
    source_code_link: "https://github.com/adamswonder/vikali",
  },
  {
      name: "Enigmatic",
    description:
      "Enigmatic is a hiking events website that enables hikers explore the beauty of nature in Kenya. The hiker is able to pick a hike of choice and join the rest of the hiking community in its adventures.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/KzFB2YyF/enigmatic.png",
    source_code_link: "https://github.com/Barbra-Mududa/enigmatic",
  }
];

export { services, technologies, experiences, blogs, projects };