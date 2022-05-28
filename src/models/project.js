const Project = (sequelize, DataTypes) => {
  const project = sequelize.define({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    module: DataTypes.STRING,
    goal: DataTypes.STRING,
    videolink: DataTypes.STRING,
    technology: DataTypes.STRING
  }, {
    timestamps: false,
  });

  project.associate = (model) => {
    project.belongsTo(model.User, 
      { foreignKey: 'userId', as: 'user' });
  };

  return project;
};

module.exports = Project;
