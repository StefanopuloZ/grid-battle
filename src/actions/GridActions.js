import * as ACTION_TYPES from '../action-types';

export const updateGrid = grid => ({
  type: ACTION_TYPES.UPDATE_GRID,
  grid,
});

export const createGrid = settings => ({
  type: ACTION_TYPES.CREATE_GRID,
  settings,
});

export const destroyGrid = () => ({
  type: ACTION_TYPES.DESTROY_GRID,
});
