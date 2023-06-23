import * as types from "./actionTypes";

export const addTodoList = (todoId, todoTitle) => {
  return {
    type: types.ADD_TODO_LIST,
    payload: {
      todoId,
      todoTitle,
    },
  };
};

export const deleteTodoList = (todoId) => {
  return {
    type: types.DELETE_TODO_LIST,
    payload: todoId,
  };
};

export const updateTodoTitle = (todoId, newTitle) => {
  return {
    type: types.UPDATE_TODO_TITLE,
    payload: {
      todoId: todoId,
      newTitle: newTitle,
    },
  };
};

export const deleteAllTodoList = () => {
  return {
    type: types.DELETE_ALL_TODO_LIST,
  };
};

export const addTask = (todoId, taskContent) => {
  return {
    type: types.ADD_TASK,
    payload: {
      todoId: todoId,
      taskContent: taskContent,
    },
  };
};

export const updateTask = (todoId, taskId, updatedTaskContent) => {
  return {
    type: types.UPDATE_TASK,
    payload: {
      todoId: todoId,
      taskId: taskId,
      updatedTaskContent: updatedTaskContent,
    },
  };
};

export const deleteTask = (todoId, taskId) => {
  return {
    type: types.DELETE_TASK,
    payload: {
      todoId: todoId,
      taskId: taskId,
    },
  };
};

export const toogleTaskStatus = (todoId, taskId) => {
  return {
    type: types.TOGGLE_TASK_STATUS,
    payload: {
      todoId: todoId,
      taskId: taskId,
    },
  };
};
