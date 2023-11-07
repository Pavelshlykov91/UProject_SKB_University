'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Departments', [{
      name: 'Московская дирекция',
      createdAt: new Date(),
      updatedAt: new Date(),
 },
 {
  name: 'Отдел рисков',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Торговые Сети',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Товарное кредитование',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Управление прямых продаж',
  createdAt: new Date(),
  updatedAt: new Date(),
}], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Departments', null, {});
  }
};
