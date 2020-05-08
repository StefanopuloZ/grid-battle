import * as ACTION_TYPES from '../action-types';

export const startTurn = (grid, gameId) => ({
  type: ACTION_TYPES.START_TURN,
  grid,
  gameId,
});

export const nextMove = (grid, gameId) => ({
  type: ACTION_TYPES.NEXT_MOVE,
  grid,
  gameId,
});

export const resetTurn = gameId => ({
  type: ACTION_TYPES.RESET_TURN,
  gameId,
});

