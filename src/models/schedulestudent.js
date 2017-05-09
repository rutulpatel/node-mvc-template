'use strict';
module.exports = function (sequelize, DataTypes) {
    let ScheduleStudent = sequelize.define('ScheduleStudent', {}, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                ScheduleStudent.belongsTo(models.Student, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                ScheduleStudent.belongsTo(models.ScheduledClass, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });
    return ScheduleStudent;
};