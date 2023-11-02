'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate({Material,Theme}) {
      this.hasMany(Material, { foreignKey: 'material_id' })
      this.hasMany(Theme, { foreignKey: 'theme_id' })
    }
  }
  Library.init({
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Materials',
        key: 'id'
      },
    },
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ThemeLibraries',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};