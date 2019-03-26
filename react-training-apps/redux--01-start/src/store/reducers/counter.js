import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /*...state kopiuje state, bo mamy > 2 properties w obiekcie
    bez tego case zwróci sam counter
    ...state,
    counter: state.counter + 1
      */
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
  }
  return state;
};

export default reducer;
