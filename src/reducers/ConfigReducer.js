import * as ActionTypes from '../action-types';
import { random, copy } from '../logic-functions/helper-functions';

const DEFAULT_STATE = {
  muted: true,
  settings: {
    rows: 10,
    columns: 10,
    fill: {
      humanCharacters: [
        {
          id: 1,
          name: 'Victor',
          type: 'hero',
          speed: 6,
          image: 'warrior',
          fill: 'C',
          maxHp: 8,
          hp: 8,
          attack: +4,
          ac: 0,
          damage: [2, 6],
          player: 'human',
          initiative: 16,
        },
        {
          id: 4,
          name: 'Fortuna',
          type: 'hero',
          speed: 6,
          image: 'fortuna',
          fill: 'C',
          maxHp: 5,
          hp: 5,
          attack: +8,
          ac: 10,
          damage: [1, 4],
          player: 'human',
          initiative: 24,
        },
      ],
      aiCharacters: [
        {
          id: 2,
          name: 'Goblin',
          type: 'enemy',
          speed: 5,
          image: 'goblin',
          fill: 'C',
          maxHp: 6,
          hp: 6,
          attack: 0,
          ac: 8,
          damage: [1, 4],
          player: 'ai',
          initiative: 18,
        },
        {
          id: 3,
          name: 'Golem',
          type: 'enemy',
          speed: 5,
          image: 'golem',
          fill: 'C',
          maxHp: 8,
          hp: 8,
          attack: -2,
          ac: 8,
          damage: [2, 6],
          player: 'ai',
          initiative: 12,
        },
      ],
      id: 0,
      assignIndexes(indexArray, characters) {
        let tiles = indexArray;
        return characters.map(character => {
          const index = tiles.splice(random(0, tiles.length - 1), 1)[0];
          character.index = index;
          character.id = ++this.id;
          return character;
        });
      },
      rows: 10,
      obstacles() {
        return Math.round(this.rows * (this.rows / 2.5) - this.rows * 1.5);
      },
      characters() {
        const humanCharactersTiles = [3, 4, 5, 6, 7];
        const aiCharactersTiles = [93, 94, 95, 96, 97, 84, 85, 86];

        const humanCharacters = this.assignIndexes(humanCharactersTiles, this.humanCharacters);

        let aiCharacters = copy(this.aiCharacters);
        for (let i = 0; i < random(2, 3); ++i) {
          aiCharacters.unshift(copy(this.aiCharacters[random(0, 1)]));
        }

        aiCharacters = this.assignIndexes(aiCharactersTiles, aiCharacters);

        return [
          ...humanCharacters,
          ...aiCharacters,
        ];
      },
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
