'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      firstName:'Иван',
      lastName:'Иванов',
      surname:'Иваныч',
      city:'Санкт-Петербург',
      position:'Управляющий прямых продаж',
      department:'Прямые продажи',
      bg:'Северная-2',
      role:'студент',
      course_id:1,
      foto:'здесь должно быть фото',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        firstName:'Петр',
        lastName:'Петров',
        surname:'Петрыч',
        city:'Москва',
        position:'Управляющий торговых сетей',
        department:'Торговые сети',
        bg:'Южная-1',
        role:'студент',
        course_id:1,
        foto:'здесь должно быть фото',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
