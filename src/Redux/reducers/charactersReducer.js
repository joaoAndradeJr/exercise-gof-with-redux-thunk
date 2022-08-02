import { SET_CHARACTER_DETAILS } from "../actions/actionTypes";

const INITIAL_STATE = {
  characterDetails: undefined,
}

function charactersReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case SET_CHARACTER_DETAILS:
    return {
      ...state,
      characterDetails: action.payload,
    };
  default:
    return state;
  }
}

export default charactersReducer;
