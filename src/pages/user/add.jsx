import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/user';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [messgeEmail, setMessgeEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? setMessgeEmail(''):  setMessgeEmail("Not type email");
  }, [email]);

  function formPreventDefault(e) {
    e.preventDefault();
    let params =  {
      name: name, 
      date: date, 
      email: email, 
      phone: phone,
      interest: interest
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
            <label htmlFor="date">Date</label>
            <input className="form-control" type="date" name="date" id="date"  onChange={e => setDate(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input className="form-control" type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="interest">Interest</label>
            <input className="form-control" type="text" name="interest" id="interest" onChange={e => setInterest(e.target.value)}/>
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
