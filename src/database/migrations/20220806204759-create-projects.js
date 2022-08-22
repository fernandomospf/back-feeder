'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      gif: {
        type: Sequelize.BLOB
      },
      stack: {
        type: Sequelize.STRING
      },
      module: {
        type: Sequelize.STRING
      },
      difficult: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('projects');
  }
};