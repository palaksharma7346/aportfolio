import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const ProjectTable = ({
  projects,
  handleDelete,
}) => {
  return (
    <div className="overflow-x-auto">

      <table className="w-full text-left">

        <thead>

          <tr className="border-b border-slate-800">

            <th className="py-4">
              Title
            </th>

            <th className="py-4">
              Category
            </th>

            <th className="py-4">
              Actions
            </th>

          </tr>

        </thead>


        <tbody>

          {projects.map((project) => (
            <tr
              key={project._id}
              className="border-b border-slate-800"
            >

              <td className="py-5">
                {project.title}
              </td>

              <td className="py-5">
                {project.category}
              </td>

              <td className="py-5 flex gap-4">

                <button className="text-cyan-400">
                  <FaEdit />
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      project._id
                    )
                  }
                  className="text-red-400"
                >
                  <FaTrash />
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProjectTable;