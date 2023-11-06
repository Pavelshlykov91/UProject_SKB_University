'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Galleries',
      [
        {
          user_id: 1,
          title: 'Командообразование1',
          content: 'Поход в баню',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boreas.jpg/400px-Boreas.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование2',
          content: 'Поход в баню',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boreas.jpg/400px-Boreas.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galleries', null, {});
  },
};
