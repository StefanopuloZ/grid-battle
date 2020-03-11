import * as ACTION_TYPES from '../action-types';

export const updateTurnInfo = player => ({
  type: ACTION_TYPES.UPDATE_TURN_INFO,
  player,
});

