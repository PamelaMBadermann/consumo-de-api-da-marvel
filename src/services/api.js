import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
});

api.interceptors.request.use(async (config) => {
    const token = '3194f659d3465aca016388ffd26515bc';

    if (token) {
        api.defaults.headers.authorization = `${token}`;
    }

    return config;
});

export default api;
