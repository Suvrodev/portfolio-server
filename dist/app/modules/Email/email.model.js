"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModel = void 0;
const mongoose_1 = require("mongoose");
const emailSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name is required"] },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/.+@.+\..+/, "Invalid email format"],
    },
    message: { type: String, required: [true, "Message is required"] },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });
exports.EmailModel = (0, mongoose_1.model)("email", emailSchema);
