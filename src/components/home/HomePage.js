import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoObject from "./TodoObject";
import NewTodoObject from "./NewTodoObject";
import { deleteAllTodoList } from "../../actions/actionObjects";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./HomePage.css";
import PopUp from "./PopUp";

const HomePage = () => {
  const dispatch = useDispatch();
  const allTodosObject = useSelector((state) => state.allTodos); // get the object of all todos in the state
  const [alldeleteConfirmed, setAllDeleteConfirmed] = useState(false);

  const handleAllDeleteConfirmed = () => {
    dispatch(deleteAllTodoList());
    setAllDeleteConfirmed(false);
  };

  return (
    <div className="mainContainer">
      <div style={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="todoMainHeading">TO-DO APP</div>

        <NewTodoObject />

        <div className="displayLists">
          {Object.keys(allTodosObject).map((todoId) => (
            <TodoObject todoId={todoId} todoObject={allTodosObject[todoId]} />
          ))}
        </div>
      </div>


      <div className="deleteBtnContainer">
        <button
          className="deleteAllButton"
          title="Delete All"
          disabled={Object.keys(allTodosObject).length === 0}
          onClick={() => setAllDeleteConfirmed(true)}
        >
          <RiDeleteBin6Fill />
        </button>
      </div>


      {alldeleteConfirmed && (
        <PopUp
          onCancel={() => setAllDeleteConfirmed(false)}
          onConfirm={handleAllDeleteConfirmed}
        />
      )}
    </div>
  );
};

export default HomePage;
