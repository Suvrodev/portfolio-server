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
exports.EmailControllers = void 0;
const email_service_1 = require("./email.service");
//Create Email
const createEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body;
        console.log("Come email: ", email);
        const result = yield email_service_1.emailService.createEmailIntoDB(email);
        //Send Response
        res.status(200).json({
            message: "Email Sent successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get All Email
const getAllEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield email_service_1.emailService.getAllEmailFromDB();
        // Send response with the results
        res.status(200).json({
            message: "Email retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Cart
const deleteEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailId = req.params.id;
        console.log("Email id: ", emailId);
        const result = yield email_service_1.emailService.deleteEmailFromDB(emailId);
        //Send Response
        res.status(200).json({
            message: "Email deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.EmailControllers = {
    createEmail,
    getAllEmail,
    deleteEmail,
};
