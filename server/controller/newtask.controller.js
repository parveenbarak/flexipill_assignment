const Task = require("../model/task.model"); 

const createTask = async (req, res) => {
  const { title, description, priority, deadline, status, email } = req.body;
  try {

    const newTask = await Task.create({
      title,
      description,
      priority,
      deadline,
      status,
      email,
    });

    return res.status(201).json(newTask);
  } catch (e) {
    console.error(e);

    if (e.name === "SequelizeValidationError" || e.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: e.errors[0].message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createTask };
