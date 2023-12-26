import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const urlSchema = new mongoose.Schema(
    {
        completeURL: {
            type: String,
            required: true
        },
        shortURL: {
            type: String,
            required: true,
            default: nanoid()
        },
    },
    { timestamps: true }
);

const URL = mongoose.model('urlModel', urlSchema);

export default URL;