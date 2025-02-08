import { Schema, model, connect, Types } from "mongoose";
import { TEmail } from "./email.interface";

const emailSchema = new Schema<TEmail>(
  {
    subject: { type: String, required: [true, "Subject is required"] },
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
