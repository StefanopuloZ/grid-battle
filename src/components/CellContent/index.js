import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GridActions } from '../../actions';
import { StyledCellContent } from './styledCellContent';

const CellContent = props => {
  const { cell, selected, grid, updateGrid } = props;
  const { index, stats } = cell;
  const hp = stats && stats.hp ? stats.hp : null;
  const player = stats && stats.player;

  if (cell.attack) {
    let newGrid = grid;
    setTimeout(() => {
      newGrid = newGrid.setIn([index, 'attack'], false);
      updateGrid(newGrid);
    }, 500);
  }

  return (
    <StyledCellContent
      selected={selected}
      image={cell.image}
      animation={cell.animation}
      attack={cell.attack}
      player={player}
    >
      <p
        style={{
          backgroundColor: hp ? 'rgba(94, 94, 94, 0.6)' : '',
        }}
      >{`${hp ? 'hp:' + hp : ''}`}</p>
    </StyledCellContent>
  );
};

Element.propTypes = {
  cell: PropTypes.object.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContent);
