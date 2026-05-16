import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import ProjectTable from "./ProjectTable";

import {
  getProjects,
  deleteProject,
} from "../../services/projectservice";

const ManageProjects = () => {

  const [projects, setProjects] =
    useState([]);


  // FETCH PROJECTS
  const fetchProjects =
    async () => {

      try {

        const data =
          await getProjects();

        setProjects(data);

      } catch (error) {

        toast.error(
          "Failed to fetch projects"
        );

      }
    };


  useEffect(() => {
    fetchProjects();
  }, []);


  // DELETE
  const handleDelete =
    async (id) => {

      try {

        await deleteProject(id);

        toast.success(
          "Project deleted"
        );

        fetchProjects();

      } catch (error) {

        toast.error(
          "Delete failed"
        );

      }
    };


  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Manage Projects
      </h1>


      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <ProjectTable
          projects={projects}
          handleDelete={
            handleDelete
          }
        />

      </div>

    </div>
  );
};

export default ManageProjects;