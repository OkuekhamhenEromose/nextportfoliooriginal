import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import Link from "next/link";

interface SocialsProps {
  className?: string;
  isVertical?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ className = "", isVertical = false }) => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/eromose.eromose.1",
      icon: ImFacebook,
      color: "text-[#3b5998]",
      label: "Facebook",
    },
    {
      href: "https://x.com/EhiEromoCharles",
      icon: ImTwitter,
      color: "text-[#55acee]",
      label: "Twitter",
    },
    {
      href: "https://github.com/OkuekhamhenEromose",
      icon: ImGithub,
      color: "text-[#181616] dark:text-gray-300",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/eromosele-charles-152181337/",
      icon: ImLinkedin,
      color: "text-[#007bb6]",
      label: "LinkedIn",
    },
  ];

  return (
    <div className={className}>
      <ul
        className={`flex ${isVertical ? "flex-col gap-y-2" : "gap-x-3"} items-center justify-center`}
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <li
              key={social.label}
              className={social.color}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${
                    isVertical 
                      ? "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full" 
                      : "flex items-center justify-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  } 
                  transition-colors duration-300
                  transform hover:scale-110 transition-transform duration-300
                  animate-social-icon
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={social.label}
              >
                <IconComponent className="text-2xl" />
                {isVertical && (
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {social.label}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;