import * as ActionTypes from '../action-types';
// import { GridHelper } from '../logic-functions';
import { Map } from 'immutable';

//////////////////

const DEFAULT_STATE = {
  turnInfo: new Map({
    currentPlayer: null,
    activeCharacter: {},
    turnOrder: [],
    allCharacters: [],
    humanCharacters: [],
    aiCharacters: [],
  }),
};

const TurnReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TURN_INFO: {
      return {
        ...state,
        turnInfo: action.turnInfo,
      };
    }
    default:
      return state;
  }
};

export default TurnReducer;
