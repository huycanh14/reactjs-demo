import { 
  GET_USERS,
  // GET_USER,
  ADD_USER,
  DELETE_USER,
  // EDIT_USER,
  // DELETE_USER,
} from "../constants/userConstant"
import userApi from "../services/userApi"
import Swal from 'sweetalert2'

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
    if(response.status === 201) {
      Swal.fire({
        icon: 'success',
        text: 'Thêm dữ liệu thành công',
      });
      dispatch({
        type: ADD_USER,
        payload: {...response.params},
      }); 
    }
  } catch(error) {
    console.error('add user', error);
  }
}

export const removeUser = (id) => async dispatch => {
  try {
    const response = await userApi.remove(id);
    if(response.status === 200) {
      Swal.fire({
        icon: 'success',
        text: 'Xóa dữ liệu thành công',
      });
      dispatch({
        type: DELETE_USER,
        payload: id,
      }); 
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Xóa dữ liệu thất bại',
      });
    }
  } catch(error) {
    Swal.fire({
      icon: 'error',
      text: 'Xóa dữ liệu thất bại',
    });
    console.error('remove user', error);
  }
}