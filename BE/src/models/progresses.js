'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Progresses extends Model {

        static associate(models) {
        }
    };
    Progresses.init({
        // userID: DataTypes.STRING,
        userID: DataTypes.INTEGER,
        courseID: DataTypes.INTEGER,
        videoID: DataTypes.INTEGER,
        total_time: DataTypes.INTEGER,
        completed_time: DataTypes.INTEGER,
        completionPercentage: DataTypes.INTEGER,
        completed_videos: DataTypes.INTEGER,
        total_videos: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Progresses',
    });
    return Progresses;
};