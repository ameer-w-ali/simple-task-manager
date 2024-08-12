import React, { useState } from "react";
import { Plus } from "lucide-react";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModel";


export default function Manager() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="min-w-[420px] mx-auto">
      <div className="flex items-center text-3xl font-bold gap-2 mb-4">
        Tasks
        <Plus
          className="mt-1 rounded border-2 border-neutral-600 text-neutral-600 cursor-pointer"
          strokeWidth={2.5}
          size={22}
          onClick={handleOpenModal}
        />
      </div>
      <hr className="border-neutral-300 rounded-full border-b-2 mt-4 mb-2" />
      <TaskList />

      <AddTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
