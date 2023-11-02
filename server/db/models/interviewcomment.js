'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewComment extends Model {
    static associate({User,Interview}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Interview, { foreignKey: 'comment_id' })
    }
  }
  InterviewComment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'InterviewComment',
  });
  return InterviewComment;
};