

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const NavLinks = () => {

  const { user, logout } =
    useAuth();

  return (
    <div className="flex items-center gap-8">

      <Link to="/">
        Home
      </Link>

      <Link to="/projects">
        Projects
      </Link>

      <Link to="/blog">
        Blog
      </Link>

      <Link to="/contact">
        Contact
      </Link>

      <Link to="/about">
        About
      </Link>


      {/* ADMIN */}
      {
        user?.role === "admin" && (
          <Link
            to="/dashboard"
            className="hidden md:inline text-cyan-400"
          >
            Dashboard
          </Link>
        )
      }


      {/* GUEST */}
      {
        !user && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
        )
      }


      {/* LOGGED IN */}
      {
        user && (
          <button
            onClick={logout}
            className="text-red-400"
          >
            Logout
          </button>
        )
      }

    </div>
  );
};

export default NavLinks;