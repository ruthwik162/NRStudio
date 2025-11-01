// src/assets/assets.js
import mainbanner from "./mainbanner.jpg"
import dev from "./dev.jpg"
import { FaLinkedin, FaSquareInstagram, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { CiPhone } from "react-icons/ci"

import mockup from './MacBook_Mockup_2.jpg'
import ruthwik from './ruthwik.jpg'
import Rohith from './Rohith.jpg'
import varshit from './varshit.png'

import mainbanner1 from './mainbanner.png'
import processBanner from './processBanner.png'
import twoBanner from './twoBanner.png'

export const images = {
  mainbanner,
  dev,
  mockup,
  mainbanner1,
  processBanner,
  twoBanner
}

export const profile =[
  {
    name: "Nagaruthwik Merugu",
    role: "Director & Full Stack Developer",
    about:"Passionate Full Stack Developer and Director with a knack for crafting seamless web experiences. With expertise in both front-end and back-end technologies, I thrive on transforming ideas into functional, user-friendly applications. Committed to innovation and excellence, I lead projects that push the boundaries of technology while ensuring optimal performance and user satisfaction.",
    image:ruthwik
  },
  {
    name:"Naresh Edunuri",
    role: "UI/UX Designer ",
    about:"Creative UI/UX Designer with a keen eye for detail and a passion for enhancing user experiences. Skilled in transforming complex ideas into intuitive designs that resonate with users. Adept at collaborating with cross-functional teams to deliver visually appealing and user-centric solutions that drive engagement and satisfaction.",
    image:mainbanner1
  },{
    name:"Rohith Dasandla",
    role: "Full Stack Developer",
    about:
      "Dedicated full-stack developer with a passion for creating innovative web solutions. Experienced in both front-end and back-end development, I excel at transforming ideas into functional applications. I am committed to continuous learning and thrive in collaborative environments where creativity and technology intersect.",
      image:Rohith
  },
  {
    name:"Varshit Bhamar",
    role:"Graphic Designer & Art Director",
    about:"Experienced Graphic Designer and Art Director with a passion for visual storytelling. Skilled in creating compelling designs that effectively communicate brand messages across various media. Adept at leading creative teams and managing projects from concept to completion, ensuring high-quality results that exceed client expectations.",
    image:varshit
  }
]


export const links = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nagaruthwikmerugu/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/m.n.ruthwik/",
    icon: FaSquareInstagram,
  },
  {
    name: "Github",
    href: "https://github.com/ruthwik162/",
    icon: FaGithub,
  },
]

export const contact = [
  {
    name: "email",
    detail: "nagaruthwikmerugu162@gmail.com",
    icon: MdEmail,
  },
  {
    name: "mobile",
    detail: "9182216089",
    icon: CiPhone,
  },
]
