'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({BusinessGroup, Department, Course,Material,MaterialComment,Foto_comment, Foto, Gallery, Interview,InterviewComment, Mark, User_group, Answer, Exercise}) {
      this.belongsTo(Course, { foreignKey: 'course_id' })
      this.belongsTo(Department, { foreignKey: 'department_id' })
      this.belongsTo(BusinessGroup, { foreignKey: 'bg_id' })
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
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
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
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'id'
      },
      onDelete: 'CASCADE',
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
      onDelete: 'CASCADE',
    },
    receipt_date: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bg_id: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};