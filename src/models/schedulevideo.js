'use strict';
module.exports = function (sequelize, DataTypes) {
    let ScheduleVideo = sequelize.define('ScheduleVideo', {
        videoLink: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                ScheduleVideo.belongsTo(models.ScheduledClass, {
                    onDelete: "RESTRICT",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return ScheduleVideo;
};