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
          url: '../../../client/public/img/Mask_group.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: '../../../client/public/img/Mask_group.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: '../../../client/public/img/Mask_group.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: '../../../client/public/img/Mask_group.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: '../../../client/public/img/Mask_group.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gallery_id: 1,
          comment_id: 1,
          url: '../../../client/public/img/Mask_group.png',
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
