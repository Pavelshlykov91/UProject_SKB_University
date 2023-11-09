'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User_groups', [{
      user_id:1,
      group_id:1,
      exercise_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        user_id:2,
        group_id:1,
        exercise_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          user_id:4,
          group_id:2,
          exercise_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
                {
          user_id:5,
          group_id:2,
          exercise_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            user_id:6,
            group_id:3,
            exercise_id:2,
            createdAt: new Date(),
            updatedAt: new Date(),
            },
            {
              user_id:7,
              group_id:3,
              exercise_id:2,
              createdAt: new Date(),
              updatedAt: new Date(),
              },
              {
                user_id:8,
                group_id:4,
                exercise_id:2,
                createdAt: new Date(),
                updatedAt: new Date(),
                },
                {
                  user_id:9,
                  group_id:4,
                  exercise_id:2,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('User_groups', null, {});
  }
};