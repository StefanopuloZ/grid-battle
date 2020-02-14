import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';

const Grid = props => {
  return (
    <StyledGrid>
      {props.grid.map(cell => (
        <Cell key={cell.index} cell={cell} />
      ))}
    </StyledGrid>
  );
};

Element.propTypes = {
  children: PropTypes.element.isRequired
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid
});

const mapDispatchToProps = dispatch => ({
  updateGrid: () => dispatch(GridActions.updateGrid)
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
