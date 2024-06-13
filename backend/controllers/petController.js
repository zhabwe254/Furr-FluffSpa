const Pet = require('../models/petModels');

exports.createPet = async (req, res) => {
    try {
        const pet = new Pet(req.body);
        await pet.save();
        res.status(201).send(pet);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).send(pets);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).send();
        }
        res.status(200).send(pet);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pet) {
            return res.status(404).send();
        }
        res.status(200).send(pet);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deletePet = async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);
        if (!pet) {
            return res.status(404).send();
        }
        res.status(200).send(pet);
    } catch (error) {
        res.status(500).send(error);
    }
};
