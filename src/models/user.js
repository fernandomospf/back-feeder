const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: false
  });

  user.associate = (model) => {
    user.hasMany(model.Project,
      { foreignKey: 'projectId', as: 'projects' });
  }

  return user;
};

module.exports = User;
