import { GridHelper } from "./grid";

const checkPossibleMoves = (grid, activeCharacter, humanCharacters) => {
  const possibleMoves = [];
  humanCharacters.forEach((character) => {
    possibleMoves.push({
      result: GridHelper.startSearch(
        grid,
        activeCharacter.index,
        character.index,
        activeCharacter
      ),
      index: character.index,
    });
  });

  return possibleMoves;
};

const calculateAiMove = (grid, activeCharacter, humanCharacters) => {
  const possibleMoves = checkPossibleMoves(
    grid,
    activeCharacter,
    humanCharacters
  );

  console.log("possibleMoves", possibleMoves);
  console.log(grid, activeCharacter, humanCharacters);

  return possibleMoves[0].index;
};

// iterate active characters

// store possible moves // assign weight

// select and return move

export const AiFunctions = {
  calculateAiMove,
};
