import { 
  GET_USERS,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
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
    console.log('call api', response);
    dispatch({
      type: GET_USERS,
      payload: [...response.data],
    });
  } catch(error) {
    console.error('get users', error)
  }
}