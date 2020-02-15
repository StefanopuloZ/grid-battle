import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledCell, StyledCellContent } from './styledCell';

const Cell = props => {
  const { columns, cell, selected, onClick, onMouseEnter } = props;
  const basis = 100 / columns + '%';
  let fill = '';
  if (cell.fill === 'S') {
    fill = 'lightgreen';
  } else if (cell.fill === 'X') {
    fill = 'brown';
  }

  return (
    <StyledCell basis={basis} fill={fill}>
      <StyledCellContent
        onClick={onClick}
        selected={selected}
        onMouseEnter={onMouseEnter}
        path={cell.path}
      >{`${cell.index} ${cell.fill}`}</StyledCellContent>
    </StyledCell>
  );
};

Element.propTypes = {
  cell: PropTypes.object,
  columns: PropTypes.number.isRequired,
};

Element.defaultProps = {
  cell: {},
};

const mapStateToProps = state => ({
  columns: state.GridReducer.settings.columns,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
