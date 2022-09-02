'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('stacks', [
      {
        id: 1,
        stack_name: 'Javascript',
      },
      {
        id: 2,
        stack_name: 'React.JS',
      },
      {
        id: 3,
        stack_name: 'RTL',
      },
      {
        id: 4,
        stack_name: 'VUE.JS',
      },
      {
        id: 5,
        stack_name: 'Angular.JS',
      },
      {
        id: 6,
        stack_name: 'Next.JS',
      },
      {
        id: 7,
        stack_name: 'Nuxt.JS',
      },
      {
        id: 8,
        stack_name: 'MySQL',
      },
      {
        id: 9,
        stack_name: 'Node.JS',
      },
      {
        id: 10,
        stack_name: 'Typescript',
      },
      {
        id: 11,
        stack_name: 'Mongodb',
      },
      {
        id: 12,
        stack_name: 'Python',
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('stacks', null, {});
  }
};
