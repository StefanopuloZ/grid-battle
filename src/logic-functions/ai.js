import { GridHelper } from "./grid";

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const weightValues = {
  canReach: 200,
  toHitChance: (attack, AC) => {
    return (attack - AC + 20) * 10;
  },
  canKill: (targetHP, damageMax) => {
    return targetHP - damageMax <= 0 ? 50 : 0;
  },
  threatLevel: (targetAttack, targetDamageMax) => {
    return (targetAttack + targetDamageMax) * 10;
  },
};

const assignWeight = (moves) => {
  let calculatedWeight = 0;
  let moveWeights = '';

  const weightedMoves = moves.map((move) => {
    const activeCharacter = move.stats;
    const target = move.target;

    let weight = 0;
    weight += move.result.attackResult ? weightValues.canReach : 0;
    moveWeights += `canReach: ${moveWeights}`;
    weight += weightValues.toHitChance(activeCharacter.attack, target.ac);
    weight += weightValues.canKill(target.hp, activeCharacter.damage[1]);
    weight += weightValues.threatLevel(target.attack, target.damage[1]);

    calculatedWeight = calculatedWeight + weight;

    return { ...move, weight, calculatedWeight};
  });

  console.log(weightedMoves);

  return weightedMoves;
};

const checkPossibleMoves = (grid, activeCharacter, humanCharacters) => {
  const possibleMoves = [];
  humanCharacters.forEach((character) => {
    const searchResult = GridHelper.startSearch(
      grid,
      activeCharacter.index,
      character.index,
      activeCharacter
    );

    if (searchResult) {
      possibleMoves.push({
        result: searchResult,
        index: character.index,
        target: character,
        stats: activeCharacter,
      });
    }
  });

  return assignWeight(possibleMoves);
};

const choseMove = moves => {
  const maxWeight = moves[moves.length - 1].calculatedWeight;
  const randomPick = random(0, maxWeight);

  console.log('randomPick', randomPick, 'maxWeight', maxWeight);

  for (let i = 0; i < moves.length; i++) {
    if (randomPick - moves[i].calculatedWeight <= 0) {
      return moves[i].index;
    }
  }
}

const calculateAiMove = (grid, activeCharacter, humanCharacters) => {
  const possibleMoves = checkPossibleMoves(
    grid,
    activeCharacter,
    humanCharacters
  );

  // console.log("possibleMoves", possibleMoves);

  // console.log('Chosen move', choseMove(possibleMoves));

  return choseMove(possibleMoves);
};

export const AiFunctions = {
  calculateAiMove,
};
