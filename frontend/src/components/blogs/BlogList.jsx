import { motion } from "framer-motion";

import BlogCard from "./BlogCard";

import blogsData from "./blogData";

const BlogList = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 min-h-screen">

      <div className="max-w-7xl mx-auto">

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
            My Blogs
          </p>

          <h1 className="text-5xl font-bold text-white">
            Articles & Insights
          </h1>

        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogList;