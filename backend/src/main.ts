require("dotenv").config()
import express, { Express, Request, Response, NextFunction } from "express";
import { ErrorHandler } from "./middleware/error_handler.middleware"
import { AuthGuard } from "./middleware/auth-guard.middleware"
import { connect } from "mongoose";
import { AppError } from "./app_response";
import { AuthRouter } from "./route/auth.route";
import { PostRouter } from "./route/post.route";

if (process.env.MONGO_DB_URI === undefined) {
    console.log("Error: Missing MONGO_DB_URI in .env")
    process.exit(1);
} else {
    (async () => {
        await connect(process.env.MONGO_DB_URI as string);
        console.log("Connected to Mongodb");
    })()
}

const app: Express = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth", AuthRouter);
app.use(AuthGuard);
app.use("/post", PostRouter);
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, "Not found"));
});
app.use(ErrorHandler);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on ${process.env.SV_ADDR || "http://localhost"}:${port}`);
})
