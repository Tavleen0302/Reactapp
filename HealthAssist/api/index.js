const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // Import JWT module


const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://tavleen0302:Tavbasket123!@cluster0.kmul6mq.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Error:', err);
});

// Import User model
const User = require('./models/user');
const Prof = require('./models/profs');
const Appointment = require('./models/apppoint');


// Assuming you already have a route set up for fetching doctors

app.get('/nearbyDoctors', async (req, res) => {
    try {
        const { contactType } = req.query; // Assuming the patient's contact preference is passed in the query

        // Query doctors from the database based on contactType
        const doctors = await Appointment.find({ contactType });

        res.status(200).json({ doctors });
    } catch (error) {
        console.error('Error fetching nearby doctors:', error);
        res.status(500).json({ message: 'Failed to fetch doctors' });
    }
});

app.get('/profile', async (req, res) => {
    try {
        // Retrieve user ID from the request object
        const userId = req.user.id;

        // Query MongoDB to find the user by ID
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user data
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Failed to fetch user profile' });
    }
});



// Route to get all users
app.get('/profs', async (req, res) => { 
    try {
        const profs = await Prof.find();
        res.status(200).json(profs);
    } catch (err) {
        console.log("Error getting professionals", err);
        res.status(500).json({ message: "Failed to get professionals" });
    }
});

// Route to register a new professional
app.post('/registerProf', async (req, res) => {
    try {
        const { fullName, email, password, medicalLicense, phoneNumber, locationOfPractice } = req.body;    
        const existingProf = await Prof.findOne({ email });
        if (existingProf) {
            return res.status(400).json({ message: "Professional already exists" });
        }
        const prof = new Prof({
            fullName,
            email,
            password,
            medicalLicense,
            phoneNumber,
            locationOfPractice,
        });
        await prof.save();
        res.status(200).json({ message: "Professional registered" });
    } catch (err) {
        console.log("Error registering professional", err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Route to login an existing professional
app.post('/loginProf', async (req, res) => {
    try {
        const { email, password } = req.body;
        const prof = await Prof.findOne({ email });
        if (!prof || prof.password !== password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.log("Error logging in", err);
        res.status(500).json({ message: "Login failed" });
    }
});





// Route to register a new user
app.post('/register', async (req, res) => {
    try {
        const { fullName, email, password, healthCard, phoneNumber, medicalInfo } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({
            fullName,
            email,
            password,
            healthCard,
            phoneNumber,
            medicalInfo,
        });
        await user.save();
        
        
        res.status(200).json({ message: "User registered"});

    } catch (err) {
        console.log("Error registering user", err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Route to update prof information
app.post('/updateProfessional', async (req, res) => {
    try {
        const { fullName, email, password, phoneNumber, locationOfPractice, medicalLicense, appointmentWeekdaysFree, timeFree, profession, rating } = req.body;
        
        // Find the professional by fullName
        const professional = await Prof.findOne({ fullName });
        if (!professional) {
            return res.status(404).json({ message: "Professional not found" });
        }

        // Update professional information
        if (email) professional.email = email;
        if (password) professional.password = password;
        if (phoneNumber) professional.phoneNumber = phoneNumber;
        if (locationOfPractice) professional.locationOfPractice = locationOfPractice;
        if (medicalLicense) professional.medicalLicense = medicalLicense;
        if (appointmentWeekdaysFree) professional.appointmentWeekdaysFree = appointmentWeekdaysFree;
        if (timeFree) professional.timeFree = timeFree;
        if (profession) professional.profession = profession;

        await professional.save();
        res.status(200).json({ message: "Professional updated successfully" });

    } catch (err) {
        console.log("Error updating professional", err);
        res.status(500).json({ message: "Failed to update professional" });
    }
});

// Route to update user information
app.post('/updateUser', async (req, res) => {
    try {
        const { fullName, email, password, healthCard, phoneNumber, medicalInfo } = req.body;
        
        // Find the user by fullName
        const user = await User.findOne({ fullName });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user information
        if (email) user.email = email;
        if (password) user.password = password;
        if (healthCard) user.healthCard = healthCard;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (medicalInfo) user.medicalInfo = medicalInfo;

        await user.save();
        res.status(200).json({ message: "User updated successfully" });

    } catch (err) {
        console.log("Error updating user", err);
        res.status(500).json({ message: "Failed to update user" });
    }
});

    
// Route to login an existing user
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        // Generate token for the logged-in user
        
        res.status(200).json({ message: "Login successful"});

    } catch (err) {
        console.log("Error logging in", err);
        res.status(500).json({ message: "Login failed" });
    }
});





app.listen(port, () => {
    console.log('Server is running on port:', port);
});
