"use client"
import TaskList from "./TaskList";
import { useMemo, useState } from "react";
import TaskMenu from "./TaskMenu";
import { TaskObj } from "../types";

const tasks = [
  {
    header: "Angular 12",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur, consectetur adipiscing elit. Nullam nec pur",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "React 17",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 3",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 4",
    description: "Description 4",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 5",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 6",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 7",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 8",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 9",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 10",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 11",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 12",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 13",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 14",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 15",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 16",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 17",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 18",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 19",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  },
  {
    header: "Vue 20",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 21",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: true,
  },
  {
    header: "Vue 22",
    description: "Description 1",
    startDate: new Date(),
    dueDate: new Date(),
    completed: false,
  }
];

const TaskBoard = () => {

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [tasksList, setTaskList]=useState(()=>tasks);
  const [editMode, setEditMode] = useState(false);

  const taskNames = useMemo(() => {
    return tasksList.map((task) => task.header);
  }, [tasksList]);

  const handleTaskSelection = (index: number) => {
    setSelectedTaskIndex(index);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  }

  const closeEditMode = () => {
    setEditMode(false);
  }

  const deleteSelectedTask=()=>{
    setTaskList(prevTasks=>prevTasks.filter((task, index)=>index!==selectedTaskIndex));
  };

  const updateSelectedTask=(task: TaskObj)=>{
    setTaskList(prevTasks=>prevTasks.map((prevTask, index)=>index===selectedTaskIndex?task:prevTask));
  };

  return (
    <div className="h-fit overflow-hidden lg:gap-[1.5rem] sm:gap-[1rem] gap-0 flex bg-red lg:flex-row flex-col ">
      <TaskList taskNames={taskNames} selectedTaskIndex={selectedTaskIndex} onTaskSelect={handleTaskSelection} closeEditMode={closeEditMode} />
      <TaskMenu task={tasksList[selectedTaskIndex]} editMode={editMode} toggleEditMode={handleEditModeToggle} deleteTask={deleteSelectedTask} updateTask={updateSelectedTask}/>
    </div>
  );
};

export default TaskBoard;
