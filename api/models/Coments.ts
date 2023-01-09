import { model, Schema } from "mongoose";

const comment = new Schema({
    content: {
        type: String,
        require: true
    },
    commentDate: {
        type: Date,
        default: Date.now()
    }
})
export default model("Comment", comment)