// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     image: {
//       type: String,
//       required: true,
//     },

//     tech: {
//       type: [String],
//       required: true,
//     },

//     github: {
//       type: String,
//     },

//     demo: {
//       type: String,
//     },

//     featured: {
//       type: Boolean,
//       default: false,
//     },

//     category: {
//       type: String,
//       enum: [
//         "Frontend",
//         "Backend",
//         "Full Stack",
//       ],
//       required: true,
//     },

//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Project = mongoose.model(
//   "Project",
//   projectSchema
// );

// export default Project;

import mongoose from "mongoose";

const projectSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      image: {
        type: String,
      },

      github: {
        type: String,
      },

      demo: {
        type: String,
      },

      category: {
        type: String,
      },

      tech: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

const Project =
  mongoose.model(
    "Project",
    projectSchema
  );

export default Project;