'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InterviewEmoji extends Model {
    static associate({Emoji,Interview}) {
      this.belongsTo(Emoji, { foreignKey: 'emoji_id' })
      this.belongsTo(Interview, { foreignKey: 'interview_id' })
    }
  }
  InterviewEmoji.init({
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Interviews',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    emoji_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Emojis',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    count: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'InterviewEmoji',
  });
  return InterviewEmoji;
};