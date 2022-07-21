import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
    todoList: [
        {
            id: new Date().getTime(),
            text: "Study redux",
            completed: true
        },
    ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {...state, todoList: [...state.todoList, {id: new Date().getTime(),text: payload,completed: false}]};
    case DELETE_TODO:
      return { ...state, todoList: state.todoList.filter(todo => todo.id !== payload) };  
    case TOGGLE_TODO:
      return { ...state, todoList: state.todoList.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo) };
    case CLEAR_TODO:
      return { ...state, todoList: [] };
    default:
      return state;
  }
};
export default todoReducer;
