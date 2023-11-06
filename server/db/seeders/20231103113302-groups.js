'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Groups', [{
      number:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      number:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      number:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      number:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Groups', null, {});
  }
};
