'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        description: 'Projeto inovador',
        url: 'xablau',
        gif: 'gif',
        module: 'front-end',
        difficult: 'hard',
        user_id: 1,
      },
      {
        description: 'Projeto pronto',
        url: 'xablau',
        gif: 'gif',
        module: 'back-end',
        difficult: 'easy',
        user_id: 2,
      }
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
