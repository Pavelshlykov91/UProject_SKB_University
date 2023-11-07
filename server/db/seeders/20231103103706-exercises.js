'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Exercises', [{
      user_id:8,
      course_id:1,
      title:'Приветственное значение',
      content:'2*2 = ?',
      corAnswer:'4',
      file:'--',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        user_id:8,
        course_id:2,
        title:'Для опытных',
        content:'5*5 = ?',
        corAnswer:'25',
        file:'--',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Exercises', null, {});
  }
};
