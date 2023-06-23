import * as types from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO_LIST:
      return {
        ...state,
        [action.payload.todoId]: {
          title: action.payload.todoTitle,
          tasks: [],
          date_created: new Date().toLocaleString(),
          date_modified: new Date().toLocaleString(),
        },
      };

    case types.DELETE_TODO_LIST:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;

    case types.UPDATE_TODO_TITLE:
      return {
        ...state,
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          title: action.payload.newTitle,
          date_modified: new Date().toLocaleString(),
        },
      };

    case types.DELETE_ALL_TODO_LIST:
      return {};

    case types.ADD_TASK:
      return {
        ...state,
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          tasks: [
            ...state[action.payload.todoId]["tasks"],
            {
              taskId: uuidv4(),
              content: action.payload.taskContent,
              completed: false,
            },
          ],
          date_modified: new Date().toLocaleString(),
        },
      };

    case types.UPDATE_TASK:
      const updatedTaskList = state[action.payload.todoId]["tasks"].map(
        (task) => {
          if (task.taskId === action.payload.taskId) {
            task.content = action.payload.updatedTaskContent;
            state[action.payload.todoId].date_modified = new Date()
              .getDate()
              .toString();
          }
          return task;
        }
      );
      return {
        ...state,
        [action.payload.todDoId]: {
          ...state[action.payload.todDoId],
          tasks: updatedTaskList,
          date_modified: new Date().toLocaleString(),
        },
      };

    case types.DELETE_TASK:
      const updatedTasksList = state[action.payload.todoId]["tasks"].filter(
        (task) => task.taskId !== action.payload.taskId
      );
      return {
        ...state,
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          tasks: updatedTasksList,
          date_modified: new Date().toLocaleString(),
        },
      };

    case types.TOGGLE_TASK_STATUS:
      const updatedtasksList = state[action.payload.todoId]["tasks"].map(
        (task) => {
          if (task.taskId === action.payload.taskId) {
            task.completed = !task.completed;
          }
          return task;
        }
      );

      return {
        ...state,
        [action.payload.todoId]: {
          ...state[action.payload.todoId],
          tasks: updatedtasksList,
          date_modified: new Date().toLocaleString(),
        },
      };

    default:
      return state;
  }
};

export default todoReducer;
