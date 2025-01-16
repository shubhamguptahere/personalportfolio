// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shubham",
  middleName: "",
  lastName: "Gupta",
  message: " Lead Software Engineer with over 7 Years of Experience | Architecting Scalable Data Solutions with AWS, Databricks & DevOps | Agile Certified (CSPO®, RPO™) ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shubhamguptahere",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/shubhmgupta11",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/theshubhmgupta/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shubhamsg/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/iamsamsg/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_picture.png"),
  imageSize: 375,
  message:
    "My name is Shubham Gupta. I’m a graduate of 2018 from Chandigarh Engineering College with a degree in Electronics and Telecommunication Engineering. As a highly motivated Lead Software Engineer, I specialize in building data-driven cloud solutions, leveraging AWS, Databricks, serverless computing, and Agile methodologies. I excel at architecting scalable, efficient systems, optimizing performance, and driving automation with tools like Apache Airflow, Step Functions, AWS Batch, and more. With experience in CI/CD pipelines, data engineering, and cloud orchestration, I deliver solutions that enhance operational efficiency, reduce processing times, and accelerate deployment cycles",
  resume: "https://drive.google.com/file/d/1SShfL6bXr1NaiycQgki4hMpXnLXeaBXD/view?usp=share_link",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "shubhamguptahere",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile_picture.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile_picture.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    // { name: "JavaScript", value: 90 },
    // { name: "React", value: 65 },
    // { name: "HTML/CSS", value: 55 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Passionate about continuous learning and solving technical challenges, I thrive in collaborative, Agile environments and seek to contribute to innovative, cloud-driven solutions. Let’s connect to discuss how we can create impactful solutions together.",
  email: "shubham9646@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
