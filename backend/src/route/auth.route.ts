import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import {AsyncRouteWrapper} from "../util/route_wrapper"
const AuthRouter = Router();

AuthRouter.post("/login", AsyncRouteWrapper(AuthController.login));
AuthRouter.post("/register", AsyncRouteWrapper(AuthController.register));
AuthRouter.get("/logout", AsyncRouteWrapper(AuthController.logout));

export {AuthRouter};

