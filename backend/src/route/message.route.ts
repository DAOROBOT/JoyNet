import { Router } from "express";
import { MessageController } from "../controller/message.controller";
const MessageRouter = Router();

MessageRouter.get("/", MessageController.get_message);

export { MessageRouter };
