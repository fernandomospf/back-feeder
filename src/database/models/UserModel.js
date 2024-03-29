const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    modelName: 'users',
    sequelize,
    timestamps: false,
    underscore: true,
  }
);

module.exports = {
  UserModel,
};
