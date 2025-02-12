"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const resume_controller_1 = require("./resume.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", resume_controller_1.ResumeControllers.createResume);
router.get("/", resume_controller_1.ResumeControllers.getAllResume);
router.get("/:id", resume_controller_1.ResumeControllers.getSingleResume);
router.delete("/:id", resume_controller_1.ResumeControllers.deleteResume);
router.patch("/update/:id", resume_controller_1.ResumeControllers.updateResume);
exports.resumeRoutes = router;
