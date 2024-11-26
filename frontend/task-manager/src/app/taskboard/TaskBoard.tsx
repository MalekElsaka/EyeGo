"use client";
import TaskList from "../components/TaskList";
import TaskMenu from "../components/TaskMenu";
import { useTasks } from "./hooks/useTasks";
import { useSelectedTaskIndex } from "./hooks/useSelectedTaskIndex";
import { useEditMode } from "./hooks/useEditMode";
import TasksFilter from "../components/Filter";
import NoResults from "../components/NoResults";

const TaskBoard = () => {
  const { tasksList, setTaskList, isLoading } = useTasks();
  const {
    selectedTaskIndex,
    handleTaskSelection,
    deleteSelectedTask,
    updateSelectedTask,
  } = useSelectedTaskIndex(tasksList, setTaskList);
  const { editMode, handleEditModeToggle, closeEditMode } = useEditMode();

  const taskNames =
    tasksList.length > 0 ? tasksList.map((task) => task.title) : [];

  console.log(selectedTaskIndex);
  return (
    <div className="h-fit overflow-hidden lg:gap-[1.1rem] sm:gap-[0.8rem] gap-0 flex bg-red lg:flex-row flex-col ">
      <TaskList
        taskNames={taskNames}
        selectedTaskIndex={selectedTaskIndex}
        onTaskSelect={handleTaskSelection}
        closeEditMode={closeEditMode}
      />
      <div className="flex flex-row lg:w-[680px] lg:gap-0 w-full gap-4 justify-between">
        {isLoading ? (
          <div className="w-full"></div>
        ) : tasksList[selectedTaskIndex] ? (
          <>
            <TaskMenu
              task={tasksList[selectedTaskIndex]}
              editMode={editMode}
              toggleEditMode={handleEditModeToggle}
              deleteTask={deleteSelectedTask}
              updateTask={updateSelectedTask}
            />
          </>
        ) : (
          <NoResults />
        )}
        <TasksFilter setTaskList={setTaskList} />
      </div>
    </div>
  );
};

export default TaskBoard;