import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const REVIEWS_API = `${BASE_API}/api/reviews`;
export const GAMES_API = `${BASE_API}/api/games`;

export const STEAM_API = process.env.REACT_APP_STEAM_API;
export const STEAM_UPDATES_API = process.env.REACT_APP_GAME_UPDATES;
export const UPDATES_API = `${STEAM_API}${STEAM_UPDATES_API}`;


//---------------------------------------------------------- REVIEW SECTION ----------------------------------------------------------
export const findAllReviews = async () => {
    const response = await request.get(`${REVIEWS_API}`);
    return response.data;
};

export const findReviewById = async (id) => {
    const response = await request.get(`${REVIEWS_API}/${id}`); 
    return response.data;
};

export const createReview = async (review) => {
    const response = await request.post(`${REVIEWS_API}`, review);
    return response.data;
};

export const updateReview = async (review) => {
    const response = await request.put(`${REVIEWS_API}/${review._id}`, review);
    return response.data;
};

export const deleteReview = async (review) => {
    const response = await request.delete(
        `${REVIEWS_API}/${review._id}`);
    return response.data;
};

//---------------------------------------------------------- UPDATE SECTION ----------------------------------------------------------

export const findAllUpdates = async (gameID) => {
    console.log(STEAM_API);
    const response = await request.get(`${UPDATES_API}${gameID}`);
    return response.data;
};

//---------------------------------------------------------- GAME SECTION ----------------------------------------------------------
export const findAllGames = async () => {
    const response = await request.get(`${GAMES_API}`);
    return response.data;
};

export const findGameById = async (id) => {
    const response = await request.get(`${GAMES_API}/${id}`); 
    return response.data;
};