import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../actions/actionObjects";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

function NewTodoObject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleAddTodoList = () => {
    const newId = uuid();
    dispatch(addTodoList(newId, title));
    setTitle("");
    navigate(`/${newId}`);
  };

  return (
    <div className="addToDoListContainer">
      <input
        className="listInputBox"
        type="text"
        value={title}
        placeholder="Enter Title ✍️"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="addListButton" onClick={handleAddTodoList}>
        <IoMdAddCircle />
      </button>
    </div>
  );
}

export default NewTodoObject;
