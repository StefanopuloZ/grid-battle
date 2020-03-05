import {combineReducers} from 'redux';
import GridReducer from './GridReducer';
import ConfigReducer from './ConfigReducer';

export default combineReducers({
    GridReducer,
    ConfigReducer,
});
