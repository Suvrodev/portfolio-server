import { Schema, model, connect, Types } from "mongoose";
import { TResume } from "./resume.interface";

const resumeShema = new Schema<TResume>(
  {
    link: {
      type: String,
      required: [true, "Resume link is required."],
    },
  },
  { timestamps: true, strict: "throw" } // This will make Mongoose throw an error for unknown fields
);

export const ResumeModel = model<TResume>("resume", resumeShema);
