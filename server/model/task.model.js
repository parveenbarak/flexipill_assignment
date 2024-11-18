const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize("b0wls6hit1xw9fkmw2lm", "usqrrp4suol9doyn", "7bdSXri5SENTJ6ABHosI", {
  host: "b0wls6hit1xw9fkmw2lm-mysql.services.clever-cloud.com",
  port:3306,
  dialect: "mysql",
});


const Task = sequelize.define(
  'Task',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM('High', 'Medium', 'Low'),
      allowNull: false,
      defaultValue: 'Low',
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'InProgress', 'Completed'),
      defaultValue: 'Pending',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    underscored: true, 
    tableName: 'tasks', 
  }
);

(async () => {
  try {
    await sequelize.sync(); 
    console.log('Tasks table has been created.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
})();

module.exports = Task;
