'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_group extends Model {
    static associate({User,Group, Exercise}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Group, { foreignKey: 'group_id' })
      this.belongsTo(Exercise, { foreignKey: 'exercise_id' })

    }
  }
  User_group.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Groups',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'User_group',
  });
  return User_group;
};