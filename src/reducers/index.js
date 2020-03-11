import {combineReducers} from 'redux';
import GridReducer from './GridReducer';
import ConfigReducer from './ConfigReducer';
import TurnReducer from './TurnReducer';

export default combineReducers({
    GridReducer,
    ConfigReducer,
    TurnReducer,
});
