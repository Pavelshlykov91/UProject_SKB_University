'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Interviews', [{
      user_id:1,
      title:'Бизнес в современном мире',
      content:`С какой, на Ваш взгляд, самой большой трудностью может столкнуться стартап?

      В общем-то, нет одной большой трудности, это скорее комплекс задач. На первое место я бы поставил сложность найти идею и финансирование. Важно быть готовым к рискам. Нужно собрать команду, правильно работать, выстраивать процессы, затем получать дополнительное финансирование — это важно для стартапов. Ну, а сам бизнес нужно сразу выстраивать понимая цель, что именно можно на нем заработать.
      
      Какие распространенные ошибки могут подстерегать начинающих бизнесменов и как их избежать?
      
      Могут быть ошибки в процессах, в недостаточной подготовке, в непонимании информации. Нужно хорошо готовиться, писать бизнес-план. Стартапер должен написать «дорожную карту». Должно быть четкое понимание куда двигаться. Если этого нет, то это ошибка с самого начала. Другая ошибка может быть в подборе персонала, отсутствие контроля за происходящим. Особенно финансовых потоков — их всегда важно контролировать. Иначе бизнес обрушится.`,
      url:'https://i.dailymail.co.uk/i/pix/2013/02/27/article-2285272-184CDE1E000005DC-509_306x531.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:2,
      title:'Как отвлекаться от работы',
      content:`Давайте я вам расскажу о том, как построен мой рабочий день, и, как и когда я отдыхаю.

      Мои будни: Просыпаюсь в 7:30 утра, завтракаю, моюсь и проверяю список дел, в 9:00 приступаю к работе (если в этот день с утра иду в спортзал, то к работе приступаю в 11:00, так бывает 2 раза в неделю).
      
      Далее провожу работу над соцсетями и работаю над проектами, стараюсь делить рабочий день на блоки, каждому блоку посвящаю 1-2 задачи, работать заканчиваю примерно в 18:00, иногда раньше, иногда позже, но после 20:00 редко возвращаюсь к компьютеру.
      
      После 19:00-20:00 начинается мой ежедневный отдых, но я также стараюсь провести его с пользой. Гуляю с собакой, иду в ТЦ за продуктами или ужинаю в ближайшем кафе. Перед сном читаю бумажные книги (постоянно пополняю свою библиотеку).
      
      По будням редко смотрю тв, особенно новости, решил их исключить из своего графика, они отнимают очень много сил и энергии. Смотрю и читаю новости только по профессии, уверен это полезнее.
      
      По выходным у меня основной отдых, за 16 лет работы в найме я очень привык к графику 5/2, поэтому до сих пор его придерживаюсь. По субботам работаю до обеда, после работы гуляю по Москве или идем с женой в театр/кино/ресторан.`,
      url:'https://img.greenword.ru/2013/04/what-ali-wore-02.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:3,
      title:'Как правильно учиться',
      content:`Теоретические материалы — это удобно. Но для лучшего запоминания я веду бумажные конспекты. По всем предметам. Особенно полезно, конспектировать такие гуманитарные предметы, как историю и обществознание. Только чтобы быть активной на уроке и успевать отвечать в чате, делать это нужно правильно.
      Слушайте преподавателя и следите за презентацией. Выделяйте только главные мысли, не пишите слово в слово. Если не успели что-то записать, оставьте место в тетради и вернитесь к этому во время просмотра записи.`,
      url:'https://s.poembook.ru/theme/e4/92/da/c52c7e926a25ec7a429ad271cfa98aaa63985250.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id:3,
      title:'Как правильно учиться',
      content:`– Мы часто слышим истории известных лидеров и бизнесменов – как эмоциональный интеллект предопределил их успех. А в чем, по-вашему, секрет этого явления?

      – Здесь правильнее начать с того, что же такое эмоциональный интеллект сам по себе. Если говорить простыми словами, это способность человека понимать и контролировать эмоции – как собственные, так и окружающих людей. Чем выше уровень эмоционального интеллекта, тем проще нам достигать целей, правильно расставлять приоритеты и общаться с окружающими.
      
      Мы живем в очень динамичном мире, и на сегодняшний день совершенно не важно, какая у вас семья, диплом или финансовое благополучие. Независимо от сферы деятельности и вашей роли – будь вы предпринимателем, мамой, женой, мечтательным подростком, – да кем угодно – успех в большинстве случаев зависит от того, насколько развиты ваши способности обращать на себя внимание, дружить, заводить семью, строить долгосрочные отношения, воспитывать счастливых детей и проявлять лидерские качества. Понимаете? Успех сегодня формируется, опираясь на другие ценности, нежели 10-15 лет назад.
      
      – То есть людям с высоким уровнем эмоционального интеллекта проще стать успешными, например, в бизнесе?
      
      – Судите сами – в процессе принятия решений любой человек опирается на полученный им ранее опыт, на те эмоции и чувства, которые он испытывал в той или иной ситуации. Так у нас формируются паттерны (шаблоны) поведения. Они-то и определяют наши будущие поступки в схожих ситуациях.
      
      Представьте, что вы возглавляете, скажем, отдел маркетинга, крупной сети магазинов бытовой техники. Случилась непредвиденная кризисная ситуация, и вы должны сообщить о ней своему директору. Вот здесь и начинается самое интересное…
      
      С одной стороны, вы можете подготовить доклад и предложить шефу оперативный план по выходу из кризиса, а с другой – раньше у вас получалось успешно решать похожие (на ваш взгляд) вопросы на своем уровне. Вы принимаете решение, опираясь на собственные ощущения и эмоции в прошлом: «Что-нибудь придумаем. Получалось раньше, получится и сейчас», – рассуждаете вы. Принимая решение таким образом, вы не сообщите критически важную информацию директору, и ваш магазин придется закрыть.`,
      url:'https://i.ytimg.com/vi/K6b5OjSxuxE/maxresdefault.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Interviews', null, {});
  }
};
