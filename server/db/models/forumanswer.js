'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ForumAnswer extends Model {
    static associate({Forum, User}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Forum, { foreignKey: 'forum_id' })
    }
  }
  ForumAnswer.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    forum_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Forums',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ForumAnswer',
  });
  return ForumAnswer;
};