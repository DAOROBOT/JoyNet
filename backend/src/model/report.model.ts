import {Schema, model, Types} from "mongoose";
interface IReport {
    denouncer: Types.ObjectId, // reference User
    post: Types.ObjectId, // reference Post
    description: string,
    created_date: number,
    approved: boolean, // default false
}
