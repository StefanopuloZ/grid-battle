import * as ActionTypes from '../action-types';
import { Map } from 'immutable';
import { TurnFunctions } from '../logic-functions';

//////////////////

const DEFAULT_STATE = {
  gameId: null,
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
      let {
        allCharacters,
        humanCharacters,
        aiCharacters,
      } = TurnFunctions.findCharacters(action.grid);

      allCharacters = TurnFunctions.sortCharacters(allCharacters);

      let turnInfo = state.turnInfo;
      turnInfo = turnInfo
        .setIn(['allCharacters'], allCharacters)
        .setIn(['humanCharacters'], humanCharacters)
        .setIn(['aiCharacters'], aiCharacters)
        .setIn(['activeCharacter'], allCharacters[0]);

      return {
        ...state,
        turnInfo,
        gameId: action.gameId,
      };
    }
    case ActionTypes.NEXT_MOVE: {
      if (state.turnInfo.get('allCharacters').length === 0) {
        return { ...state };
      }

      if (state.gameId !== action.gameId) {
        return { ...state };
      }

      let {
        allCharacters,
        humanCharacters,
        aiCharacters,
        activeCharacter,
      } = TurnFunctions.updateCharacters(state, action.grid);

      let turnInfo = state.turnInfo;
      turnInfo = turnInfo
        .setIn(['allCharacters'], allCharacters)
        .setIn(['humanCharacters'], humanCharacters)
        .setIn(['aiCharacters'], aiCharacters)
        .setIn(['activeCharacter'], activeCharacter);

      return {
        ...state,
        turnInfo,
      };
    }
    case ActionTypes.RESET_TURN: {
      const turnInfo = new Map({
        currentPlayer: null,
        activeCharacter: {},
        turnOrder: [],
        allCharacters: [],
        humanCharacters: [],
        aiCharacters: [],
      });

      return {
        ...state,
        turnInfo,
        gameId: action.gameId,
      };
    }
    default:
      return state;
  }
};

export default TurnReducer;
