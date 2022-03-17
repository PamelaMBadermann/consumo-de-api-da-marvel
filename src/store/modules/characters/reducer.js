const initialState = [];

export const characterReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'beer/UPDATE':
            return action.payload;
        default:
            return state;
    }
}