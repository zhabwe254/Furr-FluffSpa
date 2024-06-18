const Data = require('../models/data');

const getAllData = async (req, res) => {
    try {
        const data = await Data.find().exec();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve data' });
    }
};

const createData = async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create data' });
    }
};

const getDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Data.findById(id).exec();
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve data' });
    }
};

const updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Data.findByIdAndUpdate(id, req.body, { new: true }).exec();
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update data' });
    }
};

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        await Data.findByIdAndRemove(id).exec();
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete data' });
    }
};

module.exports = {
    getAllData,
    createData,
    getDataById,
    updateData,
    deleteData
};
