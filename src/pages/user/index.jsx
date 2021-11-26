import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser } from '../../actions/user';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function ListUser(props) {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getUsers();
    dispatch(action);
  }, [dispatch]);

  const confirmDeleteUser  = (user) => {
    Swal.fire({
      title: `Bạn muốn xóa user: ${user.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        const action = removeUser(user.id);
        dispatch(action);
      }
    })
  };

  return (
    // email: 'apimonitoringf9vmy@synthetic.com', gender: 'male', status: 'active'}
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Interest</th>
              <th scope="col">Date</th>
              <th scope="col" className="text-center" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.interest}</td>
                <td>{user.date}</td>
                <td> <Link to={`user/edit/${user.id}`}><i className="fas fa-user-edit" style={{cursor: 'pointer'}}></i></Link> </td>
                <td><i className="fas fa-user-minus" style={{cursor: 'pointer'}} onClick={( ) => confirmDeleteUser(user)}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListUser;
