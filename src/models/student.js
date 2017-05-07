'use strict';
module.exports = function(sequelize, DataTypes) {
  let Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    emergencyContact: DataTypes.STRING,
    emergencyNumber: DataTypes.STRING,
    subscribed: DataTypes.BOOLEAN,
    liabilityUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};