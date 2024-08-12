import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../features/tasks/taskSlice";

const TaskModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.task);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');


  const formatDateForInput = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if(!task) return;
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(formatDateForInput(new Date(task.dueDate)));
    setPriority(task.priority);
  }, [task]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      _id: task._id,
      title,
      description,
      priority,
      status: false,
      dueDate: dueDate === "" ? undefined : dueDate,
    };
    dispatch(updateTask(newTask));
    setTitle("");
    setDescription("");
    setPriority("none");
    setDueDate("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Update Task</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Priority
            </label>
            <div className="relative">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="block appearance-none w-full bg-white border border-neutral-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500"
              >
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-800 mb-2">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-neutral-300 text-neural-800 px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-neutral-950 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
