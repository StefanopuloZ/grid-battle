import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';
import { GridHelper, Animations } from '../../helper-functions';

const Grid = props => {
  const { grid, updateGrid } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [path, setPath] = useState([]);
  const [animationProgress, setAnimationProgress] = useState(false);

  const clearSelectedCharacter = () => {
    setIsSelected(false);
    setSelected(null);
    setSelectedCharacter({});
    updateGrid(GridHelper.clearPath(grid));
    setPath([]);
  };

  const updateSelectedCharacter = cell => {
    setIsSelected(true);
    setSelected(cell.index);
    setSelectedCharacter(cell.stats);
    updateGrid(GridHelper.clearPath(grid));
  };

  const waitFor = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async function animateAndMove() {
    setAnimationProgress(true);
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[selected].animation = Animations.moveAnimationBuilder(path, 'move', 300);
    updateGrid(newGrid);

    await waitFor(path.length * 300);
    clearSelectedCharacter();
    updateGrid(GridHelper.moveCharacter(grid, selectedCharacter, grid[path[path.length - 1].index]));
    setAnimationProgress(false);
  }

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected) {
      if (cell.fill !== 'C') {
        return;
      }
      updateSelectedCharacter(cell);
    } else {
      if (selected === cell.index) {
        clearSelectedCharacter();
      } else {
        if (cell.fill !== 'X' && path.length > 0) {

          animateAndMove();
        }
      }
    }
  };

  const startSearch = cell => {
    let newGrid = GridHelper.startSearch(
      JSON.parse(JSON.stringify(grid)),
      selected,
      cell.index,
      selectedCharacter
    );
    if (newGrid && newGrid.grid) {
      updateGrid(newGrid.grid);
      setPath(newGrid.result);
    }
  };

  return (
    <StyledGrid>
      {grid.map(cell => {
        const cellSelected = cell.index === selected;

        return (
          <Cell
            key={cell.index}
            cell={cell}
            selected={cellSelected}
            onClick={() => {
              onClick(cell);
            }}
            onMouseEnter={() => {
              isSelected && !animationProgress && startSearch(cell);
            }}
          />
        );
      })}
    </StyledGrid>
  );
};

Element.propTypes = {
  children: PropTypes.element.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
