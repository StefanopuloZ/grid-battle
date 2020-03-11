import { Map } from 'immutable';

const findCharacters = grid => {
  const allCharacters = grid.filter((value, index) => value.fill === 'C').map(character => character.stats);

  const humanCharacters = allCharacters.filter(
    value => value.player === 'human',
  );

  const aiCharacters = allCharacters.filter(
    value => value.player === 'ai',
  );

  return new Map({
    allCharacters: allCharacters.toJS(),
    humanCharacters: humanCharacters.toJS(),
    aiCharacters: aiCharacters.toJS(),
  });
};

export const TurnFunctions = {
  findCharacters,
};
