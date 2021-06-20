import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-hair-styles.herokuapp.com/'
});