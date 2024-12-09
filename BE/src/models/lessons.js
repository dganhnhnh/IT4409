'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lessons extends Model {

        static associate(models) {

        }
    };
    Lessons.init({
        courseID: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        order: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Lessons',
    });
    return Lessons;
};
