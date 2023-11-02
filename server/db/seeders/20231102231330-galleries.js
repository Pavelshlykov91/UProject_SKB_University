'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Galleries', [{
user_id:1,
foto_id:1,
title:'Командообразование',
content:'Поход в баню',
createdAt: new Date(),
updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Galleries', null, {});
  }
};
