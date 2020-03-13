import * as ActionTypes from '../action-types';
import { Map } from 'immutable';
import { TurnFunctions } from '../logic-functions';

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
    case ActionTypes.START_TURN: {
      console.log(state, 'state', action.grid);
      let {
        allCharacters,
        humanCharacters,
        aiCharacters,
      } = TurnFunctions.findCharacters(action.grid);

      allCharacters = TurnFunctions.sortCharacters(allCharacters);

      let turnInfo = state.turnInfo;
      turnInfo   = turnInfo
        .setIn(['allCharacters'], allCharacters)
        .setIn(['humanCharacters'], humanCharacters)
        .setIn(['aiCharacters'], aiCharacters)
        .setIn(['activeCharacter'], allCharacters[0]);

      return {
        ...state,
        turnInfo,
      };
    }
    default:
      return state;
  }
};

export default TurnReducer;
