import { Router } from "express";
import { AnnouncementController } from "../controller/announcement.controller";
const AnnouncementRouter = Router();

AnnouncementRouter.get("/", AnnouncementController.get_announcement);

export { AnnouncementRouter };
