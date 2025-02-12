import { NextFunction, Request, RequestHandler, Response } from "express";

import AppError from "../../errors/AppError";
import { ResumetServices } from "./resume.service";

//Create Resume
const createResume: RequestHandler = async (req, res, next) => {
  try {
    const resume = req.body;
    console.log("Resume body: ", resume);
    //will call service function to send data in db
    const result = await ResumetServices.createResumeIntoDB(resume);

    //Send Response
    res.status(200).json({
      message: "Resume Added successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Resume
const getAllResume: RequestHandler = async (req, res, next) => {
  try {
    const result = await ResumetServices.getAllResume();

    // Send response with the results
    res.status(200).json({
      message: "Resume retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get Single Resume
const getSingleResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req?.params?.id;
    const result = await ResumetServices.getSingleResumeFromDB(resumeId);

    // Send response with the results
    res.status(200).json({
      message: "Resume retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Delete Resume
const deleteResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req.params.id;
    const result = await ResumetServices.deletResumeFromDB(resumeId);

    //Send Response
    res.status(200).json({
      message: "Resume deleted successfully ",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Resume
const updateResume: RequestHandler = async (req, res, next) => {
  try {
    const resumeId = req.params.id;
    const resumeBody = req?.body;
    const result = await ResumetServices.updateResumeFromDB(
      resumeId,
      resumeBody
    );

    //Send Response
    res.status(200).json({
      message: "Project updated successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const ResumeControllers = {
  createResume,
  getAllResume,
  getSingleResume,
  deleteResume,
  updateResume,
};
