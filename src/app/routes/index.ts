import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { emailRoutes } from "../modules/Email/email.route";
import { blogRoutes } from "../modules/Blog/blog.route";
import { projectRoutes } from "../modules/Project/project.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/login",
    route: AuthRoutes,
  },

  {
    path: "/email",
    route: emailRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
