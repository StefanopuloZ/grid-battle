import * as ACTION_TYPES from '../action-types';

export const toggleSound = muted => ({
  type: ACTION_TYPES.TOGGLE_SOUND,
  muted,
});
