import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
  muted: true,
  settings: {
    rows: 10,
    columns: 10,
    fill: {
      rows: 10,
      obstacles() {
        return Math.round((this.rows * (this.rows / 2.5)) - (this.rows * 1.5))
      },
      characters: [
        {
          id: 1,
          name: 'Victor',
          type: 'hero',
          speed: 6,
          image: 'warrior',
          index: 4,
          fill: 'C',
          sound: 'warrior',
          maxHp: 4,
          hp: 4,
          attack: +2,
          ac: 0,
          damage: [2, 6],
          player: 'human',
          initiative: 24,
        },
        {
          id: 2,
          name: 'Victor S',
          type: 'hero',
          speed: 6,
          image: 'warrior',
          index: 5,
          fill: 'C',
          sound: 'warrior',
          maxHp: 4,
          hp: 4,
          attack: +2,
          ac: 15,
          damage: [2, 6],
          player: 'human',
          initiative: 10,
        },
        {
          id: 3,
          name: 'Goblin',
          type: 'enemy',
          speed: 5,
          image: 'goblin',
          index: 96,
          fill: 'C',
          sound: 'goblin',
          maxHp: 6,
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 18,
        },
        {
          id: 4,
          name: 'Goblin F',
          type: 'enemy',
          speed: 6,
          image: 'goblin',
          index: 93,
          fill: 'C',
          sound: 'goblin',
          maxHp: 6,
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 13,
        },
        {
          id: 5,
          name: 'Goblin',
          type: 'enemy',
          speed: 7,
          image: 'goblin',
          index: 94,
          fill: 'C',
          sound: 'goblin',
          maxHp: 6,
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 18,
        },
        {
          id: 6,
          name: 'Goblin',
          type: 'enemy',
          speed: 5,
          image: 'goblin',
          index: 95,
          fill: 'C',
          sound: 'goblin',
          maxHp: 6,
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
