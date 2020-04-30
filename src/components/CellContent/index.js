import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GridActions } from '../../actions';
import {
  StyledCellContent,
  StyledIndicator,
  StyledCellContentWrapper,
} from './styledCellContent';

const CellContent = props => {
  const { cell, selected, grid, updateGrid } = props;
  const { index, stats } = cell;
  // const hp = stats && stats.hp ? stats.hp : null;
  const player = stats && stats.player;

  if (cell.attack) {
    let newGrid = grid;
    setTimeout(() => {
      newGrid = newGrid.setIn([index, 'attack'], false);
      updateGrid(newGrid);
    }, 500);
  }

  return (
    <StyledCellContentWrapper selected={selected} animation={cell.animation}>
      <StyledCellContent
        selected={selected}
        image={cell.image}
        attack={cell.attack}
        player={player}
      ></StyledCellContent>
      <StyledIndicator player={player} />
    </StyledCellContentWrapper>
  );
};

CellContent.propTypes = {
  cell: PropTypes.object.isRequired,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  grid: PropTypes.object.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

CellContent.defaultProps = {
  selected: false,
};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CellContent);
