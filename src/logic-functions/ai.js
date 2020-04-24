import { GridHelper } from './grid';

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const weightValues = {
  toHitChance: (attack, AC) => {
    return attack - AC > 0 ? 100 : -50;
  },
  canKill: (targetHP, damageMax) => {
    return targetHP - damageMax <= 0 ? 200 : 0;
  },
  remainingHP: targetHP => (10 - targetHP > 0 ? (10 - targetHP) * 20 : 0),
  threatLevel: (targetAttack, targetDamageMax) => {
    return (targetAttack + targetDamageMax) * 10;
  },
};

const assignWeight = moves => {
  const weightedMoves = moves.map(move => {
    const activeCharacter = move.stats;
    const target = move.target;
    let calculatedWeight = 0;
    let weightBreakdown = {};

    let weight = 0;

    const toHitChance = weightValues.toHitChance(
      activeCharacter.attack,
      target.ac
    );
    weight += toHitChance;
    weightBreakdown.toHitChance = toHitChance;

    const remainingHP = weightValues.remainingHP(target.hp);
    weight += remainingHP;
    weightBreakdown.remainingHP = remainingHP;

    const canKill = weightValues.canKill(target.hp, activeCharacter.damage[1]);
    weight += canKill;
    weightBreakdown.canKill = canKill;

    const threatLevel = weightValues.threatLevel(
      target.attack,
      target.damage[1]
    );
    weight += threatLevel;
    weightBreakdown.threatLevel = threatLevel;

    calculatedWeight = calculatedWeight + weight;

    return { ...move, weight, calculatedWeight, weightBreakdown };
  });

  return weightedMoves;
};

const checkPossibleMoves = (grid, activeCharacter, humanCharacters) => {
  let possibleMoves = [];
  let canAttack = false;

  humanCharacters.forEach(character => {
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

      if (!canAttack && searchResult.attackResult) {
        console.log('inininin');
        canAttack = true;
      }
    }
  });

  if (canAttack) {
    possibleMoves = possibleMoves.filter(move => move.result.attackResult);
  }

  return assignWeight(possibleMoves);
};

const choseMove = moves => {
  const maxWeight = moves[moves.length - 1].calculatedWeight;
  const randomPick = random(0, maxWeight);

  for (let i = 0; i < moves.length; i++) {
    if (randomPick - moves[i].calculatedWeight <= 0) {
      return moves[i].index;
    }
  }
};

const calculateAiMove = (grid, activeCharacter, humanCharacters) => {
  const possibleMoves = checkPossibleMoves(
    grid,
    activeCharacter,
    humanCharacters
  );

  if (possibleMoves.length > 0) {
    return choseMove(possibleMoves);
  } else {
    return null;
  }
};

export const AiFunctions = {
  calculateAiMove,
};
