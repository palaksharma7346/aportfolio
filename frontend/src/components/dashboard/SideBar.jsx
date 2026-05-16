import {
  FaHome,
  FaPlus,
  FaFolderOpen,
  FaBars,
} from "react-icons/fa";

import { HiX } from "react-icons/hi";

import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { useState } from "react";

const SideBar = () => {
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Add Project",
      path: "/dashboard/add-project",
      icon: <FaPlus />,
    },

    {
      name: "Projects",
      path: "/dashboard/projects",
      icon: <FaFolderOpen />,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-[70px] w-full items-center justify-between border-b border-slate-800 bg-slate-900 px-4 md:hidden">
        <h1 className="text-xl font-bold text-cyan-400">
          Admin Panel
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-white"
        >
          <FaBars />
        </button>
      </header>

      <aside className="hidden md:fixed md:left-0 md:top-0 md:flex md:h-screen md:w-[270px] md:flex-col md:bg-slate-900 md:p-6">
        <h1 className="mb-10 text-3xl font-bold text-cyan-400">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-5 py-4 transition ${
                  isActive
                    ? "bg-cyan-500 text-black"
                    : "text-white hover:bg-slate-800"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto rounded-2xl bg-red-500 px-5 py-4 font-semibold text-black"
        >
          Logout
        </button>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] bg-slate-900 p-5 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-cyan-400">
            Menu
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-white"
          >
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-4 transition ${
                  isActive
                    ? "bg-cyan-500 text-black"
                    : "text-white hover:bg-slate-800"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="mt-4 rounded-2xl bg-red-500 px-5 py-4 font-semibold text-black"
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default SideBar;