import { model, Schema } from "mongoose";

const user = new Schema({
  idgoogle: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true,
    enum: ["User", "Admin"]
  },
  plan: {
    type: String,
    enum: ["Regular", "Premium"]

  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  isBanned: {
    type: String,
    default: false
  },
  reasonBan: {
    type: String
  },
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  },
  banner: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/08/03/10/25/banner-873106_1280.jpg"
  },
  registerDate: {
    type: Date,
    default: Date.now()
  },
  paymentDate: {
    type: Date,
  },
  expirationDate: {
    type: Date,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts"
    }
  ]
})
export default model("User", user)