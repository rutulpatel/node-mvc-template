'use strict';
module.exports = function (sequelize, DataTypes) {
    let Instructor = sequelize.define('Instructor', {
        title: {type: DataTypes.STRING, unique: true},
        shortDescription: DataTypes.TEXT,
        bio: DataTypes.TEXT,
        image: DataTypes.STRING,
        youtubePlaylistName: DataTypes.STRING,
        contractType: {
            type: DataTypes.ENUM,
            values: ["Contractor", "Employee"],
            defaultValue: "Employee",
            allowNull: false
        }
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