import { Router } from "express";
import { PostController } from "../controller/post.controller";
const PostRouter = Router();

PostRouter.get("/", PostController.get_post);
PostRouter.post("/create", PostController.create_post);


export { PostRouter };
