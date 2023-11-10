"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ExerciseMaterials",
      [
        {
          name: "Описание задания",
          exercise_id: 1,
          timing: "До 23.11",
          content: "Первое ознакомительное задание",
          file: "111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Описание задания",
          exercise_id: 2,
          timing: "До 24.11",
          content: "Первое задание второго курса",
          file: "112",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Правила ввода ",
          exercise_id: 2,
          timing: "До 25.11",
          content: "Правила ввода сотрудников в должности",
          file: "113",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Описание задания",
          exercise_id: 3,
          timing: "До 25.11",
          content: "Правила ввода сотрудников в должности",
          file: "113",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Список вопросов",
          exercise_id: 3,
          timing: "30 минут",
          content: "Список вопросов для ответов на вопрос",
          file: "113",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ExerciseMaterials", null, {});
  },
};
