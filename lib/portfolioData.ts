import Image1 from "@/public/images/insomnia1.png";
import Image2 from "@/public/images/insomnia2.png";
import Image3 from "@/public/images/chtravels.png";
import Image4 from "@/public/images/realestate-img.png";
import Image5 from "@/public/images/Screenshot 2025-09-21 164622.png";
import Image6 from "@/public/images/portfolio-img.png";

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: string;
  image: any;
  demoLink: string;
  githubLink: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and contact information.",
    category: "Frontend",
    image: Image6,
    demoLink: "https://timely-axolotl-0f4be3.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/portfolio-original",
  },
  {
    id: 2,
    title: "Listings App",
    description: "Backend-powered listings platform for managing and showcasing property ads.",
    category: "Backend",
    image: Image2,
    demoLink: "https://housing-properties.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/housing_properties",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "Property listings app for buying or renting homes. Featuring search, filters, and a clean UI.",
    category: "Frontend",
    image: Image4,
    demoLink: "https://dancing-youtiao-914380.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/RealEstateModern",
  },
  {
    id: 4,
    title: "CH-Travels",
    description: "A modern travel agency app that helps users explore destinations and book trips.",
    category: "Frontend",
    image: Image3,
    demoLink: "https://shiny-scone-6fc98c.netlify.app",
    githubLink: "https://github.com/OkuekhamhenEromose/chardevtravel",
  },
  {
    id: 5,
    title: "Resume Builder",
    description: "Resume generation web app with backend support for user data and storage.",
    category: "Backend",
    image: Image1,
    demoLink: "https://renewschool-1.onrender.com",
    githubLink: "https://github.com/OkuekhamhenEromose/myresume",
  },
  {
    id: 6,
    title: "CHBlog App",
    description: "Full-Stack blog app with authentication, post management, and modern UI.",
    category: "Full-Stack",
    image: Image5,
    demoLink: "https://subtle-blini-446f27.netlify.app/",
    githubLink: "https://github.com/OkuekhamhenEromose/blogfrontcd",
  },
];

export const projectCategories = [
  { id: "all", name: "All Projects", count: 6 },
  { id: "Frontend", name: "Frontend", count: 3 },
  { id: "Backend", name: "Backend", count: 2 },
  { id: "Full-Stack", name: "Full-Stack", count: 1 },
];