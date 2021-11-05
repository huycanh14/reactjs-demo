import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/user';

function ListUser(props) {
  const users = useSelector(state => state.user.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getUsers();
    dispatch(action);
  }, [dispatch]);
  return (
    <div>
      Danh sach nguoi dung
    </div>
  )
}

export default ListUser;
