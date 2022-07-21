/* const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter>0 ? state.counter - 1 : 0 };
    case 'RESET':
      return { counter: 0 };
    default:
      return state;
  }
};
export default reducer; */
/* import { DECREMENT, INCREMENT, RESET } from "./types/counterTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
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
export default reducer;

 */
//! tek reducer olduğu zmaan üstteki gibi ama birden fazla reducer yazmak istersek combineReducers fonksiyonunu kullanabiliriz

import {createStore,combineReducers} from 'redux'
import counterReducers from './reducers/counterReducers'
import todoReducers from './reducers/todoReducers'

const rootReducer = combineReducers({
  counterReducer: counterReducers,
  todoReducer: todoReducers,
});//&burada state e 2 obje eklemiş olduk erişirken de ona göre erişmek gerkiyor yani artık state.counterReducer diye ulaşmak gerekiyor buradaki key isimleri bize bağlı

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};

