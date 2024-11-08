"use client";
import { useRef } from "react";
import { TaskObj } from "../types";
import EditIcon from "./EditIcon";
import Xicon from "./Xicon";
import Link from "next/link";

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
      const rawDate = dueDateRef.current?.value || task.dueDate.toISOString().split('T')[0];
      const dateValue = new Date(rawDate);
      updateTask({
        ...task,
        description: descriptionRef.current?.value || task.description,
        header: headerRef.current?.value || task.header,
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
        <div className="p-3 pb-2 border-b border-b-purple-950 flex flex-row">
          <div className="flex flex-col w-full">
            {!editMode ? (
              <h2 className="text-[1.8rem] font-bold text-purple-950">
                {task.header}
              </h2>
            ) : (
              <input
                ref={headerRef}
                maxLength={29}
                type="text"
                defaultValue={task.header}
                className="bg-[#C084FC] w-full text-[1.8rem] font-bold text-purple-950 outline-none"
              />
            )}
            <div className="flex flex-row w-full justify-between items-center">
              {!editMode ? (
                <p className="text-purple-950 w-fit font-medium">
                  Due:{" "}
                  {new Date(task.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              ) : (
                <input ref={dueDateRef} type="date" defaultValue={new Date(task.dueDate).toISOString().split('T')[0]} className="bg-[#C084FC] text-black" />
              )}

              {editMode && (
                <p className="bg-purple-950 px-1 font-semibold rounded-md text-[15px] -mr-8 ">
                  Edit Mode
                </p>
              )}
            </div>
          </div>

          <div
            onClick={toggleEditMode}
            className={`w-fit flex flex-row cursor-pointer h-fit rounded-full ${
              editMode ? "hover:bg-[#9965DD]" : ""
            } transition-all ease-in-out duration-200 ml-auto p-1 -mb-1 `}
          >
            {!editMode ? <EditIcon /> : <Xicon />}
          </div>
        </div>

        <div className="p-3 pt-1 flex flex-col overflow-y-auto h-fit w-full">
          {editMode ? (
            <textarea
              ref={descriptionRef}
              defaultValue={task.description}
              className="bg-[#C084FC] resize-none text-purple-950 outline-none"
              name="task_description"
              id="task_description"
              style={{ height: "400px" }}
            ></textarea>
          ) : (
            <p className="text-purple-950">{task.description}</p>
          )}
        </div>

        {!editMode && (
          <div
            className={`flex-row  hidden sm:flex items-center justify-end  ${
              editMode ? "mb-3" : "my-3"
            } min-h-11 h-11 w-full`}
          >
            <button
              onClick={deleteTask}
              className="w-28 mr-2 h-full rounded-md bg-purple-950 hover:bg-purple-700 transition-all ease-in-out duration-200"
            >
              Delete
            </button>
            <button
              onClick={() =>
                updateTask({ ...task, completed: !task.completed })
              }
              className="w-28 mr-4 h-full rounded-md bg-purple-950 hover:bg-purple-700 transition-all ease-in-out duration-200"
            >
              {task.completed ? "Done" : "Ongoing"}
            </button>
          </div>
        )}

        {editMode && (
          <div
            className={`flex-row  hidden sm:flex items-center justify-end  ${
              editMode ? "mb-3" : "my-3"
            } min-h-11 h-11 w-full`}
          >
            <button
              onClick={handleEditTask}
              className="w-28 mr-4 h-full rounded-md bg-purple-950 hover:bg-purple-700 transition-all ease-in-out duration-200"
            >
              Save
            </button>
          </div>
        )}
      </div>
      {!editMode && (
        <div className="flex-row md:bg-transparent xs:rounded-md bg-[#433352] flex justify-between sm:hidden w-full min-h-10 h-10">
          <Link
            href="/add-task"
            className="md:w-32 w-1/3 h-full flex border-r border-black items-center justify-center xs:rounded-l-md md:rounded-md  bg-[#433352] hover:bg-purple-700 transition-all ease-in-out duration-200"
          >
            Add Task
          </Link>
          <button
            onClick={deleteTask}
            className="md:w-32 w-1/3 h-full xs:rounded-md bg-[#433352] hover:bg-purple-700 transition-all ease-in-out duration-200"
          >
            Delete Task
          </button>
          <button
            onClick={() => updateTask({ ...task, completed: !task.completed })}
            className="md:w-32 w-1/3 h-full border-l border-black flex items-center justify-center xs:rounded-r-md md:rounded-md bg-[#433352] hover:bg-purple-700 transition-all ease-in-out duration-200"
          >
            {task.completed ? "Done" : "Ongoing"}
          </button>
        </div>
      )}

      {editMode && (
        <div className="flex-row md:bg-transparent xs:rounded-md bg-[#433352] hover:bg-purple-700 transition-all ease-in-out duration-200 flex justify-between sm:hidden w-full min-h-10 h-10">
          <button onClick={handleEditTask} className="w-full">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskMenu;
