'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Pedro Lima",
        email: "Pedro@email.com",
        password: "pedro12345"
      },
      {
        name: "Eduado Myauzaki",
        email: "oni-chan@email.com",
        password: "sharigan12345"
      }
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
