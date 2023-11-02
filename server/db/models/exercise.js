'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate({Answer, User_group, User, Course}) {
      this.hasMany(Answer, { foreignKey: 'exercise_id' })
      this.hasMany(User_group, { foreignKey: 'exercise_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Course, { foreignKey: 'course_id' })
    }
  }
  Exercise.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id'
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};