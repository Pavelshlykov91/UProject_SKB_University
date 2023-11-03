'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    static associate({User,Gallery, Foto_comment}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Gallery, { foreignKey: 'foto_id' })
      this.hasMany(Foto_comment, { foreignKey: 'comment_id' })
    }
  }
  Foto.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Galleries',
        key: 'id'
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Foto_comments',
        key: 'id'
      },
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Foto',
  });
  return Foto;
};