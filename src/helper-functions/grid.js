const makeAdjacentMatrix = (grid, rows, columns) => {
  grid.forEach((cell, index) => {
    let adjecent = [];

    let up = index - columns;
    up > 0 && adjecent.push(up);

    let down = index + columns;
    down < grid.length && adjecent.push(down);

    let left = index - 1;
    left >= 0 && index % columns !== 0 && adjecent.push(left);

    let right = index + 1;
    right < grid.length && right % columns !== 0 && adjecent.push(right);

    cell.adjecent = adjecent;
  });

  return grid;
};

const fillGrid = (grid, obstacles) => {
  obstacles.forEach(obstacle => {
    grid[obstacle].fill = 'X';
  });
};

const makeGrid = ({rows, columns, obstacles}) => {
  let grid = [];
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      grid.push({
        index: i * columns + j,
        fill: '',
        adjecent: [],
        visited: 0,
        path: 0,
      });
    }
  }

  makeAdjacentMatrix(grid, rows, columns);

  fillGrid(grid, obstacles);

  return grid;
};

const fillPath = (grid, path) => {
  path.forEach(cell => {
    grid[cell.index].path = 1;
  });
};

const clearVisitedCells = grid => {
  grid.forEach(cell => {
      cell.visited = 0;
      cell.path = 0;
  });
}

const clearPath = grid => grid.map(cell => {
  cell.path = 0;
  return cell;
});

const startSearch = (grid, start, target) => {
  let paths = [];

  const searchStep = (start, target) => {

    if (paths.length === 0) {
      paths.push([grid[start]]);
    }
  
    const newPaths = [];
    let finalPath;
    let isPathImpossible = true;
  
    paths.forEach(path => {
      path[path.length - 1].adjecent.forEach(adjecentCell => {
        if (grid[adjecentCell].index === target) {
          finalPath = path;
          finalPath.push(grid[adjecentCell]);
          isPathImpossible = false;
        } else if (
          grid[adjecentCell].visited === 0 &&
          grid[adjecentCell].fill !== 'X'
        ) {
          grid[adjecentCell].visited = 1;
          const newPath = JSON.parse(JSON.stringify(path));
          newPath.push(grid[adjecentCell]);
          newPaths.push(newPath);
          isPathImpossible = false;
        }
      });
    });
  
    clearVisitedCells(grid);
  
    if (isPathImpossible) {
      return grid;
    }
  
    paths = newPaths;
  
    if (finalPath) {
      return finalPath;
    };
  
    return false;
  };

  if (!start && start !== 0) {
    return;
  }
  if (grid[target].fill === 'X') {
      return;
  }
  let counter = 0;
  let result = searchStep(start, target);
  while (!result && counter < 300) {
      ++counter;
      result = searchStep(start, target);
      if (result) {
        fillPath(grid, result);
        return grid;
      }
  }
  paths = [];
  clearVisitedCells(grid);
}

export const GridHelper = {
  makeAdjacentMatrix,
  makeGrid,
  fillGrid,
  fillPath,
  startSearch,
  clearPath,
};
