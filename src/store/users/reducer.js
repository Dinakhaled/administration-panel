import { ADD_USER, DELETE_USER, EDIT_USER, SET_USERS } from "./types";

const initialState = {
  list: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        list: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case EDIT_USER:
      return {
        ...state,
        list: state.list.map((user) =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    case DELETE_USER:
      return {
        ...state,
        list: state.list.filter((user) => user.id !== action.payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default usersReducer;
