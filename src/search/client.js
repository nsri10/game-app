import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const GAMES_API = `${BASE_API}/api/games`;

export const findAllGames = async () => {
    const response = await request.get(`${GAMES_API}`);
    return response.data;
};

export const findGameById = async (id) => {
    const response = await request.get(`${GAMES_API}/${id}`);
    console.log(`${GAMES_API}/${id}`);
    return response.data;
};

export const findGameByName = async (search) => {
    const response = await request.get(`${GAMES_API}/s/${search}`);
    return response.data;
};

export const findGameImgById = async (id) => {
    const response = await request.get(`${GAMES_API}/img/${id}`);
    console.log(response.data);
    return response.data;
};