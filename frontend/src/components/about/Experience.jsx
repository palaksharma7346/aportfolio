const Experience = () => {
  const experiences = [
    {
      year: "2025",
      title: "Frontend Developer",
      company: "Freelance",
    },
    {
      year: "2026",
      title: "Full Stack Developer",
      company: "Portfolio Projects",
    },
  ];

  return (
    <div>

      <h3 className="text-3xl font-bold mb-10 text-center">
        Experience Timeline
      </h3>

      <div className="space-y-8 max-w-3xl mx-auto">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
          >
            <p className="text-cyan-400 mb-2">
              {exp.year}
            </p>

            <h4 className="text-2xl font-semibold mb-2">
              {exp.title}
            </h4>

            <p className="text-slate-400">
              {exp.company}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Experience;