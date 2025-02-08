import { Schema, model, connect, Types } from "mongoose";

export type TEmail = {
  subject: string;
  email: string;
  message: string;
  isRead: boolean;
};
