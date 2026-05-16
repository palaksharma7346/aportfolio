import express from "express";

import protect, {
  adminOnly,
} from "../middleware/authMiddleware.js";
import upload
from "../middleware/uploadMiddleware.js";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();


// PUBLIC ROUTES
router.get("/", getProjects);

router.get("/:id", getProject);


// ADMIN ROUTES
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createProject
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProject
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProject
);

export default router;