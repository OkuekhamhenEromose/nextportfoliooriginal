"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/IMG_9910-removebg-preview.png";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CharlesEromoseCV.pdf";
    link.download = "Charles_Eromose_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Lightweight code display component
  const CodeDisplay = () => (
    <div className="w-full max-w-lg sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl max-[375px]:max-w-[90%] max-[375px]:mx-auto">
      <div className="code-display overflow-x-auto rounded-lg max-[375px]:p-2 bg-slate-800/90 p-4">
        <pre className="text-xs sm:text-sm text-gray-200 font-mono whitespace-pre overflow-x-auto">
          {`const aboutMe = {
  name: "Charles Eromose",
  role: "Full Stack Engineer",
  experience: "4+ years",
  stack: {
    frontend: ["React", "Next.js", "TypeScript"],
    backend: ["Django", "Node.js", "Python"],
    database: ["PostgreSQL", "MySQL"],
    cloud: ["AWS", "Vercel"]
  },
  availability: "Open to opportunities 🚀"
};`}
        </pre>
      </div>
    </div>
  );

  return (
    <section id="home" className="section flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 lg:px-8 h-full">
        {/* Left Side - Content */}
        <div className="w-full lg:w-[53%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center mt-10 lg:mt-20 order-2 lg:order-1">
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold tracking-wider max-[375px]:text-xs animate-fade-in">
            Hello There!
          </p>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 lg:mb-4 leading-tight max-[375px]:text-xl max-[375px]:leading-snug whitespace-nowrap">
            I&apos;m <span className="text-[#003366] dark:text-blue-400">Charles Eromose</span>,
          </h1>

          {/* Code Block */}
          <div className="animate-fade-in-up">
            <CodeDisplay />
          </div>

          {/* Buttons */}
          <div className="mt-4 mb-6 flex sm:flex-row gap-4 justify-center lg:justify-start max-[375px]:flex-col max-[375px]:gap-2">
            <Link
              href="/portfolio"
              className="btn text-sm sm:text-base md:text-lg px-4 py-2 max-[375px]:w-full hover:scale-105 transition-transform duration-200"
            >
              View My Works
            </Link>

            <button
              onClick={handleDownloadCV}
              className="relative inline-flex items-center justify-center btn border border-blue-600 text-[#003366] dark:text-blue-400 group overflow-hidden bg-gray-300/30 backdrop-blur-md shadow-lg dark:bg-gray-800/50 text-sm sm:text-base md:text-lg px-4 py-2 max-[375px]:w-full hover:scale-105 transition-transform duration-200"
            >
              <span className="relative z-10">Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
          <Image
            src={HeroImage}
            alt="Charles Eromose"
            width={600}
            height={700}
            className="max-w-[70%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[80%] h-auto drop-shadow-lg max-[375px]:max-w-[75%] max-[375px]:mt-4"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}