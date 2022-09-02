const { sequelize } = require('.'); 
const { Model, DataTypes } = require('sequelize');;
const { UserModel } = require('./UserModel');

class ProjectModel extends Model { }

ProjectModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameProject: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: true,
    },
    module: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficult: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stacks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
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
ProjectModel.belongsTo(UserModel, { foreignKey:'userId', as:'userProjects' });

module.exports = {
  ProjectModel,
}
