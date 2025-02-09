import AppError from "../../errors/AppError";
import { TEmail } from "./email.interface";
import { EmailModel } from "./email.model";

//Insert Email
const createEmailIntoDB = async (emailData: TEmail) => {
  console.log("Email Data: ", emailData);
  const result = await EmailModel.create(emailData);
  return result;
};

// Get all Email
const getAllEmailFromDB = async () => {
  const result = await EmailModel.find().sort({ createdAt: -1 });
  return result;
};

//delete Email
const deleteEmailFromDB = async (emailId: string) => {
  console.log("Come Email id in Service: ", emailId);
  const result = await EmailModel.findByIdAndDelete({ _id: emailId });
  return result;
};

//update Email
const updateEmailFromDB = async (emailId: string, emailData: TEmail) => {
  console.log("Come Email id in Service: ", emailId);
  console.log("Come Email Data in Service: ", emailData);
  //   const result = await EmailModel.findByIdAndDelete({ _id: emailId });
  const result = await EmailModel.findByIdAndUpdate(
    { _id: emailId },
    emailData,
    {
      new: true,
    }
  );
  return result;
};

export const emailService = {
  createEmailIntoDB,
  getAllEmailFromDB,
  deleteEmailFromDB,
  updateEmailFromDB,
};
