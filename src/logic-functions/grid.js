import { List } from 'immutable';
import { random } from './helper-functions';

// **** Map Generation Functions ***** //
// **                               ** //

const randomiseFill = (grid, fill, rows) => {
  const forbiddenTiles = [
    2,
    3,
    4,
    5,
    6,
    7,
    92,
    93,
    94,
    95,
    95,
    96,
    97,
    15,
    25,
    35,
    45,
    55,
    65,
    75,
    85,
  ];
  let randomisedFill = [];

  for (let i = 0; i < fill.obstacles(); ++i) {
    let randomFill = random(0, rows * rows - 1);

    if (forbiddenTiles.includes(randomFill)) {
      --i;
    } else {
      randomisedFill.push(randomFill);
    }
  }

  console.log(randomisedFill);

  return randomisedFill;
};

// **** Grid Creator functions ***** //
// **                             ** //

const makeAdjacentMatrix = (grid, rows, columns) => {
  let newGrid = JSON.parse(JSON.stringify(grid));

  newGrid.forEach((cell, index) => {
    let adjecent = [];

    let up = index - columns;
    up > -1 && adjecent.push({ index: up, direction: 'up' });

    let down = index + columns;
    down < newGrid.length && adjecent.push({ index: down, direction: 'down' });

    let left = index - 1;
    left >= 0 &&
      index % columns !== 0 &&
      adjecent.push({ index: left, direction: 'left' });

    let right = index + 1;
    right < newGrid.length &&
      right % columns !== 0 &&
      adjecent.push({ index: right, direction: 'right' });

    cell.adjecent = adjecent;
  });

  return newGrid;
};

const fillGrid = (grid, fill, rows) => {
  let newGrid = JSON.parse(JSON.stringify(grid));

  const randomisedFill = randomiseFill(grid, fill, rows);

  randomisedFill.forEach(obstacle => {
    newGrid[obstacle].fill = 'X';
    newGrid[obstacle].image = 'tree';
    newGrid[obstacle].terrain = 'grass';
  });

  fill.characters.forEach(character => {
    newGrid[character.index].fill = character.fill;
    newGrid[character.index].image = character.image;
    newGrid[character.index].stats = character;
  });

  return newGrid;
};

const makeGrid = ({ rows, columns, fill }) => {
  let grid = [];
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      grid.push({
        index: i * columns + j,
        fill: '',
        adjecent: [],
        visited: 0,
        path: 0,
        image: '',
        terrain: 'grass',
        animation: null,
        direction: null,
        sound: 'click',
      });
    }
  }

  grid = makeAdjacentMatrix(grid, rows, columns);

  grid = fillGrid(grid, fill, rows);

  return List(grid);
};

// **** Attack Function ***** //
// **                      ** //

const calculateAttack = (attacker, defender) => {
  const attackRoll = random(1, 20);
  const attack = attacker.attack + attackRoll;
  const isHit = attack >= defender.ac;

  return {
    isHit,
    attack,
    attackRoll,
    attackBonus: attacker.attack,
    defenderAC: defender.ac,
  };
};

const calculateDamage = (attacker, defender) => {
  const damage = random(attacker.damage[0], attacker.damage[1]);
  const hp = defender.hp - damage;
  const isDead = hp <= 0;

  return { isDead, damage, hp };
};

const performAttack = (attacker, defender) => {
  const attackResult = calculateAttack(attacker, defender);
  const damageResult = attackResult.isHit
    ? calculateDamage(attacker, defender)
    : false;

  return { attackResult, damageResult };
};

// **** Grid Cleanup and Paint functions ***** //
// **                                       ** //

const clearPath = grid => {
  return grid.map(cell => {
    cell.path = 0;
    cell.direction = null;
    return cell;
  });
};

const fillPath = (grid, path) => {
  let newGrid = clearPath(grid);

  return newGrid.withMutations(newGrid => {
    path.forEach(cell => {
      newGrid.setIn([cell.index, 'path'], 1);
    });
  });
};

// **** Grid Search functions ***** //
// **

/* asd sasd asd asd */

const searchForPath = (grid, start, target) => {
  let newGrid = grid.toJS();

  let paths = [[newGrid[start]]];
  let finalPath;

  const searchStep = () => {
    const newPaths = [];
    paths.forEach(path => {
      path[path.length - 1].adjecent.forEach(adjecentCell => {
        if (newGrid[adjecentCell.index].index === target) {
          finalPath = path;
          newGrid[adjecentCell.index].direction = adjecentCell.direction;
          finalPath.push(newGrid[adjecentCell.index]);
        } else if (
          newGrid[adjecentCell.index].visited === 0 &&
          !newGrid[adjecentCell.index].fill
        ) {
          newGrid[adjecentCell.index].visited = 1;
          const newPath = JSON.parse(JSON.stringify(path));
          newPath.push(newGrid[adjecentCell.index]);
          newPath[newPath.length - 1].direction = adjecentCell.direction;
          newPaths.push(newPath);
        }
      });
    });
    return newPaths;
  };

  let counter = 0;
  do {
    ++counter;
    if (counter > 299) {
      console.log('time out!');
    }
    paths = searchStep();
    if (finalPath) {
      return finalPath;
    } else if (paths.length === 0) {
      console.log('path impossible!');
      return false;
    }
  } while (!finalPath && counter < 300);
};

const startSearch = (grid, start, target, character) => {
  let newGrid = grid;
  let newGridJS = newGrid.toJS();

  const actingCharacter = newGridJS[start].stats;
  const isAttack =
    newGridJS[target].stats &&
    newGridJS[target].stats.player !== actingCharacter.player;

  if ((newGrid.get(target).fill && !isAttack) || (!start && start !== 0)) {
    return null;
  }

  let result = searchForPath(grid, start, target);

  let tilesToMove = character.speed;
  let attackResult;
  const isAttackPossible =
    isAttack && result && result.length <= character.speed + 1;

  if (isAttackPossible) {
    if (result.length > character.speed) {
      tilesToMove = character.speed;
    } else {
      tilesToMove = result.length - 1;
    }
    attackResult = performAttack(actingCharacter, newGridJS[target].stats);
  }

  if (result) {
    result = result.splice(0, tilesToMove);
    newGrid = fillPath(grid, result);
    return { grid: List(newGrid), result, attackResult };
  } else {
    return null;
  }
};

// **** Grid Move functions ***** //
// **                          ** //

const moveCharacter = (grid, character, target) =>
  grid
    .setIn([character.index, 'fill'], '')
    .setIn([character.index, 'image'], '')
    .setIn([character.index, 'stats'], '')
    .setIn([target.index, 'image'], character.image)
    .setIn([target.index, 'fill'], character.fill)
    .setIn([target.index, 'stats'], character)
    .setIn([target.index, 'stats', 'index'], target.index);

const clearTile = (grid, tile) =>
  grid
    .setIn([tile, 'image'], '')
    .setIn([tile, 'stats'], '')
    .setIn([tile, 'fill'], '')
    .setIn([tile, 'sound'], 'click');

const updateCharacter = (grid, character) =>
  grid.setIn([character.index, 'stats'], character.stats);

export const GridHelper = {
  makeGrid,
  startSearch,
  clearPath,
  moveCharacter,
  clearTile,
  updateCharacter,
};
