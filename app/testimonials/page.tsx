"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonialsData";

// Company logos
import logo1 from "@/public/images/logo/kuda.png";
import logo2 from "@/public/images/logo/aws.jpeg";
import logo3 from "@/public/images/logo/dangote.png";
import logo4 from "@/public/images/logo/google.png";
import logo5 from "@/public/images/logo/linkedin.png";
import logo6 from "@/public/images/logo/paystack.png";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Company logos data
  const companies = [
    { name: "Google", logo: logo4 },
    { name: "Dangote", logo: logo3 },
    { name: "AWS", logo: logo2 },
    { name: "Kuda", logo: logo1 },
    { name: "LinkedIn", logo: logo5 },
    { name: "Paystack", logo: logo6 },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveSlide((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section flex-col text-center py-4">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Heading */}
        <div className="animate-fade-in-down">
          <h2 className="h2 mt-12 mb-4 text-[#003366] dark:text-gray-200">
            What People Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-8 relative">
          <div className="relative bg-white dark:bg-[#2a2a2d] rounded-2xl shadow-lg p-6 sm:p-8 mx-auto max-w-4xl">
            {/* Quote Icon */}
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-6 animate-fade-in">
              <FaQuoteLeft />
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[200px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-in-out ${
                    index === activeSlide
                      ? "opacity-100 translate-y-0 animate-testimonial-slide"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  <p className="p italic mb-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md animate-testimonial-image"
                      />
                    </div>

                    <h3 className="h3 text-[#003366] dark:text-gray-200 mb-1">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.post}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-blue-600 dark:bg-blue-400 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Companies Section */}
        <div className="py-8 animate-fade-in-up">
          <h3 className="h3 mt-2 mb-8 text-[#003366] dark:text-gray-200">
            Companies in Contact With
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex justify-center animate-company-logo"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className={`object-contain hover:grayscale-0 transition-all duration-300 ${
                    company.name === "Spotify" ? "h-36" : "h-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;