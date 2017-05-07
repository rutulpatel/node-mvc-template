'use strict';
module.exports = function (sequelize, DataTypes) {
    let Instructor = sequelize.define('Instructor', {
        title: DataTypes.STRING,
        shortDescription: DataTypes.TEXT,
        bio: DataTypes.TEXT,
        image: DataTypes.STRING,
        youtubePlaylistName: DataTypes.STRING,
        testItem: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Instructor.hasMany(models.Class);
                Instructor.hasMany(models.ScheduledClass);
            }
        }
    });
    return Instructor;
};