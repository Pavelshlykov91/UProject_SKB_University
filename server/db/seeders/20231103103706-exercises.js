'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Exercises', [{
      user_id:8,
      course_id:1,
      title:'Фильм стажер',
      content:'Просмотрите фильм Стажер. Напишите главные качества главного героя, которые позволили ему добиться успеха',
      file:'--',
      deadline:'25.11.2023',
      goals:'Выявить качества успешного сотрудника. Продумать мероприятия по внедрению полученных знаний в свою работу',
      critery:'Найти минимум 5 качеств',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        user_id:8,
        course_id:2,
        title:'45 татуировок менеджера',
        content:'Прочитать книгу и выписать для себя 5 татуировок, которые будете использовать в работе',
        file:'полезные материалы в библиотеке',
        deadline:'23.11.2023',
        goals:'Поиск новых инструментов для эффективной работы и управления',
        critery:'Выписать минимум 5 татуировок',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          user_id:8,
          course_id:2,
          title:'Игра на понижение',
          content:`Внимательно посмотрите фильм и ответьте на вопросы:
          Из-за чего произошел кризис?
          Каким способом главный герой выявил проблему?
          Как главный герой взаимодействовал с другими героями фильма?`,
          file:'https://avatars.dzeninfra.ru/get-zen_doc/5207390/pub_60fbf121d0a97d5400d310a9_60fbf2e6102b8751767eeb6f/scale_1200',
          deadline:'23.11.2023',
          goals:'Технический анализ инвестиционных продуктов',
          critery:'Ответить на 3 вопроса',
          createdAt: new Date(),
          updatedAt: new Date(),
          }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Exercises', null, {});
  }
};

