const mongoose = require('mongoose');


// Define the appointment schema
const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    professionalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional', // Reference to the Professional model
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    // Add any other fields relevant to the appointment
});

// Create the Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the Appointment model
module.exports = Appointment;
