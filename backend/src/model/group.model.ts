import { Schema, model, Types } from "mongoose";
import { UserDocument } from "./user.model"

const GroupDocument = "Group";

enum Visibility {
    Public = "Public",
    Private = "Private"
}

interface IGroup {
    name: string,
    description: string,
    visibility: string, // default Public, enum Public, Private

    admin: Types.ObjectId, // reference User

    members: Array<Types.ObjectId>, // reference User
}

const Group_schema = new Schema<IGroup>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    visibility: { type: String, enum: Visibility, default: "Public" },

    admin: { type: Schema.Types.ObjectId, ref: UserDocument, required: true },

    members: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
}, { _id: true, timestamps: true });

const GroupModel = model<IGroup>("Group", Group_schema);

export { GroupModel, GroupDocument, Visibility };
