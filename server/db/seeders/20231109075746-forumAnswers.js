'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ForumAnswers', [{
        user_id: 2,
        forum_id:1,
        content: 'Поехали на рафтинг?',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      user_id: 4,
      forum_id:1,
      content: 'Согласен, кто в Лосево был?',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    user_id: 5,
    forum_id:2,
    content: 'Давайте позовем кого-нибудь из Управляющей компании?',
    createdAt: new Date(),
    updatedAt: new Date(),
 },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('ForumAnswers', null, {});
  }
};
