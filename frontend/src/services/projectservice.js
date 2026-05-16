import axiosInstance from "../api/axiosInstance";

export const getProjects = async () => {
  const response = await axiosInstance.get("/projects");
  return response.data;
};

export const createProject = async (projectData) => {
  const formData = new FormData();

  formData.append("title", projectData.title || "");
  formData.append("description", projectData.description || "");
  formData.append("category", projectData.category || "Full Stack");
  formData.append("github", projectData.github || "");
  formData.append("demo", projectData.demo || "");
  formData.append("tech", JSON.stringify(projectData.tech || []));

  if (projectData.image) {
    formData.append("image", projectData.image);
  }

  const response = await axiosInstance.post("/projects", formData);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axiosInstance.delete(`/projects/${id}`);
  return response.data;
};

export const updateProject = async (id, updatedData) => {
  const response = await axiosInstance.put(`/projects/${id}`, updatedData);
  return response.data;
};