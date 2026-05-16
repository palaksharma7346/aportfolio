import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
    >

      {/* IMAGE */}
      <div className="h-[240px] overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

      </div>


      {/* CONTENT */}
      <div className="p-6">

        <span className="text-cyan-400 text-sm">
          {blog.category}
        </span>

        <h2 className="text-2xl font-bold text-white mt-3 mb-4">
          {blog.title}
        </h2>

        <p className="text-slate-400 leading-relaxed mb-6">
          {blog.description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-500">
            {blog.date}
          </span>

          <Link
            to={`/blog/${blog.id}`}
            className="text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Read More →
          </Link>

        </div>

      </div>

    </motion.div>
  );
};

export default BlogCard;