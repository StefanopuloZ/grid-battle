import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';

const Grid = props => {
  const [selected, setSelected] = useState(0);

  const onClick = cell => {
    setSelected(cell.index);
    console.log('cell', cell);
  };

  return (
    <StyledGrid>
      {props.grid.map(cell => {
        const cellSelected = cell.index === selected;

        return (
          <Cell
            key={cell.index}
            cell={cell}
            selected={cellSelected}
            onClick={() => {
              onClick(cell);
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
  updateGrid: () => dispatch(GridActions.updateGrid),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
