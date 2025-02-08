"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const projectShema = new mongoose_1.Schema({
    images: { type: String, required: [true, "Image is required"] },
    descriptions: { type: String, required: [true, "Description is required"] },
}, { timestamps: true });
exports.ProjectModel = (0, mongoose_1.model)("project", projectShema);
