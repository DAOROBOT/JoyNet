import {Schema, model, Types} from "mongoose";

interface IPost {
    content: string;
    image: string?;
    video: string?;
    embedded_link: string?;

    censor: string, // safe, unsafe

    reply_to: Types.ObjectId?; // reference Post
    uploader: Types.ObjectId; // NOTE: reference to User
    group: Types.ObjectId?;

    created_date: number; // unix timestamp in seconds

    likes: Array<Types.ObjectId>;
    shares: Array<Types.ObjectId>;
    comments: Array<Types.ObjectId>;
}

const post_schema = new Schema<IPost>({
    content: {type: String, required: true},
    sender: {type: Schema.Types.ObjectId, required: true, ref: "User"},
})

const PostModel = model<IPost>("Post", post_schema);

export {PostModel};
