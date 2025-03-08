import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { UserModel } from "../model/user.model";

const UserController = {
    async get_user(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
}

export { UserController }
