import express from "express";

import auth from "../../middleware/auth";
import { EmailControllers } from "./email.controller";

const router = express.Router();

//will call controller function
router.post("/", EmailControllers.createEmail);
router.get("/", EmailControllers.getAllEmail);
router.delete("/:id", EmailControllers.deleteEmail);
router.patch("/update/:id", EmailControllers.updateEmail);

export const emailRoutes = router;
