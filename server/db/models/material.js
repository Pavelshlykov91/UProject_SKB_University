'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({Library,MaterialComment, User}) {
      this.hasMany(Library, { foreignKey: 'material_id' })
      this.hasMany(MaterialComment, { foreignKey: 'comment_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Material.init({

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MaterialComments',
        key: 'id'
      },
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};