import { Schema, model, Types } from "mongoose";
import { UserDocument } from "./user.model"

interface IAnnouncement {
    content: string,
    receiver?: Types.ObjectId, // reference User
}

const Announcement_schema = new Schema<IAnnouncement>({
    content: { type: String, required: true },
    receiver: { type: Schema.Types.ObjectId, ref: UserDocument },
}, { _id: true, timestamps: true });

const AnnouncementModel = model<IAnnouncement>("Announcement", Announcement_schema);

export { AnnouncementModel };
