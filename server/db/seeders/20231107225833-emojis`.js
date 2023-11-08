'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Emojis', [{
        emoji: 'smile1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emoji: 'smile2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        emoji: 'smile3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Emojis', null, {});
  }
};
