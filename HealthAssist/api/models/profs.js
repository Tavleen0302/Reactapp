const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
    medicalLicense: {
        type: String,
        required: false, // Set to false for non-required fields
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
        trim: true,
    },
    locationOfPractice: {
        type: String,
        required: false,
        trim: true,
    },
    fullName: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        trim: true,
    },
    password: {
        type: String,
        required: false,
        trim: true,
    },
    Appointmentweekdaysfree: {
        type: String,
        required: false,
        trim: true,
    },
    timefree: {
        type: String,
        required: false,
        trim: true,
    },
    profession: {
        type: String,
        required: false,
        trim: true,
    }, 
    rating: {
        type: Number,
        required: false,
        trim: true,
    },
});

const Profs = mongoose.model('Profs', professionalSchema);
module.exports = Profs;