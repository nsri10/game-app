import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const REVIEWS_API = `${BASE_API}/api/reviews`;
export const STEAM_API = process.env.REACT_APP_STEAM_API;
export const STEAM_UPDATES_API = process.env.REACT_APP_GAME_UPDATES;
export const UPDATES_API = STEAM_API.concat(STEAM_UPDATES_API);

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
        `${USERS_API}/${review._id}`);
    return response.data;
};

//---------------------------------------------------------- UPDATE SECTION ----------------------------------------------------------

export const findAllUpdates = async (gameID) => {
    const response = await request.get(`${UPDATES_API}`.concat(gameID));
    return response.data;
};