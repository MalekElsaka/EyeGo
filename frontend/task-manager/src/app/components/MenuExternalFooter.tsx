import Link from "next/link";
import { TaskObj } from "../types";

interface MenuExternalFooterProps {
  task: TaskObj;
  editMode: boolean;
  deleteTask: () => void;
  updateTask: (task: TaskObj) => void;
  handleEditTask: () => void;
}

const MenuExternalFooter = ({
  editMode,
  deleteTask,
  updateTask,
  task,
  handleEditTask,
}:MenuExternalFooterProps) => {
  return (
    <>
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
            onClick={() => updateTask({ ...task, completed: !task?.completed })}
            className="md:w-32 w-1/3 h-full border-l border-black flex items-center justify-center xs:rounded-r-md md:rounded-md bg-[#433352] hover:bg-purple-700 transition-all ease-in-out duration-200"
          >
            {task?.completed ? "Done" : "Ongoing"}
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
    </>
  );
};

export default MenuExternalFooter;
