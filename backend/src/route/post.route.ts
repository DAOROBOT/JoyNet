import { Router } from "express";
import { PostController } from "../controller/post.controller";
const PostRouter = Router();

PostRouter.get("/", PostController.get_post);
PostRouter.post("/create", PostController.create_post);//done
PostRouter.post("/reply", PostController.create_post);//done
PostRouter.delete("/delete", PostController.delete_post);//done

export { PostRouter };
