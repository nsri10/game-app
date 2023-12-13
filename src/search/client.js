import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const findAllGames = async () => {
    const response = await request.get(`${GAMES_API}`);
    return response.data;
};

export const findGameById = async (id) => {
    const response = await request.get(`${GAMES_API}/${id}`);
    return response.data;
};