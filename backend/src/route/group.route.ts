import { Router } from "express";
import { GroupController } from "../controller/group.controller";
const GroupRouter = Router();

GroupRouter.get("/", GroupController.get_group);

export { GroupRouter };
