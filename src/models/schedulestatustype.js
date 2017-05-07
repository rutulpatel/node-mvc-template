'use strict';
module.exports = function(sequelize, DataTypes) {
  var ScheduleStatusType = sequelize.define('ScheduleStatusType', {
    ScheduleStatus: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ScheduleStatusType;
};