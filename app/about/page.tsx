import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter";
import AbtIMG from "@/public/images/IMG_9910-removebg-preview.png";

export default function About() {
  return (
    <section className="section">
      <div
        className="
          container mt-20 mx-auto h-full flex flex-col lg:flex-row items-center justify-center 
          gap-12 text-center lg:text-left px-4
          max-[375px]:gap-6 max-[375px]:px-3
        "
      >
        {/* Image */}
        <div
          className="w-full lg:w-1/3 flex justify-center animate-fade-in"
        >
          <div className="max-w-[450px] sm:max-w-[400px] max-[375px]:max-w-[260px]">
            <Image
              src={AbtIMG}
              alt="Charles Eromose"
              width={450}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              placeholder="blur"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          className="
            w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start
            max-[375px]:px-2
          "
        >
          <h1
            className="h1 mb-4 max-[375px]:text-2xl animate-fade-in-down"
          >
            About Me
          </h1>

          <div className="max-w-2xl">
            <p
              className="mb-4 leading-relaxed text-base max-[375px]:text-sm max-[375px]:leading-snug animate-fade-in-up"
            >
              I&apos;m Charles Eromose Okuekhahmen, a Full Stack Engineer with 4+
              years of experience in web development, databases, and network
              engineering. I&apos;ve built solutions from school systems to
              e-commerce and blogs, delivering clean UIs, efficient APIs, and
              secure databases that create real impact.
            </p>
            <p
              className="mb-6 leading-relaxed text-base max-[375px]:text-sm max-[375px]:leading-snug animate-fade-in-up delay-200"
            >
              I enjoy simplifying complex problems into scalable solutions—
              whether through query optimization, secure authentication, or
              cloud deployments with AWS. I&apos;m passionate about writing clean,
              maintainable code and building technology that truly makes a
              difference.
            </p>
          </div>

          <div className="animate-fade-in-up delay-400">
            <Link
              href="/portfolio"
              className="cursor-pointer btn text-base md:text-lg max-[375px]:text-sm max-[375px]:w-full hover:scale-105 transition-transform duration-200"
            >
              View My Works
            </Link>
          </div>

          {/* Counter Section */}
          <div
            className="w-full mt-10 mb-6 animate-fade-in-up delay-600"
          >
            <Counter />
          </div>
        </div>
      </div>
    </section>
  );
}