const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    name: {
        trim: true,
        type: String,
        required: [true, 'Name cannot be null'],
        uppercase: true,
    },
    lastName: {
        type: String,
        required: [true, 'LastName cannot be null'],
        trim: true,
        uppercase: true,
    },
    email: {
        required: [true, 'Email cannot be null'],
        type: String,
    },
    age: {
        required: [true, 'Age cannot be null'],
        type: Number
    },
    phone: {
        type: String,
        trim: true,
        default: "SN"
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password cannot be null']
    },
    roles: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: "USER"
    }
});

const model = mongoose.model('User', data);

module.exports = model;


