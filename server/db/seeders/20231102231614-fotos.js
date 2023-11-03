'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Fotos',
      [
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 2,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 2,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 2,
          comment_id: 1,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Edmund_blair_leighton_accolade.jpg/400px-Edmund_blair_leighton_accolade.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fotos', null, {});
  },
};
