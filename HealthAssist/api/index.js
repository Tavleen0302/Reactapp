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
        const { name, email, password, healthCard, phoneNumber, medicalInfo } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({
            name,
            email,
            password,
            healthCard,
            phoneNumber,
            medicalInfo,
        });
        await user.save();
        res.status(200).json({ message: "User registered" });

    } catch (err) {
        console.log("error registering user", err);
        res.status(500).json({ message: "Registration failed" });
    }
});

