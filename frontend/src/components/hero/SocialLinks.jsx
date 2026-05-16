import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">

      <a
        href="https://github.com/palaksharma7346"
        className="text-3xl text-slate-400 hover:text-cyan-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/palak-sharma-4b253028a/"
        className="text-3xl text-slate-400 hover:text-cyan-400 transition"
      >
        <FaLinkedin />
    
      </a>

      <a
        href="https://www.instagram.com/_palak_sharma_1111/"
        className="text-3xl text-slate-400 hover:text-cyan-400 transition"
      >
        <FaInstagram />
      </a>

    </div>
  );
};

export default SocialLinks;