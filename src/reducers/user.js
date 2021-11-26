import { 
  GET_USERS,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
} from "../constants/userConstant";

const initialState = {
  users: [],
  user: {}
}


const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:{
      const newList = [...action.payload];
      return {
        ...state,
        users: newList
      };
    }
    case GET_USER:
      return state;
    case ADD_USER:
      return state;
    case EDIT_USER:
      return state;
    case DELETE_USER:
      const id = action.payload;
      const newList = state.users.filter(user => user.id !== id);
      return { 
        ...state,
        users: newList
      };
    default: return state;
  }
}

export default userReducer;