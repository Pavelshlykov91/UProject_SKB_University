'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Materials', [{
      user_id:1,
      comment_id:1,
      type:'Книга',
      name:'Капитал',
      author:'Карл Маркс',
      content:'Капитал «Капитал», главный труд К. Маркса, в котором он, применив диалектико-материалистическую концепцию исторического процесса к исследованию капиталистического общественно-экономической формации, открыл экономический закон движения буржуазного общества и доказал неизбежность гибели капитализма и победы коммунизма.',
      url:'https://cdn.azbooka.ru/cv/w1100/9b804385-3585-4826-95e7-c92e1fa4cd89.jpg',
      file:'-',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      comment_id:2,
      type:'Книга',
      name:'45 татуировок менеджера',
      author:'Максим Батырев',
      content:'Имя Максима Батырева широко известно в российском бизнес',
      url:'https://78.media.tumblr.com/4d7187e2541faf3a0bd974d9114e9e7c/tumblr_inline_n06e5j9l5y1s6vrkz.jpg',
      file:'-',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:3,
      comment_id:3,
      type:'Фильм',
      name:'Стажер',
      author:'Нэнси Мейерс',
      content:'70-летний вдовец Бен Уитакер обнаруживает',
      url:'https://www.starslife.ru/wp-content/uploads/2015/08/robert-deniro-giving-old-school-dating-advice-in-the-intern-new-trailer.jpg',
      file:'-',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Materials', null, {});
  }
};
