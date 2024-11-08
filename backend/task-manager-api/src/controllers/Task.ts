import express, { response } from "express";
import { TaskModel } from "../db/TaskModel";

class TaskController {
  getAllTasks = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const tasks = await TaskModel.find();
      return res.status(200).json({ data: tasks });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  getTaskById = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const { id } = req.params;
      const task = await TaskModel.findById(id);
      return res.status(200).json({ data: task });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  getTasksByStatus = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const { status } = req.params;
      const tasks = await TaskModel.find({ completed: status==="done" });
      return res.status(200).json({ data: tasks });
    } catch (error) {
      return res.sendStatus(400);
    }
  }

  createTask = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const { title, description, completed, dueDate } = req.body;
      const task = new TaskModel({ title, description, completed, dueDate });
      await task.save();
      return res.status(201).json({ data: task });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  updateTask = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const { id } = req.params;
      const { title, description, completed, dueDate } = req.body;

      const updateData = {
        title,
        description,
        completed,
        dueDate,
      };

      const task = await TaskModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      return res.status(200).json({ data: task });
    } catch (error) {
      return res.sendStatus(400);
    }
  };

  deleteTask = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
      const { id } = req.params;
      await TaskModel.findByIdAndDelete(id);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  };

}

export default new TaskController();
