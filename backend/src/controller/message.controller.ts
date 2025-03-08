import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { MessageModel } from "../model/message.model";

const MessageController = {
    async get_message(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },
}

export { MessageController }
