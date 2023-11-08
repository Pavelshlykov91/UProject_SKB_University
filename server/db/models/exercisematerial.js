'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseMaterial extends Model {
    static associate({Exercise}) {
      this.belongsTo(Exercise, { foreignKey: 'exercise_id' })
    }
  }
  ExerciseMaterial.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    timing: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'ExerciseMaterial',
  });
  return ExerciseMaterial;
};
