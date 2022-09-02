'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        name_project: 'Projeto Trybetunes',
        description: 'Projeto inovador',
        url: 'xablau',
        gif: 'gif',
        module: 'front-end',
        difficult: 'hard',
        stacks: ['JAVA'],
        user_id: 1,
      },
      {
        name_project: 'Projeto trynfo',
        description: 'Projeto pronto',
        url: 'xablau',
        gif: 'gif',
        module: 'back-end',
        stacks: ['HTML'],
        difficult: 'easy',
        user_id: 2,
      }
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
