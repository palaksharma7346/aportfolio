import Project from "../models/Project.js";

// CREATE PROJECT
export const createProject = async (
  req,
  res
) => {
  try {
    console.log(req.body);

      console.log(req.file);
    console.error("Create project req.file:", req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required",
      });
    }

    const imagePath =
      req.file.path ||
      req.file.secure_url ||
      req.file.url ||
      req.file.location;

    if (!imagePath) {
      return res.status(400).json({
        message: "Uploaded image path is missing",
      });
    }

    let tech = [];
    if (req.body.tech) {
      try {
        tech = JSON.parse(req.body.tech);
      } catch (parseError) {
        return res.status(400).json({
          message: "Invalid tech format",
        });
      }
    }

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      github: req.body.github,
      demo: req.body.demo,
      tech,
      image: imagePath,
      createdBy: req.user._id,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
};


// GET ALL PROJECTS
export const getProjects = async (
  req,
  res
) => {
  try {
    const projects =
      await Project.find().sort({
        createdAt: -1,
      });

    res.status(200).json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE PROJECT
export const getProject = async (
  req,
  res
) => {
  try {
    const project =
      await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE PROJECT
export const updateProject = async (
  req,
  res
) => {
  try {
    const updatedProject =
      await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(updatedProject);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE PROJECT
export const deleteProject = async (
  req,
  res
) => {
  try {
    await Project.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Project deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};