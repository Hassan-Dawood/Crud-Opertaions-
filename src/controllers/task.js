const {taskService} = require("../services/task");

// Create Task
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTaskService(req.body);
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasksService();
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Task
const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskByIdService(req.params.id);
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTaskService(req.params.id, req.body);
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTaskService(req.params.id);
    res.status(200).json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports ={
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask

       
}