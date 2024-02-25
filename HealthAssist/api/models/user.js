const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: false,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    healthCard: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    phoneNumber: {
        type: Number,
        required: false,
        min: 6,
        max: 11111111111111111111111
    },
    medicalInfo: {
        type: String,
        required: false,
        min: 6,
        max: 255
    }, 
    chosenDate: {
        type: Date,
        required: false
    },
    chosenTime: {
        type: String,
        required: false
    },
    doctor: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    professional: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    contact: {
        type: String,
        required: false,
        min: 6,
        max: 255
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
