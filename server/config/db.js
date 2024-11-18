
const { Sequelize } = require("sequelize");



const sequelize = new Sequelize("b0wls6hit1xw9fkmw2lm", "usqrrp4suol9doyn", "7bdSXri5SENTJ6ABHosI", {
  host: "b0wls6hit1xw9fkmw2lm-mysql.services.clever-cloud.com",
  port:3306,
  dialect: "mysql", 
  logging: false, 
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL database established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { sequelize };
