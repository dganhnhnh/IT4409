'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LikeComments extends Model {

        static associate(models) {
        }
    };
    LikeComments.init({
        commentID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'LikeComments',
    });
    return LikeComments;
};