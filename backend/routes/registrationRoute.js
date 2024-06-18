// routes/registrationRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

<<<<<<< HEAD
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

>>>>>>> 2d1cc1a8dd38850687c76777c4d0ad8881b5ba97
module.exports = router;
