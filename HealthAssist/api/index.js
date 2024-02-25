const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.listen(port, () => {
    console.log('Server is running on port:', port);
});

const User = require('./models/user');

// First route to register user
app.post('/register', async (req, res) => {
    console.log('reached');
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({
            name,
            email,
            password
        });
        await user.save();
        res.status(200).json({ message: "User registered" });

    } catch (err) {
        console.log("error registering user", err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Second route to update user information
app.post('/updateUser', async (req, res) => {
    try {
        const { healthCard, phoneNumber, medicalInfo, userId } = req.body;
        // Assuming userId is sent from the client to identify the user to update
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Update user information
        user.healthCard = healthCard;
        user.phoneNumber = phoneNumber;
        user.medicalInfo = medicalInfo;
        await user.save();
        res.status(200).json({ message: "User information updated successfully" });
    } catch (err) {
        console.log("error updating user information", err);
        res.status(500).json({ message: "Failed to update user information" });
    }
});
