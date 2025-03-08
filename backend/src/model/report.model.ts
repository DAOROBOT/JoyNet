import { Schema, model, Types } from "mongoose";
import { UserDocument } from "./user.model"
import { PostDocument } from "./post.model"

interface IReport {
    denouncer: Types.ObjectId, // reference User
    post: Types.ObjectId, // reference Post
    description: string,
    approved: boolean, // default false
}

const Report_schema = new Schema<IReport>({
    denouncer: { type: Schema.Types.ObjectId, ref: UserDocument },
    post: { type: Schema.Types.ObjectId, ref: PostDocument },
    description: { type: String, required: true },
    approved: { type: Boolean, default: false },
}, { _id: true, timestamps: true });

const ReportModel = model<IReport>("Report", Report_schema);

export { ReportModel };
