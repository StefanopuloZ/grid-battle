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

const fillGrid = (grid, start, obstacles) => {
  grid[start].fill = 'S';
  grid[start].visited = 1;
  obstacles.forEach(obstacle => {
    grid[obstacle].fill = 'X';
  });
};

const makeGrid = (rows, columns, start, obstacles) => {
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

  fillGrid(grid, start, obstacles);

  return grid;
};

export const Grid = {
  makeAdjacentMatrix,
  makeGrid,
  fillGrid,
};
