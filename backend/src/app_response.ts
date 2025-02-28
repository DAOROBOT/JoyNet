import {Response} from "express";

class AppError extends Error {
    status_code: number;
    message: string;
    constructor(status_code: number, message: string) {
        super(message);
        this.status_code = status_code;
        this.message = message;
    }
}

const success_handler = (res: Response, data: any, status_code: number = 200) => {
    res.status(status_code).json({
        success: true,
        status_code,
        data
    });
}

export {success_handler, AppError}
