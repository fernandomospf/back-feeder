'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Pedro Lima',
          username: 'pdin',
          email: 'Pedro@email.com',
          password: '6817a8c319cb881e2e53372baf40320c',
          classname: '16A',
        },
        {
          name: 'Eduado Myauzaki',
          username: 'Gashlurtz',
          email: 'oni-chan@email.com',
          password: '495f4682e38181f6a5a5f3ee8831f1d4',
          classname: '',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
