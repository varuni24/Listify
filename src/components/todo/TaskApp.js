import { useParams } from "react-router-dom";
import AddContainer from "./AddContainer";
import TasksList from "./TasksList";
import { useSelector, useDispatch } from "react-redux";
import ErrorPage from "../ErrorPage";
import "./TodoList.css";
import { useState } from "react";
import { updateTodoTitle } from "../../actions/actionObjects";
import { AiFillEdit } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export const TaskApp = () => {
  const { todoId } = useParams();
  const dispatch = useDispatch();
  const [isEditMode, setEditMode] = useState(false);

  const allTodos = useSelector((state) => state.allTodos);
  const todo = Object.keys(allTodos).includes(todoId) ? allTodos[todoId] : null;
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  if (todo) {
    return (
      <div className="todoContainer">
        <div className="headingAndEdits">
          {isEditMode ? (
            <input
              className="editTitleInput"
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            ></input>
          ) : (
            <div className="noteTitle">{todo.title}</div>
          )}

          {!isEditMode ? (
            <button
              className="editTitleButton"
              onClick={() => setEditMode(!isEditMode)}
            >
              <AiFillEdit />
            </button>
          ) : (
            <>
              <button
                className="updateTitleButton"
                onClick={() => {
                  dispatch(updateTodoTitle(todoId, updatedTitle));
                  setEditMode(!isEditMode);
                }}
              >
                <BiCheck />
              </button>
              <button
                className="cancelTitleButton"
                onClick={() => setEditMode(!isEditMode)}
              >
                <MdOutlineCancel />
              </button>
            </>
          )}
        </div>

        <div className="question"> What's Your Plan for Today ? </div>
        <AddContainer todoId={todoId} />
        <TasksList todoId={todoId} todoTitle={todo.title} />
      </div>
    );
  } else {
    return <ErrorPage message="Inavlid Id" />;
  }
};
