const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "JWT",
    "Firebase",
    "Git",
    "REST APIs",
  ];

  return (
    <div>

      <h3 className="text-3xl font-bold mb-10 text-center">
        Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-5">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </div>
  );
};

export default Skills;