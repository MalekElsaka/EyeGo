"use client";
import { useRef } from "react";
import { TaskObj } from "../types";
import EditIcon from "./EditIcon";
import Xicon from "./Xicon";
import Link from "next/link";
import MenuHeader from "./MenuHeader";
import MenuDescription from "./MenuDescription";
import MenuInternalFooter from "./MenuInternalFooter";
import MenuExternalFooter from "./MenuExternalFooter";

interface TaskMenuProps {
  task: TaskObj;
  deleteTask: () => void;
  updateTask: (task: TaskObj) => void;
  editMode: boolean;
  toggleEditMode: () => void;
}

const TaskMenu = ({
  task,
  editMode,
  toggleEditMode,
  deleteTask,
  updateTask,
}: TaskMenuProps) => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const headerRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleEditTask = () => {
    if (editMode) {
      const rawDate =
        dueDateRef.current?.value || task?.dueDate.toISOString().split("T")[0];
      const dateValue = new Date(rawDate);
      updateTask({
        ...task,
        description: descriptionRef.current?.value || task?.description,
        title: headerRef.current?.value || task?.title,
        dueDate: dateValue,
      });
    }
    toggleEditMode();
  };

  return (
    <div className="flex lg:w-[600px] w-full max-h-[570px] h-fit flex-col sm:bg-[#433352] text-[#c3b3d1] rounded-md sm:p-5 sm:pt-3">
      <div className=" hidden sm:flex  justify-between h-[2.5rem] min-h-[2.5rem] items-center flex-row">
        <h1 className="text-[1.5rem] font-semibold">Malek Elsakas Tasks</h1>

        {!editMode && (
          <Link
            href="/add-task"
            className="w-24 h-full flex justify-center items-center rounded-md bg-[#9965dd] hover:bg-purple-600 text-black transition-all ease-in-out duration-200"
          >
            Add Task
          </Link>
        )}
      </div>

      <div className="w-full h-fit overflow-hidden flex flex-col mb-3 mt-5 bg-purple-400 xs:rounded-md">
        <MenuHeader
          task={task}
          editMode={editMode}
          toggleEditMode={toggleEditMode}
          dueDateRef={dueDateRef}
          headerRef={headerRef}
        />

        <MenuDescription
          task={task}
          editMode={editMode}
          descriptionRef={descriptionRef}
        />

        <MenuInternalFooter
          task={task}
          editMode={editMode}
          updateTask={updateTask}
          handleEditTask={handleEditTask}
          deleteTask={deleteTask}
        />
      </div>
      <MenuExternalFooter task={task} editMode={editMode} deleteTask={deleteTask} updateTask={updateTask} handleEditTask={handleEditTask}/>
    </div>
  );
};

export default TaskMenu;
