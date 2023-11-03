'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('ThemeLibraries', [{
      name:'Бизнес',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name:'Художественная',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      name:'Фильм',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ThemeLibraries', null, {});
  }
};
