'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mark extends Model {
    static associate({User, Answer}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Answer, { foreignKey: 'answer_id' })
    }
  }
  Mark.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Answers',
        key: 'id'
      },
    },
    mark: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Mark',
  });
  return Mark;
};