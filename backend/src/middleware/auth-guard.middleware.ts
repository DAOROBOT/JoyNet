import { Request, Response, NextFunction } from 'express';
import { UserModel } from "../model/user.model";
import { AppError } from '../app_response';
import jwt from 'jsonwebtoken';

const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.get("Authorization");
    console.log(authorization);
    if (!authorization) {
        throw new AppError(401, "Unauthorized user is forbidden here.");
    } else if (authorization.startsWith("Bearer")) {
        const token = authorization.split(' ', 2)[1];
        jwt.verify(token, process.env.JWT_SECRET || "UN", (err, decoded) => {
            if (err) {
                console.log(err);
                next(new AppError(401, `Invalid json token, error: ${err.message}`));
            } else {
                if ((decoded as any).userId === undefined || (decoded as any).userId === null) {
                    throw new Error("Missing user id from jwt token");
                } else {
                    UserModel.findOne({ _id: (decoded as any).userId! }).then((user: any) => {
                        if (user === null) {
                            next(new AppError(400, "Invalid jwt token"));
                        } else {
                            console.log("Authorization user: ", user);
                            (req as any).user = user;
                            next();
                        }
                    }).catch(err => {
                        throw err;
                    });
                }
            }
        });
    } else {
        next(new AppError(401, "Authorization unknown"));
    }
};

export { AuthGuard };
