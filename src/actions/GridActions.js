import * as ACTION_TYPES from '../action-types';

export const updateGrid = (grid, gameId) => ({
  type: ACTION_TYPES.UPDATE_GRID,
  grid,
  gameId,
});

export const createGrid = (settings, gameId) => ({
  type: ACTION_TYPES.CREATE_GRID,
  settings,
  gameId,
});

export const destroyGrid = () => ({
  type: ACTION_TYPES.DESTROY_GRID,
});
