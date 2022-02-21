import mongoose, {Schema} from "mongoose";

const ChatSchema = new Schema({
    name: {
        type : String,
        required: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const model = mongoose.model("Chat", ChatSchema);
export default model