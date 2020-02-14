import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
    username: 'test',
};

const GridReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GRID_TEST: {
            return {
                ...state,
                username: action.username,
            };
        }
        default:
            return state;
    }
};

export default GridReducer;
