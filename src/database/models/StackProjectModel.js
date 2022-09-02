'use strict';
const { Model } = require('sequelize');
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
      modelName: 'stacksProjects',
      sequelize,
      timestamps: false,
      underscored: true,
    }
  );
  return stacks;
};

module.exports = {
  StackProjectModel,
};
