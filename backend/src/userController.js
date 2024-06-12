// userController.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/', authMiddleware, (req, res) => {
    // Your logic to get all users
});

module.exports = router;

