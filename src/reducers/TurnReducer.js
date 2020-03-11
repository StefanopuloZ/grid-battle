import * as ActionTypes from '../action-types';
// import { GridHelper } from '../logic-functions';
import { Map } from 'immutable';

//////////////////

const DEFAULT_STATE = new Map({
  currentPlayer: null,
  activeCharacter: {},
  turnOrder: [],
  allCharacters: [],
  humanCharacters: [],
  aiCharacters: [],
});

const TurnReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: action.currentPlayer,
      };
    }
    case ActionTypes.UPDATE_TURN_ORDER: {
      return {
        ...state,
        turnOrder: action.turnOrder,
      };
    }
    case ActionTypes.UPDATE_ACTIVE_CHARACTER: {
      return {
        ...state,
        activeCharacter: action.character,
      };
    }
    default:
      return state;
  }
};

export default TurnReducer;
