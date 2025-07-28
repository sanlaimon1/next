import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { getTimestamp } from "swr/dist/_internal";

const {Schema} = mongoose;

const {UserSchema} = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, 
{timestamps: true}
);

export default mongoose.model("User", UserSchema);