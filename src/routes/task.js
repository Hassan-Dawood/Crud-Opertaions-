const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management APIs
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               priority:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post("/tasks", taskController.createTask);


/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of all tasks
 */
router.get("/tasks", taskController.getAllTasks);


/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Task details
 */
router.get("/tasks/:id", taskController.getTaskById);


/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.put("/tasks/:id", taskController.updateTask);


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
router.delete("/tasks/:id", taskController.deleteTask);


module.exports = router;
