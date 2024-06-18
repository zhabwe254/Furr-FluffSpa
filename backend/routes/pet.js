const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// GET /pet
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find().exec();
        res.render('pet', { pets });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Failed to retrieve pets' });
    }
});

// GET /pet/:id
router.get('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).exec();
        if (!pet) {
            res.status(404).render('error', { message: 'Pet not found' });
        } else {
            res.render('pet', { pet });
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Failed to retrieve pet' });
    }
});

module.exports = router;
