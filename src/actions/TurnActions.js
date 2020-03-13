import * as ACTION_TYPES from '../action-types';

export const startTurn = grid => ({
  type: ACTION_TYPES.START_TURN,
  grid,
});

export const nextMove = grid => ({
  type: ACTION_TYPES.NEXT_MOVE,
  grid,
});

