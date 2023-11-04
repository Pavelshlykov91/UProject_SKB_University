'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      firstName:'Иван',
      lastName:'Иванов',
      surname:'Иваныч',
      email:'Ivan@sovcombank.ru',
      password:'111',
      city:'Санкт-Петербург',
      position:'Управляющий прямых продаж',
      department:'Прямые продажи',
      bg:'Северная-2',
      role:'студент',
      course_id:1,
      foto:'https://cs14.pikabu.ru/post_img/2021/11/07/7/163628558219781558.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        firstName:'Петр',
        lastName:'Петров',
        surname:'Петрыч',
        email:'Petr@sovcombank.ru',
        password:'111',
        city:'Москва',
        position:'Управляющий торговых сетей',
        department:'Торговые сети',
        bg:'Южная-1',
        role:'студент',
        course_id:1,
        foto:'https://i.ytimg.com/vi/11a-4Xhrz9Y/sddefault.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          firstName:'Василина',
          lastName:'Учебникова',
          surname:'Петровна',
          email:'Vasilina@sovcombank.ru',
          password:'111',
          city:'Москва',
          position:'ЗНСРХ',
          department:'Диджитал',
          bg:'МД',
          role:'студент',
          course_id:1,
          foto:'http://s00.yaplakal.com/pics/pics_preview/5/0/9/14124905.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            firstName:'Лебедев',
            lastName:'Артемий',
            surname:'Леонидович',
            email:'Artemiy@sovcombank.ru',
            password:'111',
            city:'Череповец',
            position:'Начальник маркетинга',
            department:'Управление маркетинга',
            bg:'СЗД',
            role:'студент',
            course_id:2,
            foto:'https://def4onki.ru/wp-content/uploads/2020/07/maxresdefault-6.jpg',
            createdAt: new Date(),
            updatedAt: new Date(),
            },
            {
              firstName:'Спящий',
              lastName:'Дмитрий',
              surname:'Анатольевич',
              email:'Dmitriy@sovcombank.ru',
              password:'111',
              city:'Калининград',
              position:'ЗНСРХ',
              department:'Управление рисками',
              bg:'МД',
              role:'студент',
              course_id:2,
              foto:'https://avatars.dzeninfra.ru/get-zen_doc/2957013/pub_61f4165762e8675a96850ed7_61f417072c5367756e020ff7/scale_1200',
              createdAt: new Date(),
              updatedAt: new Date(),
              },
              {
                firstName:'Говорящий',
                lastName:'Дмитрий',
                surname:'Дмитриевич',
                email:'Dmitriy2@sovcombank.ru',
                password:'111',
                city:'Москва',
                position:'Управляющий',
                department:'Прямые продажи',
                bg:'МД',
                role:'студент',
                course_id:1,
                foto:'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_60e418542f1be51987b95cc9_60e4189845d24303ec0d4f1e/scale_1200',
                createdAt: new Date(),
                updatedAt: new Date(),
                },
                {
                  firstName:'Аршавин',
                  lastName:'Андрей',
                  surname:'Дмитриевич',
                  email:'Andrey@sovcombank.ru',
                  password:'111',
                  city:'Москва',
                  position:'Руководитель группы',
                  department:'Прямые продажи',
                  bg:'МД',
                  role:'студент',
                  course_id:1,
                  foto:'https://avatars.dzeninfra.ru/get-zen_doc/2408175/pub_60e418542f1be51987b95cc9_60e4189845d24303ec0d4f1e/scale_1200',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  },
                  {
                    firstName:'Главный',
                    lastName:'Сергей',
                    surname:'Семенович',
                    email:'Sergey@sovcombank.ru',
                    password:'111',
                    city:'Москва',
                    position:'Управляющий',
                    department:'Управляющая компания',
                    bg:'МД',
                    role:'преподаватель',
                    course_id:1,
                    foto:'https://s0.rbk.ru/v6_top_pics/media/img/9/47/754598824402479.jpeg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    }], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
