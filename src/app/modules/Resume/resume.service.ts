import { TResume } from "./resume.interface";
import { ResumeModel } from "./resume.model";

//Add Resume
const createResumeIntoDB = async (resumeData: TResume) => {
  const result = await ResumeModel.create(resumeData);
  return result;
};

///Get All Resume
const getAllResume = async () => {
  const res = await ResumeModel.find();
  return res;
};

//Get Single Resume
const getSingleResumeFromDB = async (resumeId: string) => {
  try {
    const result = await ResumeModel.findOne({ _id: resumeId });
    return result;
  } catch (error) {
    throw new Error("Resume Not Found");
  }
};

//delete Resume
const deletResumeFromDB = async (resumeId: string) => {
  //main work
  const result = await ResumeModel.findByIdAndDelete({ _id: resumeId });
  return result;
};

//Update Resume
const updateResumeFromDB = async (resumeID: string, resumeData: TResume) => {
  const result = await ResumeModel.findByIdAndUpdate(
    { _id: resumeID },
    resumeData,
    {
      new: true,
    }
  );
  return result;
};

export const ResumetServices = {
  createResumeIntoDB,
  getAllResume,
  getSingleResumeFromDB,
  deletResumeFromDB,
  updateResumeFromDB,
};
