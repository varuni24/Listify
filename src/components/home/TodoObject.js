import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoList } from "../../actions/actionObjects";
import PopUp from "./PopUp";
import { ImCross } from "react-icons/im";

const TodoObject = ({ todoId, todoObject }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  const handleDeleteConfirmed = () => {
    dispatch(deleteTodoList(todoId));
    setDeleteConfirmed(false);
  };

  return (
    <div className="todoBox">
      <div className="todoHeader">
        <div className="deleteTodoBtnHolder">
          <button
            className="deleteTodoButton"
            onClick={() => setDeleteConfirmed(true)}
          >
            <ImCross />
          </button>
        </div>

        <div
          className="todoTitle"
          key={todoId}
          onClick={() => navigate(`/${todoId}`)}
        >
          {todoObject.title}
        </div>
      </div>

      <div className="dateModified">Last Modified at {todoObject.date_modified}</div>

      {deleteConfirmed && (
        <PopUp
          onCancel={() => setDeleteConfirmed(false)}
          onConfirm={handleDeleteConfirmed}
        />
      )}

    </div>
  );
};

export default TodoObject;
