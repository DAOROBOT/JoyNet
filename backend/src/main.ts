require("dotenv").config()
import express, {Express, Request, Response, NextFunction} from "express";
import {PostRoute} from "./route/post.route";
import {ErrorHandler} from "./middleware/error_handler.middleware"
import {connect} from "mongoose";

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



app.use("/post", PostRoute);
app.use(ErrorHandler);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on ${process.env.SV_ADDR || "http://localhost"}:${port}`);
})
