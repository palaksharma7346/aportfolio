// import React from 'react'
// import { NavLink } from "react-router-dom";

// const Navlinks = ({ mobile = false, closeMenu }) => {
//     const links = [ { name: "Home", path: "/" },
//          { name: "Projects", path: "/projects" },
//           { name: "Blog", path: "/blog" },
//            { name: "Login", path: "/login" }, 
//            { name: "Signup", path: "/signup" },
//         { name: "Contact", path: "/contact" },
//     { name: "About", path: "/about" }, ];
//   return (
//      <ul
//       className={`flex ${
//         mobile
//           ? "flex-col gap-6 text-center"
//           : "flex-row items-center gap-8"
//       }`}
//     >
//       {links.map((link) => (
//         <li key={link.name}>
//           <NavLink
//             to={link.path}
//             onClick={closeMenu}
//             className={({ isActive }) =>
//               `transition duration-300 font-medium hover:text-cyan-400 ${
//                 isActive
//                   ? "text-cyan-400"
//                   : "text-white"
//               }`
//             }
//           >
//             {link.name}
//           </NavLink>
//         </li>
//          ))}
//     </ul>
//   )
// }

// export default Navlinks

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