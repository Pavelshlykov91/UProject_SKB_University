'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate({User}) {
      this.hasMany(User, { foreignKey: 'department_id' })
    }
  }
  Department.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize, // Передача экземпляра Sequelize
    modelName: 'Department',
  });
  return Department;
};
