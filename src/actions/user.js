export const getUsers = () => {
  return {
    type: "GET_USERS",

  }
}

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  }
}