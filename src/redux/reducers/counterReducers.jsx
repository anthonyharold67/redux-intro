// import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter>0 ? state.counter - 1 : 0 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
export default counterReducers;

