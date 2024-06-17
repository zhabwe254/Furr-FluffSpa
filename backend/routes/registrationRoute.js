// routes/registrationRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get user by ID
router.get('/users/:id', userController.getUserById);

// Update user by ID
router.put('/users/:id', userController.updateUserById);

// Delete user by ID
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;
