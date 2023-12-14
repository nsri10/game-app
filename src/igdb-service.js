import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.igdb.com/v4';
const headers = {
    'Client-ID': KEY,
    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
};

const POPULAR_GAMES = `${BASE_URL}/games/?fields=name,summary,cover.url,rating&order=rating:desc`;
const NEW_RELEASES = `${BASE_URL}/games/?fields=name,summary,cover.url,first_release_date&filter[first_release_date][lt]=1702506107&order=first_release_date:desc`;