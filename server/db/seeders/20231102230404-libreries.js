'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Libraries', [{
  material_id:1,
  theme_id:2,
  createdAt: new Date(),
  updatedAt: new Date(),
  },
  {
  material_id:2,
  theme_id:1,
  createdAt: new Date(),
  updatedAt: new Date(),
  },
  {
  material_id:3,
  theme_id:3,
  createdAt: new Date(),
  updatedAt: new Date(),
  }
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Libraries', null, {});
  }
};
