"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Skills from "@/components/Skills";
import { portfolioProjects, projectCategories } from "@/lib/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setFilteredProjects(
      categoryId === "all"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === categoryId)
    );
  };

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <section
      id="portfolio"
      className="section flex flex-col justify-center px-3 sm:px-4"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-20">
        {/* Left Text */}
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div
            className="text-center animate-fade-in-down"
          >
            <h1 className="h1 mb-2 text-[#003366] dark:text-gray-200">
              Portfolio
            </h1>
          </div>
          <p
            className="p mb-2 text-sm sm:text-base leading-relaxed animate-fade-in-left"
          >
            Here you&apos;ll find a collection of projects I&apos;ve built—ranging from
            full-stack applications to experiments. Each project reflects my
            focus on clean code, scalable architecture, and user-friendly
            design.
          </p>
          <p
            className="p mb-4 text-sm sm:text-base leading-relaxed animate-fade-in-left delay-200"
          >
            I enjoy turning ideas into working solutions, and this portfolio
            showcases the range of technologies and skills I bring to every
            build.
          </p>
          <div className="animate-fade-in-left delay-400 hover:scale-105 transition-transform duration-300">
            <Link href="/contact" className="btn px-4 py-2 text-sm sm:text-base">
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right Projects */}
        <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-portfolio-card hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={160}
                  className="w-full h-28 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white p-2 sm:p-4">
                    <h3 className="h3 text-xs text-white sm:text-sm mb-1">
                      {project.title}
                    </h3>
                    <p className="p text-white text-[10px] sm:text-xs mb-2 opacity-90">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition hover:scale-110"
                      >
                        <ExternalLink size={12} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition hover:scale-110"
                      >
                        <Github size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex mt-2 justify-center items-center gap-2 sm:gap-4 mb-2 animate-fade-in-up">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105"
                }`}
              >
                <ChevronLeft size={14} />
              </button>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105"
                }`}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 pt-2 animate-fade-in-up delay-300">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 py-1.5 text-[11px] sm:text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}{" "}
                <span className="opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <Skills />
    </section>
  );
}