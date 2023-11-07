'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Events', [{
        course_id: 1,
        name: 'Стратегическая сессия',
        data: '20.11.2023',
        address: 'Москва, ул. Профсоюзная, 5/9',
        theme: 'использование информационных технологий в управлении',
        time: '10:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        name: 'Лекция Сергея Хотимского',
        data: '21.11.2023',
        address: 'Москва, ул. Профсоюзная, 5/9',
        theme: 'Третья сессия',
        time: '11:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Events', null, {});
  }
};
