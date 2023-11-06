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
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование2',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование3',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование1',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование2',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование3',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование1',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование2',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          title: 'Командообразование3',
          content: 'Поход в баню',
          url: 'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg',
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
