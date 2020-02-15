import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';
import { GridHelper } from '../../helper-functions';

const Grid = props => {
  const { grid, updateGrid } = props;

  const [selected, setSelected] = useState(0);

  const onClick = cell => {
    if (cell.fill === 'X') {
      return;
    }
    setSelected(cell.index);
    updateGrid(GridHelper.clearPath(grid));

    console.log('cell', cell);
  };

  const startSearch = cell => {
    let newGrid = GridHelper.startSearch(JSON.parse(JSON.stringify(grid)), selected, cell.index);
    if (newGrid) {
      updateGrid(newGrid);
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
