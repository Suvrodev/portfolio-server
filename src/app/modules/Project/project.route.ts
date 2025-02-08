import express from "express";

import auth from "../../middleware/auth";
import { ProjectControllers } from "./project.controller";
const router = express.Router();

//will call controller function
router.post("/", ProjectControllers.createProject);
router.get("/", ProjectControllers.getAllProject);
router.get("/:id", ProjectControllers.getSingleProject);
router.delete("/:id", ProjectControllers.deleteProject);
router.patch("/update/:id", ProjectControllers.updateProject);

export const projectRoutes = router;
