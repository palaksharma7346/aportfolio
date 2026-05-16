import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import profileImg from "../../assets/WhatsApp Image 2026-05-15 at 3.06.04 PM.jpeg";
import { Link } from "react-router-dom";
import resume from "../../assets/resume_ccheck.pdf";
import { useAuth } from "../../context/AuthContext";
const HeroContent = () => {
  const { user } = useAuth();

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Palak Sharma
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
          Full Stack Developer
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
          I build modern, scalable and responsive web applications
          with beautiful UI/UX and powerful backend systems.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-8">

          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-xl font-semibold">
            Hire Me
          </button>

          
          {
    user ? (
      <a
        href={resume}
        download
        className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
      >
        Download Resume
      </a>
    ) : (
      <Link
        to="/login"
        className="px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-600 transition"
      >
        Login to Download Resume
      </Link>
    )
  }

        </div>

        {/* SOCIAL LINKS */}
        <SocialLinks />
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative">

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

          {/* PROFILE IMAGE */}
          <img
            src={profileImg}
            alt="profile"
            className="relative w-[320px] md:w-[420px] h-[300px] md:h-[500px] rounded-3xl border border-slate-700 shadow-2xl"
          />
        </div>
      </motion.div>

    </div>
  );
};

export default HeroContent;