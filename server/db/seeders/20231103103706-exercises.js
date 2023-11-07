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
      addMaterial:'Сериал Игры Престолов',
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
        addMaterial:'-',
        critery:'Выписать минимум 5 татуировок',
        createdAt: new Date(),
        updatedAt: new Date(),
        }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Exercises', null, {});
  }
};
