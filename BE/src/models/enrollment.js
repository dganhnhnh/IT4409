'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Enrollments extends Model {

        static associate(models) {

        }
    };
    Enrollments.init({
        userID: DataTypes.INTEGER,
        courseID: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Erollments',
    });
    return Enrollments;
};
