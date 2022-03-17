import api from './api';

export const getCharacters = async () => {
    const result = await api.get('/v1');
    return result.data;
};
