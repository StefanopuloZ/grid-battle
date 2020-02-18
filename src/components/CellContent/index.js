import React from 'react';
import PropTypes from 'prop-types';
import { StyledCellContent } from './styledCellContent';

const CellContent = props => {
  const { cell } = props;

  return (
    <StyledCellContent image={cell.image} animation={cell.animation}>
      <p>{`${cell.index} ${cell.fill}`}</p>
    </StyledCellContent>
  );
};

Element.propTypes = {
  cell: PropTypes.object.isRequired,
};

Element.defaultProps = {

};

export default CellContent;
