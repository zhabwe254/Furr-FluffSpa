const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Create a new pet
router.post('/', petController.createPet);

// Get all pets
router.get('/', petController.getAllPets);

// Get a specific pet by ID
router.get('/:id', petController.getPetById);

// Update a pet by ID
router.put('/:id', petController.updatePet);

// Delete a pet by ID
router.delete('/:id', petController.deletePet);

module.exports = router;
