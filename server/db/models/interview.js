'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    static associate({User, InterviewComment,InterviewEmoji}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.hasMany(InterviewComment, { foreignKey: 'interview_id' })
      this.hasMany(InterviewEmoji, { foreignKey: 'interview_id' })
    }
  }
  Interview.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.TEXT
    },
    content: {
      type: DataTypes.TEXT
    },
    url: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Interview',
  });
  return Interview;
};