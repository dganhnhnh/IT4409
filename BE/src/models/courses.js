'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Courses extends Model {

        static associate(models) {

        }
    };
    Courses.init({
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        img_url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Courses',
    });
    return Courses;
};