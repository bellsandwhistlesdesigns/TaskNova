import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "@/constants/socialLinks";

type Props = {
  className?: string;
};

export default function SocialLinks({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
    <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
       <FaInstagram className="text-2xl text-yellow-400 hover:text-yellow-300 transition duration-300"/>
    </a>

    <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
    >
       <FaFacebook className="text-2xl text-yellow-400 hover:text-yellow-300 transition duration-300" />
    </a>
    <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <FaGithub className="text-2xl text-yellow-400 hover:text-yellow-300 transition duration-300" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl text-yellow-400 hover:text-yellow-300 transition duration-300" />
      </a>
    </div>
  );
}
