const { sequelize } = require('.'); 
const { Model, DataTypes } = require('sequelize');;
const { UserModel } = require('./UserModel');
const { StackModel } = require('./StackModel');

class ProjectModel extends Model { }

ProjectModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gif: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    stacks: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    module: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficult: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'projects',
    sequelize,
    timestamps: false,
    underscored: true,
  }
);

UserModel.hasMany(ProjectModel, { foreignKey:'userId', as:'developer' });
ProjectModel.belongsTo(UserModel, { foreignKey:'userId', as:'projects' });

ProjectModel.belongsToMany(StackModel, { foreignKey:'projectId', as:'stacksProjects' });
StackModel.belongsToMany(ProjectModel, { foreignKey:'stackId', as:'projectsStacks' });

module.exports = {
  ProjectModel,
}
