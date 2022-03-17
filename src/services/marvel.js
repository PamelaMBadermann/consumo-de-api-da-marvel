import { api } from './api';

export const getCharacters = async () => {
    const result = await api.get('/');
    return result.data;
};
