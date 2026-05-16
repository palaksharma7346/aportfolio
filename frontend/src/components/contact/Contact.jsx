import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-950 ">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 text-lg mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s Work Together
          </h2>

        </motion.div>


        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT */}
          <ContactInfo />

          {/* RIGHT */}
          <ContactForm />

        </div>

      </div>

    </section>
  );
};

export default Contact;