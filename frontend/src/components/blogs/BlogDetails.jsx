import { useParams } from "react-router-dom";

import blogData from "./blogData";

const BlogDetails = () => {

  const { id } = useParams();

  const blog = blogData.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-24 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="rounded-3xl overflow-hidden mb-10">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[450px] object-cover"
          />

        </div>


        <div className="mb-6">

          <span className="text-cyan-400">
            {blog.category}
          </span>

          <h1 className="text-5xl font-bold text-white mt-4 mb-4">
            {blog.title}
          </h1>

          <p className="text-slate-500">
            By {blog.author} • {blog.date}
          </p>

        </div>


        <div className="text-slate-300 leading-relaxed text-lg space-y-6">

          <p>
            {blog.content}
          </p>

          <p>
            This article explains the architecture,
            implementation details,
            and best practices used
            while building the project.
          </p>

          <p>
            Modern web development requires
            scalable architecture,
            responsive design,
            authentication,
            and optimized APIs.
          </p>

        </div>

      </div>

    </section>
  );
};

export default BlogDetails;