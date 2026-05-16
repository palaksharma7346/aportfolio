import { motion } from "framer-motion";
import image from "../../assets/WhatsApp Image 2026-05-15 at 3.06.04 PM.jpeg";
import Skills from "./Skills";
import Experience from "./Experience";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section className="py-24 bg-slate-900 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 text-lg mb-3">
            Get To Know More
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
  src={image}
  alt="about"
  className="h-[300px] md:h-[500px] w-auto rounded-3xl border border-slate-700 shadow-2xl"
/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-slate-400 leading-relaxed text-lg mb-8">
               I am a B.Tech Computer Science and Engineering student at 
  National Institute of Technology Hamirpur, passionate about 
  full-stack web development and problem solving. I enjoy building 
  modern and responsive web applications using technologies like 
  React.js, Node.js, Express.js, and MongoDB. 
  
  I am constantly learning new technologies and improving my skills 
  in frontend and backend development to create impactful and 
  user-friendly digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h4 className="text-cyan-400 text-xl font-semibold mb-2">
                  Experience
                </h4>

                <p className="text-slate-300">
                  1+ Years
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h4 className="text-cyan-400 text-xl font-semibold mb-2">
                  Projects
                </h4>

                <p className="text-slate-300">
                  15+ Completed
                </p>
              </div>

            </div>
          </motion.div>

        </div>

       
        <div className="mt-24">
          <Skills />
        </div>

        
        <div className="mt-24">
          <TechStack />
        </div>

       
        <div className="mt-24">
          <Experience />
        </div>

      </div>

    </section>
  );
};

export default About;