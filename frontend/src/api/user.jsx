//   const UserSchema = new Schema({
//       email: { type: String, required: true, unique: true },
//       password: { type: String, required: true },
//
//       fullname: { type: String },
//       role: { type: String, enum: UserRole, required: true },
//
//       address: { type: String },
//       relationship: { type: String, enum: UserRelationship },
//       phone_number: { type: String },
//       hometown: { type: String },
//       avatar: { type: String },
//       birthdate: { type: Number }, // Unix time in seconds
//
//       friends: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
//       groups: [{ type: Schema.Types.ObjectId, ref: GroupDocument }],
//       blocks: [{ type: Schema.Types.ObjectId, ref: UserDocument }],
//
//       is_banned: { type: Boolean, default: false },
//       warnings: { type: Number, default: 0 },
//   }, { _id: true, timestamps: true });
import {getApi, parseMilis} from "./helper";

export const UserRelationship = {
  Single: "Single",
  Married: "Married",
  Dating: "Dating",
};

export const UserApi = {
  async getUserInfo() {
    // const userInfo = await getApi("user", {}, true);
    const userInfo = {
      email: "johndoe@example.com",
      fullname: "John Doe",
      address: "123 Main Street, Springfield, USA",
      relationship: UserRelationship.Single,
      phone_number: "0987654321",
      hometown: "Springfield",
      avatar: "https://example.com/avatar.jpg",
      birthdate: 946684800000, // January 1, 2000 (Unix time in milliseconds)

      // friends: [
      //   "65f1a2b3c4d5e6f7890a1b2c", 
      //   "65f1a2b3c4d5e6f7890a1b2d"
      // ],
      // groups: [
      //   "75g2b3c4d5e6f7890a1b2c3d", 
      //   "75g2b3c4d5e6f7890a1b2c4e"
      // ],
      // blocks: [
      //   "85h3c4d5e6f7890a1b2c3d4e"
      // ],

      is_banned: false,
      warnings: 1,

      posts: 2,

      createdAt: 946684800000,
    };
    userInfo.birthdate = parseMilis(userInfo.birthdate);
    userInfo.createdAt = parseMilis(userInfo.createdAt);
    return userInfo;
  },
};
