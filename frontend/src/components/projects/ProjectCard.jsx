import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import FeaturedBadge from "./FeaturedBadge";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg"
    >

      {project.featured && <FeaturedBadge />}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[240px] object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">

          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="flex items-center gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
          >
            <FiExternalLink />
            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;