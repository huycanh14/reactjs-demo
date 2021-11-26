
import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = '/data';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/data/${id}`;
    return axiosClient.get(url);
  },

  add: (params) => {
    const url = '/data';
    return axiosClient.post(url, { ...params });
  },

  remove: (id) => {
    const url = `/data/${id}`;
    return axiosClient.delete(url);
  }
}

export default userApi;