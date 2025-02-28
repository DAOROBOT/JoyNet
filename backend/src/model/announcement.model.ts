import {Schema, model, Types} from "mongoose";

interface IAnnouncement {
    content: string,
    receiver: Types.ObjectId?, // reference User
    created_date: number, // Unix timestamp in seconds
}
