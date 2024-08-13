import { X } from "lucide-react";
import { useSelector } from "react-redux";

const priorityStyles = {
  high: "bg-red-300 text-red-800",
  medium: "bg-yellow-300 text-yellow-800",
  low: "bg-green-300 text-green-800",
  none: "bg-gray-300 text-gray-800",
};


export default function TaskModel({ isOpen, onClose }) {
  const task = useSelector((state) => state.tasks.task);
  if (!isOpen || !task) return null;


  const priorityClass = priorityStyles[task.priority];
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
        <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
        <div className="flex items-center gap-2 text-sm">
          <p
            className={`text-sm font-medium px-2.5 py-0.5 rounded ${priorityClass} cursor-auto`}
          >
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </p>
          <p className="text-gray-700">
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : ""}
          </p>
        </div>
        <p className="text-gray-700 mt-4">
          {task.description || "No description provided"}
        </p>
      </div>
    </div>
  );
}
