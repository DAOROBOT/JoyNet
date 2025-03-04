import { Router } from "express";
import { PostController } from "../controller/post.controller";
const PostRouter = Router();

PostRouter.get("/", PostController.get_post);


export {PostRouter};
