import { Router } from "express";
import { MessageController } from "../controller/message.controller";
const MessageRouter = Router();

MessageRouter.get("/", MessageController.get_message);
MessageRouter.post("/send", MessageController.send_message);
MessageRouter.delete("/delete", MessageController.delete_message);

export { MessageRouter };
