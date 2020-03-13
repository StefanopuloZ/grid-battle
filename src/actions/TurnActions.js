import * as ACTION_TYPES from '../action-types';

export const updateTurnInfo = turnInfo => ({
  type: ACTION_TYPES.UPDATE_TURN_INFO,
  turnInfo,
});

export const startTurn = grid => ({
  type: ACTION_TYPES.START_TURN,
  grid,
});

