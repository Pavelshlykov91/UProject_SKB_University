'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Forums', [{
    user_id: 3,
    title: 'Как провести корпоратив',
    content: 'В данной теме присылайте свои идеи для проведения корпоратива',
    img: 'картинка',
    createdAt: new Date(),
    updatedAt: new Date(),
      },
      {
        user_id: 5,
        title: 'Что хотите видеть на наших мероприятиях?',
        content: 'У нас есть идеи по усовершенствованию лекций. Но хотим сначала узнать что интересует вас',
        img: 'картинка',
        createdAt: new Date(),
        updatedAt: new Date(),
          },
          {
            user_id: 6,
            title: 'Стратегическая сессия',
            content: 'Оцените нашу лекцию с прошедшего мероприятия',
            img: 'картинка',
            createdAt: new Date(),
            updatedAt: new Date(),
              }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Forums', null, {});
  }
};
