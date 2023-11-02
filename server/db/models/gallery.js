'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    static associate({User,Foto}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.hasMany(Foto, { foreignKey: 'foto_id' })
    }
  }
  Gallery.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    foto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Fotos',
        key: 'id'
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};