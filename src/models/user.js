const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    timestamps: false
  });

  user.associate = (model) => {
    user.hasMany(model.Project,
      { foreignKey: 'userId', as: 'projects' });
  }

  return user;
};

module.exports = User;
