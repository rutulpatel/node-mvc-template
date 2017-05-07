'use strict';
module.exports = function(sequelize, DataTypes) {
  var PaymentType = sequelize.define('PaymentType', {
    PaymentType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PaymentType;
};