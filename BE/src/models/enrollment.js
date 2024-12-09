'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    /**
     * The `Enrollments` class represents the enrollments model in the database.
     * It extends Sequelize's Model class and allows interaction with the enrollments table.
     */
    class Enrollments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         * 
         * Use this method to define relationships between models, such as
         * `belongsTo`, `hasMany`, or `hasOne`.
         */
        static associate(models) {
            // Define associations here
            // For example:
            // Enrollments.belongsTo(models.User, { foreignKey: 'userID' });
            // Enrollments.belongsTo(models.Course, { foreignKey: 'courseID' });
        }
    }

    // Initialize the Enrollments model with its attributes and options
    Enrollments.init({
        /**
         * `userID`: Refers to the ID of the user enrolled in a course.
         * Data type: INTEGER
         */
        userID: DataTypes.INTEGER,

        /**
         * `courseID`: Refers to the ID of the course in which the user is enrolled.
         * Data type: INTEGER
         */
        courseID: DataTypes.INTEGER,

        /**
         * `date`: Stores the date of enrollment.
         * Data type: DATE
         */
        date: DataTypes.DATE,

        /**
         * `timeType`: Indicates the type of time (e.g., full-time, part-time).
         * Data type: STRING
         */
        timeType: DataTypes.STRING
    }, {
        // Pass the Sequelize instance and model options
        sequelize,

        /**
         * The `modelName` specifies the name of the model.
         * In this case, it's 'Enrollments'.
         */
        modelName: 'Enrollments',
    });

    // Return the Enrollments model for use in other parts of the application
    return Enrollments;
};
