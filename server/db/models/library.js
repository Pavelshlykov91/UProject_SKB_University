'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate({Material,ThemeLibrary}) {
      this.belongsTo(Material, { foreignKey: 'material_id' })
      this.belongsTo(ThemeLibrary, { foreignKey: 'theme_id' })
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
      onDelete: 'CASCADE',
    },
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ThemeLibraries',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};