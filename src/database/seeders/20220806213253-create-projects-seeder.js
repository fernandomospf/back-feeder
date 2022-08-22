'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        description: 'Projeto inovador',
        url: 'xablau',
        gif: 'gif',
        stack: 'react',
        module: 'front-end',
        difficult: 'hard',
        userId: 1
      },
      {
        description: 'Projeto pronto',
        url: 'xablau',
        gif: 'gif',
        stack: 'react',
        module: 'back-end',
        difficult: 'easy',
        userId: 2
      }
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
