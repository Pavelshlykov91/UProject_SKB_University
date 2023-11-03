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
      foto:'https://cs14.pikabu.ru/post_img/2021/11/07/7/163628558219781558.jpg',
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
        foto:'https://i.ytimg.com/vi/11a-4Xhrz9Y/sddefault.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          firstName:'Василина',
          lastName:'Учебникова',
          surname:'Петровна',
          city:'Москва',
          position:'ЗНСРХ',
          department:'Диджитал',
          bg:'МД',
          role:'студент',
          course_id:1,
          foto:'http://s00.yaplakal.com/pics/pics_preview/5/0/9/14124905.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
