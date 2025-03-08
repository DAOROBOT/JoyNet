import { Request, Response, NextFunction } from "express";
import { AppError, success_handler } from "../app_response";
import { PostModel } from "../model/post.model";

const PostController = {
    async get_post(req: Request, res: Response, next: NextFunction) {

        PostModel.find({ _id: "jiojioa" }); // NOTE: mongoDB auto generated _id MAYBE?????
        const post = PostModel.find({ sender: "tuong" }); // or use sender

        // success_handler(res, post, 200);
        // next(new AppError(400, "BAD"))
    },

    async create_post(req: Request, res: Response, next: NextFunction) {
        try {
            const { content, image, video, embedded_link, censor, reply_to, uploader, group } = req.body;

            if (!content || !uploader) {
                return next(new AppError(400, "BAD"));
            }

            const newPost = new PostModel({
                content,
                image,
                video,
                embedded_link,
                censor,
                reply_to,
                uploader,
                group,
                created_date: Math.floor(Date.now() / 1000), // Lưu thời gian hiện tại dưới dạng Unix timestamp
                likes: [],
                shares: [],
                comments: [],
            });

            await newPost.save();

            res.status(201).json({ message: "Bài viết đã được tạo", post: newPost });
        } catch (error) {
            next(error);
        }
    },
}

export { PostController }
