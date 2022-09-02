const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class StackModel extends Model {}

StackModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    stackName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'stacks',
    sequelize,
    timestamps: false,
    underscore: true,
  }
);

module.exports = {
  StackModel,
};
