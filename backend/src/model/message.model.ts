import {Schema, model, Types} from "mongoose";
interface IMessage {
    content: string;
    image?: string;
    video?: string;

    type: string; // Group/User
    sender: Types.ObjectId; // reference User
    receiver: Types.ObjectId; // reference User/Group

    created_date?: number; // Unix timestamp in seconds
}
