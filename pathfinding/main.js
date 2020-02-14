const rows = 10;
const columns = 10;
const start = 0;
const obstacles = [5, 15, 8, 18, 38, 37, 13, 23, 33, 1, 11, 94, 98, 77, 76, 78, 45, 35, 55, 97, 70, 71, 72, 52, 51, 30];
let visitedCells = [];
let paths = [];

let tableCreate = (grid, rows, columns) => {
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.id = 'table';
    tbl.style.border = '2px solid black';

    for (let i = 0; i < rows; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < columns; j++) {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(`${grid[i * columns + j].index} ${grid[i * columns + j].fill}`));
            td.style.border = '1px solid black';
            td.style.width = '200px';
            td.style.height = '50px';
            td.id = grid[i * columns + j].index;
            let color = grid[i * columns + j].fill === 'E' ? 'red' : grid[i * columns + j].path ? 'green' : '';
            color = grid[i * columns + j].fill === 'X' ? 'black' : grid[i * columns + j].fill === 'S' ? 'blue' : color;
            td.style.backgroundColor = color;
        }
    }

    body.appendChild(tbl);
}

const makeGrid = (rows, columns) => {
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

    return grid;
};

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
};

const drawGrid = (grid, columns, rows) => {
    let line = [];
    grid.forEach((cell, index) => {
        line.push(`${index} - ${cell.adjecent}`);
        if ((index + 1) % columns === 0) {
            line = [];
        }
    });
};

const fillGrid = (grid, start, obstacles) => {
    grid[start].fill = 'S';
    grid[start].visited = 1;
    obstacles.forEach(obstacle => {
        grid[obstacle].fill = 'X';
    });
};

const fillPath = (grid, path) => {
    path.forEach(cell => {
        grid[cell.index].path = 1;
    });
}

const searchStep = (grid, target) => {
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
            } else if (grid[adjecentCell].visited === 0 && grid[adjecentCell].fill !== 'X') {
                grid[adjecentCell].visited = 1;
                const newPath = JSON.parse(JSON.stringify(path));
                newPath.push(grid[adjecentCell]);
                newPaths.push(newPath);
                isPathImpossible = false;
            }
        });
    });

    if (finalPath) {
        fillPath(grid, finalPath);
    }

    if (isPathImpossible) {
        return true;
    }
    paths = newPaths;
    const table = document.getElementById('table');
    document.body.removeChild(table);
    tableCreate(grid, rows, columns);
    if (finalPath) {
        return true;
    }
    return false;
};

const clearVisitedCells = grid => {
    grid.forEach(cell => {
        cell.visited = 0;
        cell.path = 0;
    });
}

const startSearch = target => {
    if (grid[target].fill === 'X') {
        return;
    }
    let counter = 0;
    let result = searchStep(grid, target);
    while (!result && counter < 500) {
        ++counter;
        result = searchStep(grid, target);
    }
    paths = [];
    clearVisitedCells(grid);
    console.log('counter', counter + 1);
}

const grid = makeGrid(rows, columns);

fillGrid(grid, start, obstacles);

makeAdjacentMatrix(grid, rows, columns);

drawGrid(grid, columns);

tableCreate(grid, rows, columns);

document.body.addEventListener('click', event => {
    let target = parseInt(event.target.id);
    startSearch(target);
});

console.log('grid', grid);
