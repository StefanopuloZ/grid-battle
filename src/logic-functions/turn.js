import { Map } from 'immutable';

const sortCharacters = (characters, value = 'initiative') => {
  const sortedCharacters = JSON.parse(JSON.stringify(characters));
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

const setNextCharacter = (allCharacters) => {
  let newAllCharacters = JSON.parse(JSON.stringify(allCharacters));
  const lastCharacter = newAllCharacters.shift();
  return [...newAllCharacters, lastCharacter];
};

export const TurnFunctions = {
  sortCharacters,
  setNextCharacter,
  findCharacters,
};
