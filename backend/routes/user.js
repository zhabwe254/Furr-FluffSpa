const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /user
router.get('/', async (req, res) => {
    try {
        const users = await User.find().exec();
        res.render('user', { users });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Failed to retrieve users' });
    }
});

// GET /user/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) {
            res.status(404).render('error', { message: 'User not found' });
        } else {
            res.render('user', { user });
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Failed to retrieve user' });
    }
});

module.exports = router;
