import * as ActionTypes from "../action-types";
import { Grid } from "../helper-functions";

//////////////////

const obstacles = [5, 15, 8, 18, 38, 37, 13, 23, 33, 1, 11, 94, 98, 77, 76, 78, 45, 35, 55, 97, 70, 71, 72, 52, 51, 30];

const DEFAULT_STATE = {
  rows: 10,
  columns: 10,
  grid: Grid.makeGrid(10, 10, 0, obstacles),
  start: 0,
  obstacles,

  
};

const GridReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GRID: {
      return {
        ...state,
        grid: action.grid,
      };
    }
    default:
      return state;
  }
};

export default GridReducer;
