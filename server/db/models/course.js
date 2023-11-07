'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({User, Exercise}) {
      this.hasMany(User, { foreignKey: 'course_id' })
      this.hasMany(Exercise, { foreignKey: 'course_id' })
    }
  }
  Course.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};