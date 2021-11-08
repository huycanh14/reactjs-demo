import { 
  GET_USERS,
  // GET_USER,
  ADD_USER,
  // EDIT_USER,
  // DELETE_USER,
} from "../constants/userConstant"
import userApi from "../services/userApi"


// export const getUsers = () => {
//   return {
//     type: "GET_USERS",

//   }
// }

// export const addUser = (user) => {
//   return {
//     type: "ADD_USER",
//     payload: user
//   }
// }

export const getUsers = () => async dispatch => {
  try {
    const response = await userApi.getAll();
    dispatch({
      type: GET_USERS,
      payload: [...response.data],
    });
  } catch(error) {
    console.error('get users', error)
  }
}

export const addUser = (payload) => async dispatch => {
  try {
    const response = await userApi.add(payload);
    console.log(response);
    dispatch({
      type: ADD_USER,
      payload: [...response.data],
    }); 
  } catch(error) {
    console.error('add user', error);
  }
}