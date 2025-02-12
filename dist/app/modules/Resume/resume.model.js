"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModel = void 0;
const mongoose_1 = require("mongoose");
const resumeShema = new mongoose_1.Schema({
    link: {
        type: String,
        required: [true, "Resume link is required."],
    },
}, { timestamps: true, strict: "throw" } // This will make Mongoose throw an error for unknown fields
);
exports.ResumeModel = (0, mongoose_1.model)("resume", resumeShema);
