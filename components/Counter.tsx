"use client";

import React from "react";
import { FaHeart, FaUser, FaGlobe, FaCloud } from "react-icons/fa";

// Define the project data structure
interface ProjectItem {
  id: number;
  num: number;
  title: string;
  icon: React.ReactNode;
}

// Use your actual data from dummydata.js
const project: ProjectItem[] = [
  {
    id: 1,
    num: 65,
    title: "HAPPY CLIENTS",
    icon: <FaHeart className="text-[#003366] dark:text-blue-400 text-2xl md:text-3xl" />,
  },
  {
    id: 2,
    num: 101,
    title: "PROJECTS COMPLETED",
    icon: <FaUser className="text-[#003366] dark:text-blue-400 text-2xl md:text-3xl" />,
  },
  {
    id: 3,
    num: 108,
    title: "FILES DOWNLOADED",
    icon: <FaGlobe className="text-[#003366] dark:text-blue-400 text-2xl md:text-3xl" />,
  },
  {
    id: 4,
    num: 1446,
    title: "LINES OF CODE",
    icon: <FaCloud className="text-[#003366] dark:text-blue-400 text-2xl md:text-3xl" />,
  },
];

// Lightweight counter component with intersection observer
const CountUp = ({ end, duration = 3 }: { end: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = end / (duration * 60); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count}+</span>;
};

export default function Counter() {
  return (
    <div
      className="
        mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5
        max-[375px]:gap-3 max-[375px]:px-2
      "
    >
      {project.map((item, index) => (
        <div
          key={item.id}
          className="
            bg-white dark:bg-[#2a2a2d] rounded-lg shadow-md
            p-4 md:p-5 text-center border border-gray-100 dark:border-gray-700
            transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg
            max-[375px]:p-3 animate-counter-card
            hover:scale-105
          "
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Icon */}
          <div
            className="mb-1 md:mb-2 flex justify-center text-gray-800 dark:text-gray-200 max-[375px]:mb-1 animate-counter-icon"
            style={{ animationDelay: `${500 + index * 100}ms` }}
          >
            {item.icon}
          </div>

          {/* Number */}
          <h2
            className="h2 text-[#003366] dark:text-gray-200 mb-1 max-[375px]:text-lg animate-counter-number"
            style={{ animationDelay: `${700 + index * 100}ms` }}
          >
            <CountUp end={item.num} duration={3} />
          </h2>

          {/* Title */}
          <h3
            className="h3 text-[#003366] dark:text-gray-300 max-[375px]:text-xs animate-counter-title"
            style={{ animationDelay: `${900 + index * 100}ms` }}
          >
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}