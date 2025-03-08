import { Schema, model, Types } from "mongoose";
import { UserDocument } from "./user.model"

enum Receiver {
    Group = "Group",
    User = "User"
}

interface IMessage {
    content: string;
    image?: string;
    video?: string;

    type: string; // Group/User
    sender: Types.ObjectId; // reference User
    receiver: Types.ObjectId; // reference User/Group
}

const Message_schema = new Schema<IMessage>({
    content: { type: String, required: true },
    image: { type: String },
    video: { type: String },

    type: { type: String, enum: Receiver, required: true },

    sender: { type: Schema.Types.ObjectId, ref: UserDocument, required: true },
    receiver: { type: Schema.Types.ObjectId, required: true, refPath: "type" },
}, { _id: true, timestamps: true });

const MessageModel = model<IMessage>("Message", Message_schema);

export { MessageModel };
