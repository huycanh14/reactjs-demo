const initialState = {
  users: [{"id":2,"name":"Avadhesh Gill","email":"gill_avadhesh@schowalter.name","gender":"female","status":"active"}],
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "GET_USERS":{
      const newList = [...state.users];
      newList.push({"id":1433,"name":"API Monitoring:arqclk","email":"apimonitoringarqclk@synthetic.com","gender":"male","status":"active"})
      console.log(newList);
      return {
        ...state,
        users: newList
      };
    }
    default: return state;
  }
}

export default userReducer;