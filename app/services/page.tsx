import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/servicesData";

export default function Services() {
  return (
    <section className="section dark:bg-darkbg transition-colors duration-300">
      <div className="container mt-12 mx-auto px-3 sm:px-4 flex flex-col justify-between h-full py-4">
        {/* Heading */}
        <div
          className="text-center animate-fade-in-down"
        >
          <h1 className="h1 mb-2 text-[#003366] dark:text-gray-200">
            Services
          </h1>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-4 sm:gap-6 flex-grow place-items-center
          "
        >
          {services.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="
                  relative bg-white dark:bg-[#2a2a2d] 
                  rounded-xl p-4 sm:p-5 shadow-lg overflow-hidden 
                  group cursor-pointer max-w-xs w-full
                  max-[375px]:p-3
                  animate-service-card
                  hover:scale-105 hover:-translate-y-2
                  transition-all duration-300 ease-out
                "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <div
                    className="
                      w-12 h-12 sm:w-16 sm:h-16 
                      rounded-full flex items-center justify-center 
                      bg-gray-300/30 dark:bg-gray-700/50 
                      backdrop-blur-md shadow-lg 
                      group-hover:bg-gray-800 dark:group-hover:bg-gray-600 
                      transition-colors duration-300
                      animate-service-icon
                    "
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <IconComponent
                      className="
                        text-xl sm:text-2xl 
                        text-[#003366] dark:text-gray-200 
                        group-hover:text-white transition-colors duration-300
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-base sm:text-lg font-semibold 
                    text-center mb-2 
                    text-[#003366] dark:text-gray-200 
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 
                    transition-colors duration-300
                    animate-service-title
                  "
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-xs sm:text-sm 
                    text-center leading-relaxed 
                    text-gray-700 dark:text-gray-400 
                    group-hover:text-gray-800 dark:group-hover:text-gray-200 
                    transition-colors duration-300
                    animate-service-desc
                  "
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  {item.desc}
                </p>

                {/* View Project */}
                <div
                  className="
                    text-center mt-3 sm:mt-4 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                    animate-service-link
                  "
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <Link
                    href="/portfolio"
                    className="
                      text-blue-600 dark:text-blue-400 
                      text-xs sm:text-sm font-medium 
                      inline-flex items-center hover:underline
                      transition-colors duration-300
                    "
                  >
                    View Project <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}