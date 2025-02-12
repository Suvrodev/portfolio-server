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
exports.ResumetServices = void 0;
const resume_model_1 = require("./resume.model");
//Add Resume
const createResumeIntoDB = (resumeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resume_model_1.ResumeModel.create(resumeData);
    return result;
});
///Get All Resume
const getAllResume = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield resume_model_1.ResumeModel.find();
    return res;
});
//Get Single Resume
const getSingleResumeFromDB = (resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield resume_model_1.ResumeModel.findOne({ _id: resumeId });
        return result;
    }
    catch (error) {
        throw new Error("Resume Not Found");
    }
});
//delete Resume
const deletResumeFromDB = (resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield resume_model_1.ResumeModel.findByIdAndDelete({ _id: resumeId });
    return result;
});
//Update Resume
const updateResumeFromDB = (resumeID, resumeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resume_model_1.ResumeModel.findByIdAndUpdate({ _id: resumeID }, resumeData, {
        new: true,
    });
    return result;
});
exports.ResumetServices = {
    createResumeIntoDB,
    getAllResume,
    getSingleResumeFromDB,
    deletResumeFromDB,
    updateResumeFromDB,
};
