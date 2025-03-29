import { Schema, model, Types } from "mongoose";
import { UserDocument, GroupDocument } from "./document"

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

console.log(UserDocument);
const Group_schema = new Schema<IGroup>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    visibility: { type: String, enum: Visibility, default: Visibility.Public },

    admin: { type: Schema.Types.ObjectId, ref: "User", required: true },

    members: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
}, { _id: true, timestamps: true });

const GroupModel = model<IGroup>(GroupDocument, Group_schema);

export { GroupModel, Visibility };
