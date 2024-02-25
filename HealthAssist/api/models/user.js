const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    healthCardNumber: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    photo: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    medicalInfoAttachment: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    dateOfBirth: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
