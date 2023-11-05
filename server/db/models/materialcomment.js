'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaterialComment extends Model {
    static associate({Material,User}) {
      this.belongsTo(Material, { foreignKey: 'material_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })

    }
  }
  MaterialComment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MaterialComments',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MaterialComment',
  });
  return MaterialComment;
};