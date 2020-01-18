import * as actionTypes from "./actionTypes";

const initialState = {
  testParam: { test: "test" }
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INITIAL_STATE:
      return {
        ...state,
        testParam: action.data
      };
    default:
      return state;
  }
}
