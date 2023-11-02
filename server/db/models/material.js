'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate({Library,MaterialComment, User}) {
      this.belongsTo(Library, { foreignKey: 'material_id' })
      this.hasMany(MaterialComment, { foreignKey: 'comment_id' })
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Material.init({

    user_id: {
      type: DataTypes.STRING,
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};