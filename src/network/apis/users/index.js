import { axiosInstance } from "../index";

const getUsers = async () => await axiosInstance.get(`data`);
const addUser = async ({ data }) =>
  await axiosInstance.post(`data`, data);
const editUser = async (data) =>
  await axiosInstance.put(`data/${data.id}`, data);
const deleteUser = async (id) =>
  await axiosInstance.delete(`data/${id}`);

export { getUsers, addUser, editUser, deleteUser };
