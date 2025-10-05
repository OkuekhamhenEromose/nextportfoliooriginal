"use client";

import React from "react";

// Define the project data structure
interface ProjectItem {
  id: number;
  num: number;
  title: string;
  icon: React.ReactNode;
}

// Mock data - replace with your actual data
const project: ProjectItem[] = [
  {
    id: 1,
    num: 10,
    title: "Projects Completed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    num: 4,
    title: "Years Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    num: 15,
    title: "Technologies",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    num: 5,
    title: "Happy Clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

// Lightweight counter component
const CountUp = ({ end, duration = 3 }: { end: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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
  }, [end, duration]);

  return <span>{count}+</span>;
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