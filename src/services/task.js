const Task=require('../models/Task')

// Create Task
const createTaskService = async (data) => {
  const task = await Task.create(data);
  return task;
};

// Get All Tasks
const getAllTasksService = async () => {
  const tasks = await Task.find();
  return tasks;
};

// Get Task by ID 
const getTaskByIdService = async (id) => {
  const task = await Task.findById(id);
  return task;
};

// Update Task
const updateTaskService = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  return task;
};

// Delete Task
const deleteTaskService = async (id) => {
  await Task.findByIdAndDelete(id);
  return true;
};

module.exports ={
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService

       
}