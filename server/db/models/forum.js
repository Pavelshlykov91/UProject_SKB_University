'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Forum.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};