import mongoose, { Types } from "mongoose";

export const user = new mongoose.Schema(
    {
        userName: {
            Types: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            Types: String,
            require: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        }
    }
)