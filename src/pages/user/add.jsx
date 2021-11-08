import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/user';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('inactive');
  const [messgeEmail, setMessgeEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? setMessgeEmail(''):  setMessgeEmail("Not type email");
  }, [email]);

  function formPreventDefault(e) {
    e.preventDefault();
    let params =  {
      name: name, 
      gender: gender, 
      email: email, 
      status: status
    }
    const action = addUser(params);
    dispatch(action);
  }

  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={formPreventDefault}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)} 
              aria-describedby="emailHelp"
              placeholder="Enter full-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)} 
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className={"form-text " + (messgeEmail && `text-danger`) }>{messgeEmail}</small>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" checked={gender==="male"} onChange={e => setGender("male")}/>
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" checked={gender==="female"} onChange={e => setGender("female")}/>
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="status" id="active" defaultValue="active" checked={status==="active"} onChange={e => setStatus("active")}/>
              <label className="form-check-label" htmlFor="active">Active</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="status" id="inactive" defaultValue="inactive" checked={status==="inactive"} onChange={e => setStatus("inactive")}/>
              <label className="form-check-label" htmlFor="inactive">Inactive</label>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
