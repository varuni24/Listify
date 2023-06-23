import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskObject from "./TaskObject";
import "./TodoList.css";

function TasksList({ todoId, todoTitle }) {
  const todo = useSelector((state) => state.allTodos[todoId]); // get todo Object
  const [dataToDisplay, setDataToDisplay] = useState(todo["tasks"]);
  const [showIncomplete, setShowIncomplete] = useState(false);

  useEffect(() => {
    if (showIncomplete) {
      const newData = todo["tasks"].filter((task) => !task.completed);
      setDataToDisplay(newData);
    } else {
      setDataToDisplay(todo["tasks"]);
    }
  }, [showIncomplete, todo, todo["tasks"]]);

  return (
    <div className="TaskLists">
      <div className="incompleteTasks">
        <button
          className="incompleteButton"
          onClick={() => setShowIncomplete(!showIncomplete)}
          disabled={todo["tasks"].length === 0}
        >
          Show {showIncomplete ? "All" : "Incomplete"} Tasks
        </button>
      </div>

      <div className="allTasks">
        {dataToDisplay &&
          dataToDisplay.map((task) => (
            <TaskObject key={task.taskId} todoId={todoId} taskObject={task} />
          ))}
      </div>
    </div>
  );
}

export default TasksList;
