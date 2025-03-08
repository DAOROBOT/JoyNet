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
            likes: [],
            shares: [],
            comments: [],
        });

        await newPost.save();

        return next(new AppError(201, "Post created successfully"));
    },

    // async reply_post(req: Request, res: Response, next: NextFunction) {
    // },

    async delete_post(req: Request, res: Response, next: NextFunction) {
        const { postId } = req.params;

        if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
            return next(new AppError(400, "invalid id"));
        }

        const deletedPost = await PostModel.findByIdAndDelete(postId);

        if (!deletedPost) {
            return next(new AppError(400, "Post does not exist"));
        }

        return next(new AppError(200, "Post delete successfully"));
    }
}

export { PostController }
