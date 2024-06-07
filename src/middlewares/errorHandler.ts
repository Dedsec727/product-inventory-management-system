import { Request, Response, NextFunction } from "express";
import { ERRORS, ErrorType } from "../utils/Errors";

export const ErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    const error: ErrorType = res.locals.body || ERRORS.ROUTE_NOT_FOUND;
    return res.status(error.statusCode || 500).json({ code: error.code, message: error.message });
};