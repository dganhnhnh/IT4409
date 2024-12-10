'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Videos extends Model {

        static associate(models) {
        }
    };
    Videos.init({
        lessonID: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        video_url: DataTypes.STRING,
        duration: DataTypes.STRING,
        orderBy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Videos',
    });
    return Videos;
};