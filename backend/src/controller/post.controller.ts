import { Request, Response, NextFunction } from "express";
import {AppError, success_handler} from "../app_response";
import {PostModel} from "../model/post.model";

const PostController = {
    async get_post(req: Request, res: Response, next: NextFunction) {

        PostModel.find({_id: "jiojioa"}); // NOTE: mongoDB auto generated _id MAYBE?????
        const post = PostModel.find({sender: "tuong"}); // or use sender

        // success_handler(res, post, 200);
        // next(new AppError(400, "BAD"))
    }
}

export {PostController}
