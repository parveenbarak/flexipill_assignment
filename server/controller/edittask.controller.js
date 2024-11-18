const Task = require("../model/task.model");

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  console.log("Task ID:", taskId);
  const { title, description, priority, deadline, status, email } = req.body;
  console.log("Request body:", title, description, priority, deadline, status, email);

  try {
    const [rowsUpdated, updatedTasks] = await Task.update(
      {
        title,
        description,
        priority,
        deadline,
        status,
        email,
      },
      {
        where: { id: taskId },
        returning: true, // This may return an array or an object, depending on your DB
      }
    );

    console.log("Rows updated:", rowsUpdated);
    console.log("Updated task data:", updatedTasks);

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Ensure updatedTasks contains the correct data
    return res.json(updatedTasks[0]);  // Access the first item if returning is an array
  } catch (e) {
    console.error("Error updating task:", e.message);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = { updateTask };
