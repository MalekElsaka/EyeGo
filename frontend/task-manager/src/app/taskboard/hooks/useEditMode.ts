import { useState } from "react";

export const useEditMode = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  return { editMode, handleEditModeToggle, closeEditMode };
};

