'use strict';
module.exports = function (sequelize, DataTypes) {
    let ScheduledClass = sequelize.define('ScheduledClass', {
        paid: DataTypes.BOOLEAN,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        status: {
            type:   DataTypes.ENUM,
            values: ['scheduled', 'completed', 'canceled']
        }
    }, {
        classMethods: {
            associate: function (models) {
                ScheduledClass.belongsTo(models.Instructor, {
                    onDelete: "RESTRICT",
                    foreignKey: {
                        allowNull: true
                    }
                });

                ScheduledClass.belongsTo(models.Class, {
                    onDelete: "RESTRICT",
                    foreignKey: {
                        allowNull: true
                    }
                });

                ScheduledClass.hasMany(models.ScheduleVideo);
                ScheduledClass.hasMany(models.ScheduleStudent);
            }
        }
    });
    return ScheduledClass;
};