import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: String,
    checked: { type: Boolean, default: false },
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

const todoModel = mongoose.model('Todo', TodoSchema);
export default todoModel;
