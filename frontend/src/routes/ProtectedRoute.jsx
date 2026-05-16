
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
}) => {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Not admin
  if (
    user?.user?.role !== "admin"
  ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;