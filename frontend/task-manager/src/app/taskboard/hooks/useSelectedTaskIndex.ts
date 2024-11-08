import { useState } from "react";
import { TaskObj } from "../../types";
import axios from "axios";

export const useSelectedTaskIndex = (
  tasksList: TaskObj[],
  setTaskList: React.Dispatch<React.SetStateAction<TaskObj[]>>
) => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const handleTaskSelection = (index: number) => {
    setSelectedTaskIndex(index);
  };

  const deleteSelectedTask = async () => {
    setTaskList((prevTasks) =>
      prevTasks.filter((task, index) => index !== selectedTaskIndex)
    );

    const response = await axios.delete(
      `http://localhost:4000/task/${tasksList[selectedTaskIndex]._id}`
    );
    if (response.status !== 200) {
      console.error("Failed to delete task");
    }
  };

  const updateSelectedTask = async (task: TaskObj) => {
    setTaskList((prevTasks) =>
      prevTasks.map((prevTask, index) =>
        index === selectedTaskIndex ? task : prevTask
      )
    );

    const response = await axios.patch(
      `http://localhost:4000/task/${tasksList[selectedTaskIndex]._id}`,
      task
    );
    if (response.status !== 200) {
      console.error("Failed to update task");
    }
  };

  return {
    selectedTaskIndex,
    handleTaskSelection,
    deleteSelectedTask,
    updateSelectedTask,
  };
};
