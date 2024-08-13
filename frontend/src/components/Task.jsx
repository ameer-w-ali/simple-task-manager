import { useState } from "react";
import { Pencil, Square, SquareCheck, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  getTask,
  removeTask,
  updateTaskStatus,
} from "../features/tasks/taskSlice";
import UpdateTaskModel from "./UpdateTaskModel";
import Priority from "./Priority";
import TaskModel from "./TaskModel";

export default function Task({ _id, title, dueDate, priority, status }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskIsOpen, setTaskIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(getTask(_id));
    setIsOpen(true);
  };

  const handleDelete = () => {
    dispatch(removeTask(_id));
  };

  const handleChecked = () => {
    dispatch(updateTaskStatus(_id));
  };

  const handleTitleClick = async () => {
    await dispatch(getTask(_id));
    setTaskIsOpen(true);
  };

  return (
    <>
      <div className="flex gap-4 items-center mb-2">
        <span className="cursor-pointer" onClick={handleChecked}>
          {status ? (
            <SquareCheck className="text-gray-500" />
          ) : (
            <Square className="text-gray-500" />
          )}
        </span>
        <p className="basis-1/3 cursor-pointer" onClick={handleTitleClick}>
          {title}
        </p>
        <Priority id={_id} priority={priority} />
        <p className="basis-1/6 text-center">
          {dueDate ? new Date(dueDate).toLocaleDateString() : "-"}
        </p>
        <div className="basis-1/12">
          <Pencil
            size={20}
            onClick={handleEdit}
            className="text-blue-500 cursor-pointer ml-5"
          />
        </div>
        <div className="basis-1/12">
          <Trash
            size={20}
            onClick={handleDelete}
            className="text-red-500 cursor-pointer ml-5"
          />
        </div>
      </div>
      <TaskModel isOpen={taskIsOpen} onClose={() => setTaskIsOpen(false)} />
      <UpdateTaskModel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
