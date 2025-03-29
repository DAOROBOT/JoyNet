import { Schema, model, Types } from "mongoose";
import { GroupDocument, UserDocument } from "./document"

enum UserRole {
    User = "User",
    Admin = "Admin"
}
enum UserRelationship {
    Single = "Single",
    Dating = "Dating",
    Married = "Married",
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    fullname: { type: String },
    role: { type: String, enum: UserRole, required: true },

    address: { type: String },
    relationship: { type: String, enum: UserRelationship },
    phone_number: { type: String },
    hometown: { type: String },
    avatar: { type: String },
    birthdate: { type: Number }, // Unix time in miliseconds

    friends: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
    groups: [{ type: Schema.Types.ObjectId, ref: GroupDocument }],
    blocks: [{ type: Schema.Types.ObjectId, ref: UserDocument }],

    is_banned: { type: Boolean, default: false },
    warnings: { type: Number, default: 0 },
}, { _id: true, timestamps: true });

const UserModel = model(UserDocument, UserSchema);

export { UserDocument, UserModel, UserRole, UserRelationship }
