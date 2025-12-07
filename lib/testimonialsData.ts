import image1 from "@/public/images/testimonials/brightnwachukwu.jpeg";
import image2 from "@/public/images/testimonials/enoch-olisa.jpeg";
import image3 from "@/public/images/testimonials/monicaholmsremmen.jpeg";
import image4 from "@/public/images/testimonials/samuelokpe.jpeg";
import image5 from "@/public/images/testimonials/michaelojemoron.jpeg";
import image6 from "@/public/images/testimonials/nathanielnosa.jpeg";
import { StaticImageData } from "next/image";

export interface Testimonial {
  id: number;
  text: string;
  image: StaticImageData;
  name: string;
  post: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Charles has an exceptional eye for detail. He approaches UI/UX challenges with creativity while ensuring performance and accessibility aren't compromised. What stands out most is his consistency — he always delivers with precision and a positive attitude, even under tight deadlines",
    image: image1,
    name: "Bright Nwachukwu",
    post: "Product/Project Management || Software Engineering: Heavy- Front End",
  },
  {
    id: 2,
    text: "Charles is more than just a talented developer — he's a professional who uplifts the entire team. His calm approach under pressure, willingness to mentor others, and ability to translate technical concepts into simple terms make him a rare asset. He combines empathy with expertise, and that's a quality you don't often find.",
    image: image2,
    name: "Enoch Olisa",
    post: "Software Quality Engineer with CTFL | Test Automation Engineer with CTAL-TAE | Software Project Manager with PMP",
  },
  {
    id: 3,
    text: "Charles is the kind of engineer every team needs. He's collaborative, reliable, and never shies away from responsibility. Beyond writing excellent code, he brings energy to discussions, asks the right questions, and motivates others to push their limits. A true problem-solver.",
    image: image3,
    name: "Monica Holm-Remmen",
    post: "Recruiter & Career Consultant. Connecting High-Performing Professionals and Top Talent with Leading Employers",
  },
  {
    id: 4,
    text: "What I admire most about Charles is his resilience and curiosity. He doesn't just stop at solving a bug — he digs deeper to understand why it happened and how to prevent it in the future. That mindset reflects his commitment to building not just apps, but sustainable solutions.",
    image: image4,
    name: "Samuel Okpe",
    post: "Software Engineer | Business Enthusiast",
  },
  {
    id: 5,
    text: "I've seen very few engineers who embrace learning as quickly and effectively as Charles. Whether it's mastering new frameworks, adopting best practices, or diving into DevOps tools, he adapts seamlessly. His attitude toward growth makes him a valuable teammate in any fast-paced environment.",
    image: image5,
    name: "Michael Ojemoron",
    post: "Entrepreneur|Cloud Architect|Community Builder|Technical Writer|MERN Stack|Python/Django|AI|LLM",
  },
  {
    id: 6,
    text: "Working with Charles has been an absolute privilege. His ability to break down complex problems into clear, scalable solutions shows not only strong technical skills but also a deep understanding of software engineering principles. He has an admirable discipline toward clean code and architecture",
    image: image6,
    name: "Nathaniel Nosa",
    post: "Full-Stack Developer | TypeScript | Django | MERN",
  },
];