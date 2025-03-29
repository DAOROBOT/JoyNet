import { Schema, model, Types } from "mongoose";
import { UserDocument, GroupDocument, PostDocument } from "./document"

enum safety {
    safe = "Safe",
    Unsafe = "Unsafe"
}

interface IPost {
    content: string;
    image?: string;
    video?: string;
    embedded_link?: string;

    censor: string, // safe, unsafe

    reply_to?: Types.ObjectId; // reference Post
    uploader: Types.ObjectId; // NOTE: reference to User
    group?: Types.ObjectId;

    likes: Array<Types.ObjectId>;
    shares: Array<Types.ObjectId>;
    comments: Array<Types.ObjectId>;
}

const post_schema = new Schema<IPost>({
    content: { type: String, required: true },
    image: { type: String },
    video: { type: String },
    embedded_link: { type: String },

    censor: { type: String, enum: safety, required: true },

    reply_to: { type: Schema.Types.ObjectId, ref: PostDocument },
    uploader: { type: Schema.Types.ObjectId, ref: UserDocument, required: true },
    group: { type: Schema.Types.ObjectId, ref: GroupDocument },

    likes: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
    shares: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
    comments: [{ type: Schema.Types.ObjectId, ref: PostDocument }],
}, { _id: true, timestamps: true });

const PostModel = model<IPost>(PostDocument, post_schema);

export { PostModel, PostDocument, safety };
