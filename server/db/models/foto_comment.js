'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto_comment extends Model {
    static associate({User,Foto}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Foto, { foreignKey: 'foto_id' })
    }
  }
  Foto_comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
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
    modelName: 'Foto_comment',
  });
  return Foto_comment;
};