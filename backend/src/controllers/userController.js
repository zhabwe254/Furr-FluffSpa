const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateAuthToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if user exists
        let user = await User.findOne({ where: { username } });
        if (user) {
            return res.status(400).json({ message: 'User already exists.' });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create new user
        user = await User.create({ username, password: hashedPassword });
        const token = generateAuthToken({ id: user.id });
        res.status(201).json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if user exists
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateAuthToken({ id: user.id });
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
