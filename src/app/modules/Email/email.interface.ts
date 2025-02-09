import { Schema, model, connect, Types } from "mongoose";

export type TEmail = {
  name: string;
  email: string;
  message: string;
  isRead: boolean;
};
