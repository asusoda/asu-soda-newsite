import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa6";
import { IoLogoFreebsdDevil } from "react-icons/io";

//Edit any changes to the SoDA URLs here
//Icons can be found at: https://react-icons.github.io/react-icons/
const socialMediaLinks = [
  {
    href: "https://thesoda.io/",
    icon: <CgWebsite className="hover:text-soda-red" />,
  },
  {
    href: "https://www.linkedin.com/company/thesoda/",
    icon: <FaLinkedin className="hover:text-soda-red" />,
  },
  {
    href: "https://www.instagram.com/soda.asu/",
    icon: <RiInstagramFill className="hover:text-soda-red" />,
  },
  {
    href: "https://discord.gg/the-software-developers-association-762811961238618122",
    icon: <FaDiscord />,
  },
  {
    href: "https://www.facebook.com/SoDAASU/",
    icon: <FaFacebookSquare className="hover:text-soda-red" />,
  },
  {
    href: "https://github.com/asusoda",
    icon: <FaGithub className="hover:text-soda-red" />,
  },
  {
    href: "https://asu.campuslabs.com/engage/organization/soda",
    icon: <IoLogoFreebsdDevil className="hover:text-soda-red" />,
  },
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
          className=""
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}
