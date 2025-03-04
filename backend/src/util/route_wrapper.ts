import {Request, Response, NextFunction} from "express";
type AsyncExpressMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;
type ExpressMiddleware = (req: Request, res: Response, next: NextFunction) => void;
const AsyncRouteWrapper = (cb: AsyncExpressMiddleware): AsyncExpressMiddleware => {
    return (req: Request, res: Response, next: NextFunction) => cb(req, res, next).catch(next);
};

const RouteWrapper = (cb: ExpressMiddleware): ExpressMiddleware => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            cb(req, res, next);
        } catch (error) {
            next(error);
        }
    }
};

export {AsyncRouteWrapper, RouteWrapper};
