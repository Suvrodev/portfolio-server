import { NextFunction, Request, RequestHandler, Response } from "express";

import AppError from "../../errors/AppError";
import { emailService } from "./email.service";

//Create Email
const createEmail: RequestHandler = async (req, res, next) => {
  try {
    const email = req.body;

    console.log("Come email: ", email);

    const result = await emailService.createEmailIntoDB(email);

    //Send Response
    res.status(200).json({
      message: "Email Sent successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Email
const getAllEmail: RequestHandler = async (req, res, next) => {
  try {
    const result = await emailService.getAllEmailFromDB();

    // Send response with the results
    res.status(200).json({
      message: "Email retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Delete Cart
const deleteEmail: RequestHandler = async (req, res, next) => {
  try {
    const emailId = req.params.id;
    console.log("Email id: ", emailId);
    const result = await emailService.deleteEmailFromDB(emailId);

    //Send Response
    res.status(200).json({
      message: "Email deleted successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const EmailControllers = {
  createEmail,
  getAllEmail,
  deleteEmail,
};
