import axios from 'axios';
const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:5001/clone2-f66f1/us-central1/api" // THE API (cloud function) URL
    // baseURL: "" // The API of my deployed backend
});

export { axiosInstance }