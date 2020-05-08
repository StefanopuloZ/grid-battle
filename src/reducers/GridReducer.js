import * as ActionTypes from '../action-types';
import { GridHelper } from '../logic-functions';
import { List } from 'immutable';

//////////////////

const DEFAULT_STATE = {
  gameId: null,
  grid: new List([]),
};

const GridReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GRID: {
      if (state.grid.size === 0) {
        return { ...state };
      }

      if (state.gameId !== action.gameId) {
        return { ...state };
      }

      return {
        ...state,
        grid: action.grid,
      };
    }
    case ActionTypes.CREATE_GRID: {
      return {
        ...state,
        grid: GridHelper.makeGrid(action.settings),
        gameId: action.gameId,
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
