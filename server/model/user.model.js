const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize("b0wls6hit1xw9fkmw2lm", "usqrrp4suol9doyn", "7bdSXri5SENTJ6ABHosI", {
  host: "b0wls6hit1xw9fkmw2lm-mysql.services.clever-cloud.com",
  port:3306,
  dialect: "mysql",
});
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "users",
  }
);

(async () => {
  try {
    await sequelize.sync();
    console.log("Users table has been created.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
})();

module.exports = User;
