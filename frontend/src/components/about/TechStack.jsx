import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const TechStack = () => {
  const techs = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div>

      <h3 className="text-3xl font-bold mb-10 text-center">
        Tech Stack
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 transition"
          >
            <div className="text-5xl text-cyan-400 mb-4">
              {tech.icon}
            </div>

            <p>{tech.name}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default TechStack;