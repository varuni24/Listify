import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTask,
  deleteTask,
  toogleTaskStatus,
} from "../../actions/actionObjects";
import PopUp from "../home/PopUp";
import { BsPenFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";

function TaskObject({ todoId, taskObject }) {
  const dispatch = useDispatch();
  const [isEditMode, setEditMode] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(taskObject.content);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteConfirmed = () => {
    dispatch(deleteTask(todoId, taskObject.taskId));
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="everyTask">
      <div className="taskAndEditTask">
        {/* handling whether to display content or edit input box */}
        {isEditMode ? (
          <input
            className="editTaskInputBox"
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          ></input>
        ) : (
          <>
            <input
              className="todocb"
              type="checkbox"
              onChange={() =>
                dispatch(toogleTaskStatus(todoId, taskObject.taskId))
              }
            ></input>
            <label
              className={`taskTitle ${taskObject.completed ? "completed" : ""}`}
            >
              {taskObject.content}
            </label>
          </>
        )}
      </div>

      <div className="editanddeleteButtons">
        {/* handling when to display edit and save/cancel buttons */}

        {!isEditMode ? (
          <button
            className="editTaskButton"
            onClick={() => setEditMode(!isEditMode)}
          >
            <BsPenFill />
          </button>
        ) : (
          <>
            <button
              className="updatedTaskButton"
              onClick={() => {
                dispatch(updateTask(todoId, taskObject.taskId, updatedTask));
                setEditMode(!isEditMode);
              }}
            >
              <FaCheck />
            </button>
            <button
              className="cancelTaskButton"
              onClick={() => setEditMode(!isEditMode)}
            >
              <ImCross />
            </button>
          </>
        )}

        {/* display delete option regardless */}
        <button
          className="deleteTaskButton"
          onClick={() => setShowDeleteConfirmation(true)}
        >
          <FaTrash />
        </button>
        {showDeleteConfirmation && (
          <PopUp
            onCancel={() => setShowDeleteConfirmation(false)}
            onConfirm={handleDeleteConfirmed}
          />
        )}
      </div>
    </div>
  );
}

export default TaskObject;
