'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Courses', [{
      name:'1',
      content:'Начало',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name:'2',
        content:'Середина',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Courses', null, {});
  }
};
