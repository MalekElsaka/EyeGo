import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

export const TaskModel = mongoose.model('Task', TaskSchema);