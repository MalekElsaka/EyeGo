'use client';
import Task from "./Task";

interface TaskListProps{
  taskNames:string[];
  selectedTaskIndex: number;
  onTaskSelect: (index:number)=>void;
  closeEditMode: ()=>void;
}

const TaskList = ({taskNames, selectedTaskIndex, onTaskSelect, closeEditMode}:TaskListProps) => {
  return (
    <div className="flex lg:flex-col w-full flex-row gap-[0.7rem] task-list lg:w-fit lg:min-w-[164px] lg:h-[580px] overflow-auto">
      {taskNames?.map((name, index) => {
        return <Task key={index} selected={index===selectedTaskIndex} closeEditMode={closeEditMode} name={name} onClick={()=>onTaskSelect(index)} />;
      })}
    </div>
  );
};

export default TaskList;
