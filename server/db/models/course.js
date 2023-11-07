'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({User, Exercise, Event}) {
      this.hasMany(User, { foreignKey: 'course_id' })
      this.hasMany(Exercise, { foreignKey: 'course_id' })
      this.hasMany(Event, { foreignKey: 'course_id' })
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
    goals: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
