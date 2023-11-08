'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emoji extends Model {
    static associate({InterviewEmoji}) {
      this.hasMany(InterviewEmoji, { foreignKey: 'emoji_id' })
    }
  }
  Emoji.init({
    emoji: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Emoji',
  });
  return Emoji;
};