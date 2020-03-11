import * as ACTION_TYPES from '../action-types';

export const updateTurnInfo = turnInfo => ({
  type: ACTION_TYPES.UPDATE_TURN_INFO,
  turnInfo,
});

