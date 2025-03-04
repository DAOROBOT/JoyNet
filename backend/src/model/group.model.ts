import {Schema, model, Types} from "mongoose";

const GroupDocument = "Group";
interface IGroup {
    name: string,
    description: string,
    visibility: string, // default Public, enum Public, Private

    admin: Types.ObjectId, // reference User

    members: Array<Types.ObjectId>, // reference User
    created_date?: number, // unix time in seconds
}

export {GroupDocument}
