import { Router } from "express";
import { PostController } from "../controller/post.controller";
const PostRouter = Router();

PostRouter.get("/", PostController.get_post);
PostRouter.post("/create", PostController.create_post);
PostRouter.post("/reply", PostController.create_post);
PostRouter.delete("/delete", PostController.delete_post);

export { PostRouter };
