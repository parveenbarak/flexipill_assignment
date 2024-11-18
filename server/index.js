require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { registerRoute } = require("./routes/register.route");

const { loginRoute } = require("./routes/login.route");
const { taskRoute } = require("./routes/task.route");
const { sequelize } = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/register", registerRoute);

app.use("/login", loginRoute);

app.use("/task", taskRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
  sequelize
  console.log("Connected to the database");
});
