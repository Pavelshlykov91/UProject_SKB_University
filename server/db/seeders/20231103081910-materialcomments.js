'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('MaterialComments', [{
      user_id:1,
      content:'Ништяк. Открыл свой бизнес',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      content:'Бомба',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      content:'Под пивчик пойдет',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('MaterialComments', null, {});
  }
};
