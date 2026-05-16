import {
  FaBell,
  FaUserCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const DashboardNavbar = () => {

  const { user } = useAuth();

  return (
    <header className="h-[90px] border-b border-slate-800 bg-slate-900 px-10 flex items-center justify-between overflow-hidden w-[900px]">

      {/* LEFT */}
      <div className="flex flex-col gap-1 overflow-hidden">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-1">
          Welcome back, {user?.name}
        </p>

      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-2 overflow-hidden w-[400px]">

        {/* VIEW PORTFOLIO */}
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
        >

          <FaExternalLinkAlt />

          View Portfolio

        </Link>


        {/* NOTIFICATIONS */}
        <button className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-xl hover:bg-slate-700 transition">

          <FaBell />

        </button>


        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-2xl">

          <FaUserCircle className="text-3xl text-cyan-400" />

          <div>

            <p className="font-semibold">
              {user?.name}
            </p>

            <p className="text-sm text-slate-400">
              {user?.role}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;