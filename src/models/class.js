'use strict';
module.exports = function (sequelize, DataTypes) {
    let Class = sequelize.define('Class', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE
    }, {
        classMethods: {
            associate: function (models) {
                Class.belongsTo(models.Instructor, {
                    onDelete: "SET NULL",
                    foreignKey: {
                        allowNull: true
                    }
                });
                Class.hasMany(models.ScheduledClass);
            }
        }
    });
    return Class;
};