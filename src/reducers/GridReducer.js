import * as ActionTypes from "../action-types";
import { Grid } from "../helper-functions";

//////////////////

const DEFAULT_STATE = {
  rows: 10,
  columns: 10,
  grid: Grid.makeGrid(10, 10),
};

const GridReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GRID_TEST: {
      return {
        ...state,
        username: action.username
      };
    }
    default:
      return state;
  }
};

export default GridReducer;
