'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('BusinessGroups', [{
        name: 'Северная-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Северная-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Центральная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сибирская',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('BusinessGroups', null, {});
  }
};
