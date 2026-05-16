import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BlogPage from "../pages/BlogPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound";
import FullProjects from "../pages/FullProjects";
import ProtectedRoute from "./ProtectedRoute";
import BlogDetail from "../components/blogs/BlogDetails";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardHome from "../components/dashboard/DashBoardHome";
import ManageProjects from "../components/dashboard/ManageProjects";
import AddProject from "../components/dashboard/AddProject";
const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* MAIN WEBSITE ROUTES */}
        <Route
          path="/"
          element={<MainLayout />}
        >

          <Route
            index
            element={<Home />}
          />

          <Route
            path="login"
            element={<Login />}
          />

          <Route
            path="signup"
            element={<Signup />}
          />

          <Route
            path="blog"
            element={<BlogPage />}
          />

          <Route
            path="projects"
            element={<ProjectsPage />}
          />

          <Route
            path="contact"
            element={<ContactPage />}
          />

          <Route
            path="about"
            element={<AboutPage />}
          />
          <Route
  path="full-projects"
  element={<FullProjects />}
/>
<Route
  path="blog/:id"
  element={<BlogDetail />}
/>


        </Route>
        


        {/* DASHBOARD ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<DashboardHome />}
          />
          <Route
  path="projects"
  element={<ManageProjects />}
/>
<Route
  path="add-project"
  element={<AddProject />}
/>

        </Route>


        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;