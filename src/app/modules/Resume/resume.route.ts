import express from "express";

import { ResumeControllers } from "./resume.controller";
const router = express.Router();

//will call controller function
router.post("/", ResumeControllers.createResume);
router.get("/", ResumeControllers.getAllResume);
router.get("/:id", ResumeControllers.getSingleResume);
router.delete("/:id", ResumeControllers.deleteResume);
router.patch("/update/:id", ResumeControllers.updateResume);

export const resumeRoutes = router;
