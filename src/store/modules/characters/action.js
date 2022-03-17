import { getCharacters } from '../../../services/marvel';

export const fetchCharacters = () => {
    return (dispatch) => {
        getCharacters().then((data) => {
            dispatch(updateCharacter(data));
        });
    };
};

export const updateCharacter = (payload) => {
    return {
        type: 'character/UPDATE',
        payload,
    };
};
