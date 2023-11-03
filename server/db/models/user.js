'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Course,Material,MaterialComment,Foto_comment, Foto, Gallery, Interview,InterviewComment, Mark, User_group, Answer, Exercise}) {
      this.belongsTo(Course, { foreignKey: 'course_id' })
      this.hasMany(Material, { foreignKey: 'user_id' })
      this.hasMany(MaterialComment, { foreignKey: 'user_id' })
      this.hasMany(Foto_comment, { foreignKey: 'user_id' })
      this.hasMany(Foto, { foreignKey: 'user_id' })
      this.hasMany(Gallery, { foreignKey: 'user_id' })
      this.hasMany(Interview, { foreignKey: 'user_id' })
      this.hasMany(InterviewComment, { foreignKey: 'user_id' })
      this.hasMany(Mark, { foreignKey: 'user_id' })
      this.hasMany(User_group, { foreignKey: 'user_id' })
      this.hasMany(Answer, { foreignKey: 'user_id' })
      this.hasMany(Exercise, { foreignKey: 'user_id' })
    }
  }
  User.init({
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    department: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id'
      },
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};