import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import Projects from "../components/projects/Projects";

const FullProjects = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Projects />;
};

export default FullProjects;