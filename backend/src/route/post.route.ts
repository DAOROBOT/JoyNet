import { Router } from "express";
import { PostController } from "../controller/post.controller";
const PostRoute = Router();

PostRoute.get("/", PostController.get_post);


export {PostRoute};
