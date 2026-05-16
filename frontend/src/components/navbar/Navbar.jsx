import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLinks from "./Navlinks";
import MobileMenus from "./MobileMenus";
import { Link } from "react-router-dom";
const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-cyan-400">
            Palak.dev
          </h1>

          <div className="hidden md:flex items-center gap-6">


            <NavLinks />

          </div>

          <button
            onClick={openMenu}
            className="md:hidden text-white text-3xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      <MobileMenus
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
    </>
  );
}

export default Navbar;