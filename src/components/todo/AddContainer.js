import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/actionObjects";
import { MdOutlineLibraryAdd } from "react-icons/md";

const AddContainer = ({ todoId }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const dispatch = useDispatch();

  const handleOnClickAdd = () => {
    dispatch(addTask(todoId, newTaskContent));
    setNewTaskContent("");
  };

  return (
    <div className="AddTasksContainer">
      <input
        type="text"
        className="addTaskInput"
        value={newTaskContent}
        placeholder="Enter Task 👩‍💻"
        onChange={(e) => setNewTaskContent(e.target.value)}
      ></input>

      <button className="addTaskButton" onClick={handleOnClickAdd}>
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};
export default AddContainer;
