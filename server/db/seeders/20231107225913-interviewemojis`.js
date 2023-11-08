'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('InterviewEmojis', [{
        interview_id: 1,
        emoji_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      interview_id: 2,
      emoji_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
   }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('InterviewEmojis', null, {});
  }
};
