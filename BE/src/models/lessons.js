'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lessons extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
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
