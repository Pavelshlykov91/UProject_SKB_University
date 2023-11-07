'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseAddmaterial extends Model {
    static associate({Exercise,ExerciseMaterial}) {
      this.belongsTo(Exercise, { foreignKey: 'exercise_id' })
      this.belongsTo(ExerciseMaterial, { foreignKey: 'exercisematerial_id' })
    }
  }
  ExerciseAddmaterial.init({
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exercises',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    exercisematerial_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ExerciseMaterials',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'ExerciseAddmaterial',
  });
  return ExerciseAddmaterial;
};
