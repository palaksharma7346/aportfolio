import { useState } from "react";

import toast from "react-hot-toast";

import {
  createProject,
} from "../../services/projectService";

const ProjectForm = () => {

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      image: "",
      github: "",
      demo: "",
      category: "Full Stack",
      tech: "",
    });


  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };


  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const projectData = {
        ...formData,

        tech:
          formData.tech.split(","),
      };

      await createProject(
        projectData
      );

      toast.success(
        "Project created successfully"
      );

      setFormData({
        title: "",
        description: "",
        image: "",
        github: "",
        demo: "",
        category: "Full Stack",
        tech: "",
      });

    } catch (error) {
      console.log(
  error.response.data
);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
    >

      <h2 className="text-3xl font-bold mb-8">
        Add New Project
      </h2>


      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 outline-none"
        />


        <input
        type="file"
        name="image"
        accept="image/*"
        required
        onChange={(e) =>
          setFormData({
            ...formData,
            image: e.target.files[0],
          })
        }
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700"
      />

        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 outline-none"
        />


        <input
          type="text"
          name="demo"
          placeholder="Live Demo URL"
          value={formData.demo}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 outline-none"
        />

      </div>


      {/* DESCRIPTION */}
      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full mt-6 p-4 rounded-xl bg-slate-800 outline-none h-[180px]"
      />


      {/* TECH STACK */}
      <input
        type="text"
        name="tech"
        placeholder="React, Node.js, MongoDB"
        value={formData.tech}
        onChange={handleChange}
        className="w-full mt-6 p-4 rounded-xl bg-slate-800 outline-none"
      />


      {/* CATEGORY */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full mt-6 p-4 rounded-xl bg-slate-800 outline-none"
      >

        <option>
          Frontend
        </option>

        <option>
          Backend
        </option>

        <option>
          Full Stack
        </option>

      </select>


      {/* BUTTON */}
      <button
        type="submit"
        className="mt-8 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black rounded-xl font-semibold transition"
      >
        Create Project
      </button>

    </form>
  );
};

export default ProjectForm;