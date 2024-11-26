"use client";
import Checkbox from "./Checkbox";
import { useState } from "react";
import { TaskObj } from "../types";
import axios from "axios";

interface TasksFilterProps {
  setTaskList: (tasks: TaskObj[]) => void;
}

const TasksFilter = ({ setTaskList }: TasksFilterProps) => {
  const [filterState, setFilterState] = useState("All");

  const handleFilterChange = async (label: string) => {
    setFilterState(() => label);
    if (label === "All") {
      const response = await axios.get("http://localhost:4000/task");
      if(response.status === 200) setTaskList(response.data.data);
    }
    else
    {
        const response = await axios.get(`http://localhost:4000/task/status/${label.toLowerCase()}`);
        if(response.status === 200) setTaskList(response.data.data);
    }
  };

  return (
    <div className="h-52 gap-4 w-16 min-w-16 sm:mt-0 mt-[18px] flex flex-col rounded-sm bg-[#423352]">
      <Checkbox
        filterState={filterState}
        onFilterChange={handleFilterChange}
        label="All"
      />
      <Checkbox
        filterState={filterState}
        onFilterChange={handleFilterChange}
        label="To do"
      />
      <Checkbox
        filterState={filterState}
        onFilterChange={handleFilterChange}
        label="Done"
      />
    </div>
  );
};

export default TasksFilter;
