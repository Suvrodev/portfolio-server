import { Schema, model, connect, Types } from "mongoose";
import { TEmail } from "./email.interface";

const emailSchema = new Schema<TEmail>(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Invalid email format"],
    },
    message: { type: String, required: [true, "Message is required"] },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const EmailModel = model<TEmail>("email", emailSchema);
