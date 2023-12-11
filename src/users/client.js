import axios from "axios";

export const USERS_API = process.env.REACT_APP_BASE_API_URL;
export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};
export const signin = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
