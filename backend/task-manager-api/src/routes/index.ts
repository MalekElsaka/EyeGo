import express from 'express';
import TaskController from '../controllers/Task';

const router = express.Router();

router.route('/task')
  .get(TaskController.getAllTasks)
  .post(TaskController.createTask);

router.route('/task/:id')
  .get(TaskController.getTaskById)
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

router.route('/task/status/:status')
  .get(TaskController.getTasksByStatus);


export default router;