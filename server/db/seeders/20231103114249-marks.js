'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Marks', [{
      user_id:1,
      answer_id:1,
      mark:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      answer_id:2,
      mark:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:3,
      answer_id:3,
      mark:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:6,
      answer_id:4,
      mark:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:7,
      answer_id:5,
      mark:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:4,
      answer_id:6,
      mark:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:5,
      answer_id:7,
      mark:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Marks', null, {});
  }
};
