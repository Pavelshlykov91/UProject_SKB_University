'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessGroup extends Model {
    static associate({User}) {
      this.hasMany(User, { foreignKey: 'bg_id' })
    }
  }
  BusinessGroup.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize, // Передача экземпляра Sequelize
    modelName: 'BusinessGroup',
  });
  return BusinessGroup;
};