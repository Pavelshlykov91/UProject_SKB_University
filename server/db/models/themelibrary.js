'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThemeLibrary extends Model {
    static associate({Library}) {
      this.hasMany(Library, { foreignKey: 'theme_id' })
    }
  }
  ThemeLibrary.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ThemeLibrary',
  });
  return ThemeLibrary;
};