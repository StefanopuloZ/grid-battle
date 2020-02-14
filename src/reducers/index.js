import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import GridReducer from './GridReducer';

export default combineReducers({
    UserReducer,
    GridReducer,
});
