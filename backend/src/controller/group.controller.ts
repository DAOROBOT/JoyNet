import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { GroupModel } from "../model/group.model";

const GroupController = {
    async get_group(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
    async create_group(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
    async delete_group(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
    async setting_group(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
}

export { GroupController }
