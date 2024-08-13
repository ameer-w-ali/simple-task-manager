import { useEffect, useState } from "react";
import { fetchTasks, updateTaskPriority } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";

const priorityStyles = {
  high: "bg-red-300 text-red-800",
  medium: "bg-yellow-300 text-yellow-800",
  low: "bg-green-300 text-green-800",
  none: "bg-gray-300 text-gray-800",
};

export default function Priority({ id, priority }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const priorityClass = priorityStyles[priority];
  const dispatch = useDispatch();

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handlePriorityChange = (priority) => {
    dispatch(updateTaskPriority({ id, priority }));
    setDropdownOpen(false);
  };
  return (
    <div className="relative text-center w-20">
      <span
        className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded ${priorityClass} cursor-pointer`}
        onClick={handleToggleDropdown}
      >
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
      {isDropdownOpen && (
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white rounded-lg shadow">
          <ul className="py-1 text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePriorityChange("none")}
            >
              None
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePriorityChange("low")}
            >
              Low
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePriorityChange("medium")}
            >
              Medium
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePriorityChange("high")}
            >
              High
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
