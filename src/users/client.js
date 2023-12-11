import axios from "axios";

export const USERS_API = "http://localhost:4000"; // TODO: replace with env var
export const account = async () => {
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};
  