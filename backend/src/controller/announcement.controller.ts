import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { AnnouncementModel } from "../model/announcement.model";

const AnnouncementController = {
    async get_announcement(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
}

export { AnnouncementController }
