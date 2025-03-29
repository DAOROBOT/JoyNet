import { Router } from "express";
import { GroupController } from "../controller/group.controller";
const GroupRouter = Router();

GroupRouter.get("/", GroupController.get_group);
GroupRouter.post("/create", GroupController.create_group);
GroupRouter.delete("/delete", GroupController.delete_group);
GroupRouter.patch("/setting", GroupController.setting_group);
export { GroupRouter };
