import { useState, useEffect } from "react";
import axios from "axios";
import { TaskObj } from "../../types";

export const useTasks = () => {
  const [tasksList, setTaskList] = useState<TaskObj[]>([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  },[])

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/task");
        if (response.status === 200 && response.data.data) {
          setTaskList(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    getAllTasks();
  }, []);

  return { tasksList, setTaskList, isLoading, isClient };
};