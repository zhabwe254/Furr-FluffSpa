const { DataTypes } = require('sequelize');
const db = require('../db');

const Pet = db.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Pet;
