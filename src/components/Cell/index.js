import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledCell, StyledCellContent } from './styledCell';

const Cell = props => {
  const { columns } = props;
  const basis = 100 / columns + '%';
  console.log(basis);

  return (
    <StyledCell basis={basis}>
      <StyledCellContent>{props.cell.index}</StyledCellContent>
    </StyledCell>
  );
};

Element.propTypes = {
  index: PropTypes.object,
  columns: PropTypes.number.isRequired,
};

Element.defaultProps = {
  index: 'null'
};

const mapStateToProps = state => ({
  columns: state.GridReducer.columns
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
