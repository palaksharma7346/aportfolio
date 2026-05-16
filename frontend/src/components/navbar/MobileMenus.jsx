import NavLinks from "./Navlinks";
import { HiX } from "react-icons/hi";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] bg-slate-900 z-[100] transform transition-transform duration-300 ${
        isOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >

      <div className="flex justify-end p-5">
        <button
          onClick={closeMenu}
          className="text-white text-3xl"
        >
          <HiX />
        </button>
      </div>


      <div className="mt-10">
        <NavLinks
          mobile={true}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
}

export default MobileMenu;