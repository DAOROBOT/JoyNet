import { Router } from "express";
import { UserController } from "../controller/user.controller";
const UserRouter = Router();

UserRouter.get("/", UserController.get_user);
UserRouter.patch("/setting", UserController.setting_user);
export { UserRouter };
