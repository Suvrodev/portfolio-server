import { Schema, model, connect, Types } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: [true, "Title is required"] },
    content: { type: String, required: [true, "Content is required"] },
    image: { type: String, required: [true, "Image is required"] },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Frontend Development",
        "Backend Development",
        "Full-Stack Development",
        "UI/UX Design",
        "Database Management",
        "DevOps & Deployment",
        "API Development",
        "Web Security",
        "Performance Optimization",
        "Testing & Debugging",
        "Mobile Responsive Design",
        "SEO & Web Analytics",
        "Content Management Systems (CMS)",
        "E-commerce Development",
        "Web3 & Blockchain Development",
      ],
    },
  },
  { timestamps: true }
);

export const BlogModel = model<TBlog>("blogs", blogSchema);
