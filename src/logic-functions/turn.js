import { copy } from './helper-functions';

const sortCharacters = (characters, value = 'initiative') => {
  const sortedCharacters = copy(characters);
  return sortedCharacters.sort((a, b) => b[value] - a[value]);
};

const findCharacters = grid => {
  const allCharacters = grid
    .filter((value, index) => value.fill === 'C')
    .map(character => character.stats);
  const humanCharacters = allCharacters.filter(
    value => value.player === 'human'
  );

  const aiCharacters = allCharacters.filter(value => value.player === 'ai');

  return {
    allCharacters: allCharacters.toJS(),
    humanCharacters: humanCharacters.toJS(),
    aiCharacters: aiCharacters.toJS(),
  };
};

const setNextCharacter = allCharacters => {
  let newAllCharacters = copy(allCharacters);
  const lastCharacter = newAllCharacters.shift();
  return [...newAllCharacters, lastCharacter];
};

const updateCharacters = (state, grid) => {
  let updatedAllCharacters = setNextCharacter(
    state.turnInfo.get('allCharacters')
  );
  const {
    allCharacters,
    humanCharacters,
    aiCharacters,
  } = TurnFunctions.findCharacters(grid);

  const activeCharacterIds = allCharacters.map(character => character.id);

  updatedAllCharacters = updatedAllCharacters.filter(character =>
    activeCharacterIds.includes(character.id)
  );

  updatedAllCharacters = updatedAllCharacters.map(character => {
    const toUpdate = allCharacters.find(
      updateChar => updateChar.id === character.id
    );
    character = toUpdate;
    return character;
  });

  const activeCharacter = updatedAllCharacters[0];

  return {
    allCharacters: updatedAllCharacters,
    aiCharacters,
    humanCharacters,
    activeCharacter,
  };
};

export const TurnFunctions = {
  sortCharacters,
  setNextCharacter,
  findCharacters,
  updateCharacters,
};
