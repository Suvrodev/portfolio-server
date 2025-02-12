"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeControllers = void 0;
const resume_service_1 = require("./resume.service");
//Create Resume
const createResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resume = req.body;
        console.log("Resume body: ", resume);
        //will call service function to send data in db
        const result = yield resume_service_1.ResumetServices.createResumeIntoDB(resume);
        //Send Response
        res.status(200).json({
            message: "Resume Added successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All Resume
const getAllResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield resume_service_1.ResumetServices.getAllResume();
        // Send response with the results
        res.status(200).json({
            message: "Resume retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get Single Resume
const getSingleResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const resumeId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield resume_service_1.ResumetServices.getSingleResumeFromDB(resumeId);
        // Send response with the results
        res.status(200).json({
            message: "Resume retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Resume
const deleteResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.id;
        const result = yield resume_service_1.ResumetServices.deletResumeFromDB(resumeId);
        //Send Response
        res.status(200).json({
            message: "Resume deleted successfully ",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update Resume
const updateResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.id;
        const resumeBody = req === null || req === void 0 ? void 0 : req.body;
        const result = yield resume_service_1.ResumetServices.updateResumeFromDB(resumeId, resumeBody);
        //Send Response
        res.status(200).json({
            message: "Project updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ResumeControllers = {
    createResume,
    getAllResume,
    getSingleResume,
    deleteResume,
    updateResume,
};
