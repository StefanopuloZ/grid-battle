import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';
import { GridHelper } from '../../helper-functions';

const Grid = props => {
  const { grid, updateGrid } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [path, setPath] = useState([]);

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
        if (cell.fill !== 'X' && cell.path) {
          updateGrid(GridHelper.moveCharacter(grid, selectedCharacter, cell));
          clearSelectedCharacter();
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
      console.log('path', newGrid.result);
      updateGrid(newGrid.grid);
    }
  };

  return (
    <StyledGrid>
      {/* {console.log('path', path)} */}
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
              startSearch(cell);
            }}
          />
        );
      })}
    </StyledGrid>
  );
};

Element.propTypes = {
  children: PropTypes.element.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
