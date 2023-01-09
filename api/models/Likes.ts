import { model, Schema } from "mongoose";

const like = new Schema({
  isActive: {
    type: Boolean,
    require: true
  },
})
export default model("Like", like)


