// import { Map } from 'immutable';

// const x = Map({});

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

const fillGrid = (grid, fill) => {
  let newGrid = JSON.parse(JSON.stringify(grid));

  fill.obstacles.forEach(obstacle => {
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
        direction: null
      });
    }
  }

  grid = makeAdjacentMatrix(grid, rows, columns);

  grid = fillGrid(grid, fill);

  return grid;
};

// **** Grid Cleanup and Paint functions ***** //
// **                                       ** //

const fillPath = (grid, path) => {
  let newGrid = JSON.parse(JSON.stringify(grid));

  path.forEach(cell => {
    newGrid[cell.index].path = 1;
  });

  return newGrid;
};

const clearPath = grid =>
  grid.map(cell => {
    cell.path = 0;
    cell.direction = null;
    return cell;
  });

const clearVisitedCells = grid => {
  grid.forEach(cell => {
    cell.visited = 0;
    cell.path = 0;
  });
};

// **** Grid Search functions ***** //
// **                            ** //

// const searchForPath = (grid, start, target, character) => {
//   if (paths.length === 0) {
//     paths.push([newGrid[start]]);
//   }

//   const newPaths = [];
//   let finalPath;
//   let isPathImpossible = true;

//   paths.forEach(path => {
//     path[path.length - 1].adjecent.forEach(adjecentCell => {
//       if (newGrid[adjecentCell.index].index === target) {
//         finalPath = path;
//         newGrid[adjecentCell.index].direction = adjecentCell.direction;
//         finalPath.push(newGrid[adjecentCell.index]);
//         isPathImpossible = false;
//       } else if (
//         newGrid[adjecentCell.index].visited === 0 &&
//         !newGrid[adjecentCell.index].fill
//       ) {
//         newGrid[adjecentCell.index].visited = 1;
//         const newPath = JSON.parse(JSON.stringify(path));
//         newPath.push(newGrid[adjecentCell.index]);
//         newPath[newPath.length - 1].direction = adjecentCell.direction;
//         newPaths.push(newPath);
//         isPathImpossible = false;
//       }
//     });
//   });

//   clearVisitedCells(grid);

//   paths = newPaths;

//   if (finalPath && !isPathImpossible) {
//     return finalPath.slice(0, character.speed);
//   }
// };

const startSearch = (grid, start, target, character) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  if (newGrid[target].fill || (!start && start !== 0)) {
    return;
  }

  const result = searchForPath(grid, start, target, character);

  if (result) {
    newGrid = fillPath(grid, result);
    return { grid: newGrid, result };
  } else {
    return null;
  }

  // let paths = [];

  // let counter = 0;

  // let result;

  // do {
  //   ++counter;
  //   if (counter > 299) {
  //     console.log('time out!');
  //   }
  //   result = searchStep(start, target, character);
  //   if (result) {
  //     newGrid = fillPath(grid, result);
  //     return { grid: newGrid, result };
  //   }
  // } while (!result && counter < 300);
};

// **** Grid Move functions ***** //
// **                          ** //

const moveCharacter = (grid, character, target, path) => {
  grid[character.index].fill = '';
  grid[character.index].image = '';
  grid[character.index].stats = '';

  grid[target.index].image = character.image;
  grid[target.index].fill = character.fill;
  grid[target.index].stats = character;
  grid[target.index].stats.index = target.index;

  return grid;
};

export const GridHelper = {
  makeGrid,
  startSearch,
  clearPath,
  moveCharacter
};
