'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({Exercise,User,Mark}) {
      this.hasMany(Mark, { foreignKey: 'answer_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Exercise, { foreignKey: 'exercise_id' })
    }
  }
  Answer.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id'
      },
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deprecated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};