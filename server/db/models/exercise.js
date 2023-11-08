'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate({ExerciseAddmaterial, Answer, User_group, User, Course}) {
      this.hasMany(Answer, { foreignKey: 'exercise_id' })
      this.hasMany(User_group, { foreignKey: 'exercise_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Course, { foreignKey: 'course_id' })
      this.hasMany(ExerciseAddmaterial, { foreignKey: 'exercisematerial_id' })
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
      onDelete: 'CASCADE',
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT,
    },
    corAnswer: {
      type: DataTypes.TEXT,
    },
    deadline: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    goals: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addMaterial: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    critery: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};
