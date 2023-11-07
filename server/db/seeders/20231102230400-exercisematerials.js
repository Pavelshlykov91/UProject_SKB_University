'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ExerciseMaterials', [{
        name: "текст 1",
        timing: 'До 23.11',
        content: 'Проверка 1',
        file: '111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "текст 2",
        timing: 'До 24.11',
        content: 'Проверка 2',
        file: '112',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "текст 3",
        timing: 'До 25.11',
        content: 'Проверка 3',
        file: '113',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ExerciseMaterials', null, {});
  }
};
