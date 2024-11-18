require("dotenv").config();
const jwt = require("jsonwebtoken");
const Task = require("../model/task.model"); 
const getTask = async (req, res) => {
  const token = req.params.token;
  try {
   
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const email = verified.email;

    const tasks = await Task.findAll({
      where: { email }, 
    });

    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { getTask };
