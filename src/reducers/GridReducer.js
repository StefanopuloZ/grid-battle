import * as ActionTypes from '../action-types';
import { GridHelper } from '../logic-functions';
import { List } from 'immutable';

//////////////////

const DEFAULT_STATE = {
  grid: new List([]),
};

const GridReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GRID: {
      return {
        ...state,
        grid: action.grid,
      };
    }
    case ActionTypes.CREATE_GRID: {
      return {
        ...state,
        grid: GridHelper.makeGrid(action.settings),
      };
    }
    case ActionTypes.DESTROY_GRID: {
      return {
        ...state,
        grid: new List([]),
      };
    }
    default:
      return state;
  }
};

export default GridReducer;
