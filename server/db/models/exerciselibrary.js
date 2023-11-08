'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseLibrary extends Model {
    static associate({Material, Exercise}) {
      this.belongsTo(Material, { foreignKey: 'material_id' })
      this.belongsTo(Exercise, { foreignKey: 'exercise_id' })
    }
  }
  ExerciseLibrary.init({
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Materials',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'ExerciseLibrary',
  });
  return ExerciseLibrary;
};