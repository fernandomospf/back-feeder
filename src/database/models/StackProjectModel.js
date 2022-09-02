'use strict';
const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');
const { ProjectModel } = require('./ProjectModel');
const { StackModel } = require('./StackModel');

class StackProjectModel extends Model {}

StackProjectModel.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: ProjectModel,
          key: 'id',
        },
      },
      stackId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: StackModel,
          key: 'id',
        },
      },
    },
    {
      modelName: 'stacks_projects',
      tableName: 'stacksProjects',
      sequelize,
      timestamps: false,
      underscored: true,
    }
  );
    
module.exports = {
  StackProjectModel,
};
