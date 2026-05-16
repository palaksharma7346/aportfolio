import { Link }
from "react-router-dom";

import { useAuth }
from "../../context/AuthContext";


const NavLinks = ({
  mobile = false,
  closeMenu,
}) => {

  const {
    user,
    logout,
  } = useAuth();


  return (

    <div
      className={`

        flex

        ${
          mobile

            ? "flex-col items-start gap-6 px-8"

            : "items-center gap-8"
        }
      `}
    >

      <Link
        to="/"
        onClick={closeMenu}
      >
        Home
      </Link>

      <Link
        to="/projects"
        onClick={closeMenu}
      >
        Projects
      </Link>

      <Link
        to="/blog"
        onClick={closeMenu}
      >
        Blog
      </Link>

      <Link
        to="/contact"
        onClick={closeMenu}
      >
        Contact
      </Link>

      <Link
        to="/about"
        onClick={closeMenu}
      >
        About
      </Link>


      {/* ADMIN */}
      {
        user?.role === "admin" && (

          <Link
            to="/dashboard"

            onClick={closeMenu}

            className="
              text-cyan-400
            "
          >

            Dashboard

          </Link>
        )
      }


      {/* GUEST */}
      {
        !user && (
          <>

            <Link
              to="/login"

              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"

              onClick={closeMenu}
            >
              Signup
            </Link>

          </>
        )
      }


      {/* LOGGED IN */}
      {
        user && (

          <button
            onClick={() => {

              logout();

              closeMenu?.();
            }}

            className="
              text-red-400
            "
          >

            Logout

          </button>
        )
      }

    </div>
  );
};

export default NavLinks;