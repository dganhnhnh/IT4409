'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Posts extends Model {

        static associate(models) {
        }
    };
    Posts.init({
        userID: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        img_url: DataTypes.STRING,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Posts',
    });
    return Posts;
};