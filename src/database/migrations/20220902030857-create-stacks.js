'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stacks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      stackName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'stack_name',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('stacks');
  }
};