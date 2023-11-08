'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseMaterial extends Model {
    static associate({ExerciseAddmaterial}) {
      this.hasMany(ExerciseAddmaterial, { foreignKey: 'exercisematerial_id' })
    }
  }
  ExerciseMaterial.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
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
