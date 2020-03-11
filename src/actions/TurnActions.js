import * as ACTION_TYPES from '../action-types';

export const updateCurrentPlayer = player => ({
  type: ACTION_TYPES.UPDATE_CURRENT_PLAYER,
  player,
});

export const updateTurnOrder = turnOrder => ({
  type: ACTION_TYPES.UPDATE_TURN_ORDER,
  turnOrder,
});

export const updateActiveCharacter = character => ({
    type: ACTION_TYPES.UPDATE_ACTIVE_CHARACTER,
    character,
  });
