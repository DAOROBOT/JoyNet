import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { ReportModel } from "../model/report.model";

const ReportController = {
    async get_report(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
}

export { ReportController }
