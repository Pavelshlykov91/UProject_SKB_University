'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('ExerciseAddmaterials', [{
      exercise_id: 1,
      exercisematerial_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      exercise_id: 1,
      exercisematerial_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      exercise_id: 2,
      exercisematerial_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ExerciseAddmaterials', null, {});
  }
};
