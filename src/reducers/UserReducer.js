import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
    username: 'test',
};

const UserReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_USER_NAME: {
            return {
                ...state,
                username: action.username,
            };
        }
        case ActionTypes.TEST: {
            return {
                ...state,
                username: 'success',
            };
        }
        default:
            return state;
    }
};

export default UserReducer;
