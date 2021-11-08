
import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = '/users';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  add: (params) => {
    const url = '/users';
    return axiosClient.post(url, { params });
  }
}

export default userApi;