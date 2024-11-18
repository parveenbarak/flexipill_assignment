const Task = require("../model/task.model"); 
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
  
    const deletedCount = await Task.destroy({
      where: { id: taskId },
    });
    console.log(deletedCount)

    if (deletedCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Failed to delete task", message: e.message });
  }
};

module.exports = { deleteTask };
