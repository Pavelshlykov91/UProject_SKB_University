'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    static associate({User, InterviewComment}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.hasMany(InterviewComment, { foreignKey: 'comment_id' })
    }
  }
  Interview.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'InterviewComments',
        key: 'id'
      },
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Interview',
  });
  return Interview;
};