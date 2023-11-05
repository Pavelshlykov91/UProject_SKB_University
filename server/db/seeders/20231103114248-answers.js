'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Answers', [{
      user_id:1,
      exercise_id:1,
      answer:'Все отлично',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      exercise_id:1,
      answer:'На пять',
      file:'-',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:3,
      exercise_id:1,
      answer:'Так и так',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:6,
      exercise_id:1,
      answer:'Вот так',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:7,
      exercise_id:1,
      answer:'И может так',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:4,
      exercise_id:2,
      answer:'И может так',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:5,
      exercise_id:2,
      answer:'И может так',
      file:'++',
      deprecated:false,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Answers', null, {});
  }
};
