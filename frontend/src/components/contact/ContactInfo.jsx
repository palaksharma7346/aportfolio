import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

const ContactInfo = () => {

  const contactData = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "palak412005sharma@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 6230814537",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India",
    },
  ];


  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      <h3 className="text-3xl font-bold mb-6 text-white">
        Get In Touch
      </h3>

      <p className="text-slate-400 leading-relaxed mb-10">
        I’m always open to discussing
        new opportunities, freelance
        projects, collaborations,
        or creative ideas.
      </p>


      <div className="space-y-6">

        {contactData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start  sm:items-center gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl overflow-hidden"
          >

            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>

              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>

              <p className="text-slate-400 break-all
    text-sm
    sm:text-base">
                {item.value}
              </p>

            </div>

          </div>
        ))}

      </div>


      <div className="flex gap-5 mt-10">

        <a
          href="https://github.com/palaksharma7346"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/palak-sharma-4b253028a/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition"
        >
          <FaLinkedin />
        </a>

      </div>

    </motion.div>
  );
};

export default ContactInfo;