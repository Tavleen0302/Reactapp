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

// Function to generate JWT token
function generateToken(user) {
    return jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' }); // Change 'your_secret_key' to your own secret key
}

// Route to register a new user
app.post('/register', async (req, res) => {
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
        
        // Generate token for the new user
        const token = generateToken(user);
        
        res.status(200).json({ message: "User registered", token });

    } catch (err) {
        console.log("Error registering user", err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Route to update user information
app.post('/updateUser', verifyToken, async (req, res) => {
    try {
        const { userId } = req;
        const { name, email, healthCard, phoneNumber, medicalInfo } = req.body;
        
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user information
        if (name) user.name = name;
        if (email) user.email = email;
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
        const token = generateToken(user);
        
        res.status(200).json({ message: "Login successful", token });

    } catch (err) {
        console.log("Error logging in", err);
        res.status(500).json({ message: "Login failed" });
    }
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.userId = decoded.id;
        next();
    });
}

// Protected route that requires authentication
app.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: "Protected route accessed" });
});

app.listen(port, () => {
    console.log('Server is running on port:', port);
});
