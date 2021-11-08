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
    // email: 'apimonitoringf9vmy@synthetic.com', gender: 'male', status: 'active'}
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListUser;
