import { Schema, model, connect, Types } from "mongoose";
import { TProject } from "./project.interface";

const projectShema = new Schema<TProject>(
  {
    images: { type: String, required: [true, "Image is required"] },
    descriptions: { type: String, required: [true, "Description is required"] },
  },
  { timestamps: true }
);

export const ProjectModel = model<TProject>("project", projectShema);
