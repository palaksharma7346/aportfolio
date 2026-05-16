import Project from "../models/Project.js";

export const getDashboardStats =
  async (req, res) => {

    try {

      const totalProjects =
        await Project.countDocuments();

      const latestProject =
        await Project.findOne()
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        totalProjects,
        latestProject,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };