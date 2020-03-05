import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
    muted: true,
};

const ConfigReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SOUND: {
            return {
                ...state,
                muted: action.muted,
            };
        }
        default:
            return state;
    }
};

export default ConfigReducer;
