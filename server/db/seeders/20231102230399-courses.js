'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Courses', [{
      name:'1',
      content:'Первый курс',
      goals:'Благодаря обмену опытом с коллегами, найти новые инструменты для повышения эффективности руководителей',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name:'2',
        content:'Второй курс',
        goals:'Повышение экспертизы руководителей',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Courses', null, {});
  }
};
