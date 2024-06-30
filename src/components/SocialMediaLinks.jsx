import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

export default function SocialMediaLinks() {
  return (
    <section className="social-media-links">
      <FaLinkedin />
      <CgWebsite />
      <RiInstagramFill />
      <FaFacebookSquare />
      <FaGithub />
      <FaSquareXTwitter />
    </section>
  );
}
