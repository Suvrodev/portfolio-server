"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const email_route_1 = require("../modules/Email/email.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const project_route_1 = require("../modules/Project/project.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.userRoutes,
    },
    {
        path: "/login",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/email",
        route: email_route_1.emailRoutes,
    },
    {
        path: "/blog",
        route: blog_route_1.blogRoutes,
    },
    {
        path: "/project",
        route: project_route_1.projectRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
