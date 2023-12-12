import axios from "axios";

const request = axios.create({
    withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const REVIEWS_API = `${BASE_API}/api/reviews`;


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