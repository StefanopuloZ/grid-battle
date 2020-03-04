import * as ActionTypes from "../action-types";
import { GridHelper } from "../helper-functions";

//////////////////

const settings = {
rows: 10,
columns: 10,
fill: {
  obstacles: [5, 15, 8, 18, 24, 26, 38, 37, 13, 1, 23, 33, 94, 98, 77, 76, 78, 79, 45, 35, 55, 97, 70, 71, 72, 52, 51, 30],
  characters: [
    {
      name: 'Victor',
      type: 'hero',
      speed: 7,
      image: 'warrior',
      index: 0,
      fill: 'C',
      sound: 'warrior',
    }
  ]
}
};

const DEFAULT_STATE = {
  settings,
  grid: GridHelper.makeGrid(settings),
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
