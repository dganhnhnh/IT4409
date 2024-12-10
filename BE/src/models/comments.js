'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {

        static associate(models) {
        }
    };
    Comments.init({
        postID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
        content: DataTypes.TEXT,
        img_url: DataTypes.STRING,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Comments;
};