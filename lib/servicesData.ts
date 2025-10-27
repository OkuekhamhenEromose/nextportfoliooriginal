import { 
  FaPalette,  
  FaMobile, 
  FaServer, 
  FaCloud, 
  FaCode,  
  FaDatabase,
} from "react-icons/fa";

export interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { 
    id: 1, 
    icon: FaPalette, 
    title: "UI/UX & Creative Design", 
    desc: "Intuitive, user-centered interfaces that combine aesthetics with functionality to engage and convert users." 
  },
  { 
    id: 2, 
    icon: FaCode, 
    title: "Full-Stack Development", 
    desc: "End-to-end development from responsive frontends to powerful backends, APIs, and databases for robust web applications." 
  },
  { 
    id: 3, 
    icon: FaMobile, 
    title: "Responsive & Cross-Device Apps", 
    desc: "Websites and apps that adapt seamlessly across devices, ensuring consistent speed and performance everywhere." 
  },
  { 
    id: 4, 
    icon: FaServer, 
    title: "Scalable Architecture", 
    desc: "Designing and deploying systems that scale efficiently, handle traffic growth, and maintain performance under load." 
  },
  { 
    id: 5, 
    icon: FaCloud, 
    title: "Cloud & DevOps (AWS/Docker)", 
    desc: "Deployment and management on AWS cloud, containerization with Docker, and CI/CD pipelines for faster, reliable delivery." 
  },
  { 
    id: 6, 
    icon: FaDatabase, 
    title: "Database Management", 
    desc: "Designing, optimizing, and maintaining SQL/NoSQL databases to ensure secure, efficient, and scalable data handling." 
  },
];