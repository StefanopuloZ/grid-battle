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
        direction: null,
      });
    }
  }

  grid = makeAdjacentMatrix(grid, rows, columns);

  grid = fillGrid(grid, fill);

  return grid;
};

// **** Grid Cleanup and Paint functions ***** //
// **                                       ** //

const clearPath = grid =>
  grid.map(cell => {
    cell.path = 0;
    cell.direction = null;
    return cell;
  });

const fillPath = (grid, path) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  clearPath(newGrid);

  path.forEach(cell => {
    newGrid[cell.index].path = 1;
  });

  return newGrid;
};

// **** Grid Search functions ***** //
// **                            ** //

const searchForPath = (grid, start, target) => {
  let newGrid = JSON.parse(JSON.stringify(grid));

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
    }
  } while (!finalPath && counter < 300);
};

const startSearch = (grid, start, target, character) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  if (newGrid[target].fill || (!start && start !== 0)) {
    return;
  }

  let result = searchForPath(grid, start, target);

  if (result) {
    result = result.splice(0, character.speed);
    newGrid = fillPath(grid, result);
    return { grid: newGrid, result };
  } else {
    return null;
  }
};

// **** Grid Move functions ***** //
// **                          ** //

const moveCharacter = (grid, character, target) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  
  newGrid[character.index].fill = '';
  newGrid[character.index].image = '';
  newGrid[character.index].stats = '';

  newGrid[target.index].image = character.image;
  newGrid[target.index].fill = character.fill;
  newGrid[target.index].stats = character;
  newGrid[target.index].stats.index = target.index;

  return newGrid;
};

export const GridHelper = {
  makeGrid,
  startSearch,
  clearPath,
  moveCharacter,
};
