

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import {
  getProjects,
} from "../../services/projectService";

import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const Projects = () => {

  const { user } = useAuth();


  // DATABASE PROJECTS
  const [projects, setProjects] =
    useState([]);


  // FILTER CATEGORY
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");


  // FETCH PROJECTS
  useEffect(() => {

    const fetchProjects =
      async () => {

        try {

          const data =
            await getProjects();

          setProjects(data);

        } catch (error) {

          console.log(error);

        }
      };

    fetchProjects();

  }, []);


  // FILTERS
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
  ];


  // FILTER LOGIC
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            selectedCategory
        );


  return (
    <section className="py-24 px-6 bg-slate-950">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 text-lg mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>

        </motion.div>


        {/* FILTER */}
        <ProjectFilter
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
        />


        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map(
            (project, index) => (

              <div
                key={
                  project._id ||
                  index
                }
                className="relative"
              >

                {/* PROJECT CARD */}
                <div
                  className={
                    !user &&
                    !project.public
                      ? "blur-sm pointer-events-none"
                      : ""
                  }
                >

                  <ProjectCard
                    project={project}
                  />

                </div>


                {/* LOCK OVERLAY */}
                {
                  !user &&
                  !project.public && (
                    <div className="absolute inset-0 flex items-center justify-center">

                      <Link
                        to="/login"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-xl font-semibold transition"
                      >
                        Unlock
                      </Link>

                    </div>
                  )
                }

              </div>
            )
          )}

        </div>


        {/* EMPTY STATE */}
        {
          projects.length === 0 && (
            <div className="text-center mt-20">

              <h2 className="text-3xl font-bold text-white mb-4">
                No Projects Yet
              </h2>

              <p className="text-slate-400">
                Projects added from dashboard
                will appear here.
              </p>

            </div>
          )
        }


        {/* LOGIN CTA */}
        {
          !user && (
            <div className="text-center mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <h2 className="text-4xl font-bold mb-4 text-white">
                Unlock Full Portfolio
              </h2>

              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Login to explore all projects,
                detailed case studies,
                resume download,
                and premium content.
              </p>

              <Link
                to="/login"
                className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black rounded-xl font-semibold transition"
              >
                Login Now
              </Link>

            </div>
          )
        }

      </div>

    </section>
  );
};

export default Projects;