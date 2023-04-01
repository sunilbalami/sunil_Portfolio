//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/mithun.svg";
import TestiImage2 from "./assets/img/testimonials/sohal.svg";
import TestiImage3 from "./assets/img/testimonials/sanket.svg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "project name 1",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "project name 2",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "project name 3",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "project name 4",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Beautiful and functional designs: I specialize in creating responsive web designs that are optimized for user experience and conversion.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Customized web solutions: I specialize in developing custom web applications using modern technologies that are designed to meet your specific needs and grow with  business.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Build a strong brand:Help businesses establish a unique identity through thoughtful branding strategies that include logo design  and visual elements.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Increase your online visibility:  I specialise effective SEO strategies, including keyword research, on-page optimization, and link building, to boost your online presence",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Your contributions to the code review process have been invaluable. Your suggestions and feedback have helped us catch bugs and improve the overall quality of our codebase!.",
    authorName: "Mithun Poddar",
    authorPosition: "Senior Software Developer, Meshed Group",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "I appreciate your willingness to take on new challenges and learn new things. Your proactive attitude and curiosity impressed me",
    authorName: "Md Sohal",
    authorPosition: "Professional Trainer, Performance Education",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Great work on completing that project under such a tight deadline. Your ability to prioritize tasks and work efficiently was really impressive.",
    authorName: "Maarie Doe",
    authorPosition: "Service Delivery Manager, Meshed Group",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
