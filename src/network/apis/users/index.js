import { axiosInstance } from "../index";

const getUsers = async () => await axiosInstance.get(`data`);

export { getUsers };
