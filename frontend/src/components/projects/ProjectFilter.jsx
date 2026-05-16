const ProjectFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-14">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 rounded-full border transition duration-300 ${
            selectedCategory === category
              ? "bg-cyan-500 text-black border-cyan-500"
              : "border-slate-700 text-white hover:border-cyan-400"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
};

export default ProjectFilter;