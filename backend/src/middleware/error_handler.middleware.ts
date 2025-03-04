import { Request, Response, NextFunction } from 'express';
import {AppError} from "../app_response";

const ErrorHandler = (err: any | AppError, req: Request, res: Response, next: NextFunction) => {
    const status_code = err?.status_code || 500;
    let message = err?.message || "Internal server error";
    if (status_code == 500) message = "Internal server error";

    if (status_code == 500) console.log(err);
    else console.log(`Error ${status_code}: ${message}`);

    res.status(status_code).json({
        success: false,
        status_code,
        data: message,
    });
};

export {ErrorHandler, AppError};

