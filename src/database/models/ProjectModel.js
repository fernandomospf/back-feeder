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
    stack: {
      type: DataTypes.STRING,
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

ProjectModel.belongsTo(UserModel, { foreignKey:'a', as:'projects' })
UserModel.hasMany(ProjectModel, { foreignKey:'a', as:'projects' })

module.exports = {
  ProjectModel,
}
