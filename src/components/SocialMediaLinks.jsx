import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const socialMediaLinks = [
  { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { href: "https://www.instagram.com", icon: <RiInstagramFill /> },
  { href: "https://www.facebook.com", icon: <FaFacebookSquare /> },
  { href: "https://www.github.com", icon: <FaGithub /> },
  { href: "https://www.twitter.com", icon: <FaSquareXTwitter /> },
  { href: "https://www.yourwebsite.com", icon: <CgWebsite /> },
];

export default function SocialMediaLinks() {
  return (
    <section className="social-media-links">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}
