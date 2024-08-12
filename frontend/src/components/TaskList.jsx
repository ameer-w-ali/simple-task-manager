import { useEffect } from "react";
import { SquareCheck } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../features/tasks/taskSlice";
import Task from "./Task";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {loading && tasks.length === 0 ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <>
          <div className="flex gap-4 font-bold text-xl items-center">
            <span className="flex items-center mt-1 w-[2ch]">
              <SquareCheck className="text-gray-500 rounded" />
            </span>
            <span className="basis-2/6">Task</span>
            <span className="basis-1/12 text-center">Priority</span>
            <span className="basis-1/6 text-center">Due Date</span>
            <span className="basis-1/12">Edit</span>
            <span className="basis-1/12">Delete</span>
          </div>
          <hr className="border-neutral-300 rounded-full border mt-2 mb-2" />
          {tasks.map((task) => (
            <Task key={task._id} {...task} />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
