'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LikePosts extends Model {

        static associate(models) {
        }
    };
    LikePosts.init({
        postID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'LikePosts',
    });
    return LikePosts;
};