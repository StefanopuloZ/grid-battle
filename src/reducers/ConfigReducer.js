import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
  muted: true,
  settings: {
    rows: 10,
    columns: 10,
    fill: {
      obstacles: [
        5,
        15,
        8,
        18,
        24,
        26,
        38,
        37,
        13,
        1,
        23,
        33,
        94,
        98,
        77,
        76,
        78,
        79,
        45,
        35,
        55,
        97,
        70,
        71,
        72,
        52,
        51,
        30,
      ],
      characters: [
        {
          name: 'Victor',
          type: 'hero',
          speed: 6,
          image: 'warrior',
          index: 2,
          fill: 'C',
          sound: 'warrior',
          hp: 10,
          attack: +2,
          ac: 10,
          damage: [2, 6],
          player: 'human',
          initiative: 14,
        },
        {
          name: 'Goblin',
          type: 'enemy',
          speed: 5,
          image: 'goblin',
          index: 42,
          fill: 'C',
          sound: 'goblin',
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 13,
        },
        {
          name: 'Goblin Fast',
          type: 'enemy',
          speed: 5,
          image: 'goblin',
          index: 31,
          fill: 'C',
          sound: 'goblin',
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 18,
        },
      ],
    },
  },
};

const ConfigReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SOUND: {
      return {
        ...state,
        muted: action.muted,
      };
    }
    default:
      return state;
  }
};

export default ConfigReducer;
