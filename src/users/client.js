import axios from "axios";

// export const USERS_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = "http://localhost:4000/api/users";
export const createUser = async (user) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
export const deleteUser = async (user) => {
  const response = await axios.delete(`${USERS_API}/${user._id}`);
  return response.data;
};
export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};  
export const findUserByUsername = async (username) => {
    const response = await axios.get(`${USERS_API}/${username}`);
    return response.data;
};
export const signup = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signup`, credentials);
  return response.data;
};
export const signin = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};
