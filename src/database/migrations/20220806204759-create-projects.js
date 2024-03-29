'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nameProject: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_project',
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gif: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      module: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      difficult: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stacks: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },
  
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('projects');
  },
};
    