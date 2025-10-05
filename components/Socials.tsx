import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import Link from "next/link";

interface SocialsProps {
  className?: string;
  isVertical?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ className = "", isVertical = false }) => {
  const socialLinks = [
    { icon: <ImFacebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <ImTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <ImGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <ImLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className={`${className} ${isVertical ? 'flex-col' : 'flex-row'} flex ${isVertical ? 'gap-1' : 'gap-4'} items-center`}>
      {socialLinks.map((social, index) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-blue-400
            transition-all duration-300 transform hover:scale-110
            animate-social-icon
          "
          style={{ animationDelay: `${index * 100}ms` }}
          aria-label={social.label}
        >
          <span className="text-lg">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;