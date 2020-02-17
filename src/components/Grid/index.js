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

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected) {
      if (cell.fill !== 'C') {
        return;
      };

      setIsSelected(true);
      setSelected(cell.index);
      setSelectedCharacter(cell.stats);
      console.log('selectedCharacter', cell.stats);
      updateGrid(GridHelper.clearPath(grid));
    } else {
      if (selected === cell.index) {
        setIsSelected(false);
        setSelected(null);
        setSelectedCharacter({});
        updateGrid(GridHelper.clearPath(grid));
      } else {
        if (cell.fill !== 'X' && cell.path) {
          console.log('move character!');
          updateGrid(GridHelper.moveCharacter(grid, selectedCharacter, cell));
          updateGrid(GridHelper.clearPath(grid));
          
          setIsSelected(false);
          setSelected(null);
          setSelectedCharacter({});
        }
      }
    }

  };

  const startSearch = cell => {
    let newGrid = GridHelper.startSearch(JSON.parse(JSON.stringify(grid)), selected, cell.index, selectedCharacter);
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
