'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ExerciseLibraries', [{
        exercise_id: 1,
        material_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        exercise_id: 1,
        material_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        exercise_id: 2,
        material_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('ExerciseLibraries', null, {});
  }
};
