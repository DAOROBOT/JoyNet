import { Request, Response, NextFunction } from "express";
import {AppError, success_handler} from "../app_response";
import {UserModel, UserRole} from "../model/user.model";
import {Validator} from "../util/validator";
import {hash} from "bcrypt";

const AuthController = {
    async logout(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },

    async login(req: Request, res: Response, next: NextFunction) {
        next(new AppError(404, "Not implememented"));
    },

    async register(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;
        if (Validator.is_missing(email)) return next(new AppError(400, "Missing email"));
        if (Validator.is_missing(password)) return next(new AppError(400, "Missing password"));
        if (!Validator.is_email(email)) return next(new AppError(400, "Invalid email"));
        // NOTE: enforce password rule?

        const user = await UserModel.findOne({email});
        if (user != null) return next(new AppError(400, "Email already exists"))

        const salt = process.env.SALT || 15; // default 15 rounds
        const hashed_password = await hash(password, salt);
        const result /*User*/ = await UserModel.insertOne({email, password: hashed_password, role: UserRole.User});
        console.log(result);

        success_handler(res, 200, "Successfully register new account");
    },
}

export {AuthController}

