import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import GridReducer from './GridReducer';
import ConfigReducer from './ConfigReducer';

export default combineReducers({
    UserReducer,
    GridReducer,
    ConfigReducer,
});
