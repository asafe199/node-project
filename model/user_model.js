import mongoose from 'mongoose';
const { Schema } = mongoose;

const userModel = new Schema({
    name: String,
    lastName: String,
    age: Number,
    phone: String
});

const Kitten = mongoose.model('userModel', userModel);
