'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stacksProjects', {
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'project_id',
        primaryKey: true,
        references: {
          model: 'projects',
          key: 'id'
        },
      },
      stackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'stack_id',
        primaryKey: true,
        references: {
          model: 'stacks',
          key: 'id'
        },
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('stacks-projects');
  }
};