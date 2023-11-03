'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('InterviewComments', [{
        user_id:2,
        interview_id:1,
        content:'Классное интервью!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:3,
        interview_id:2,
        content:'Классное интервью!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id:1,
        interview_id:3,
        content:'Мотивирует!',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('InterviewComments', null, {});
  }
};
