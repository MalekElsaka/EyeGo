import { TaskObj } from "../types";

interface MenuInternalFooterProps {
  task: TaskObj;
  editMode: boolean;
  deleteTask: () => void;
  updateTask: (task: TaskObj) => void;
  handleEditTask: () => void;
}

const MenuInternalFooter = ({
  task,
  editMode,
  deleteTask,
  updateTask,
  handleEditTask,
}:MenuInternalFooterProps) => {
  return (
    <>
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
            onClick={() => updateTask({ ...task, completed: !task?.completed })}
            className="w-28 mr-4 h-full rounded-md bg-purple-950 hover:bg-purple-700 transition-all ease-in-out duration-200"
          >
            {task?.completed ? "Done" : "Ongoing"}
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
    </>
  );
};

export default MenuInternalFooter;
