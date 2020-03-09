import React from 'react';
import PropTypes from 'prop-types';
import { StyledCellContent } from './styledCellContent';
import { color } from 'styled-system';

const CellContent = props => {
  const { cell, selected } = props;
  const { index, fill, stats } = cell;
  const hp = stats && stats.hp ? stats.hp : null;

  return (
    <StyledCellContent
      selected={selected}
      image={cell.image}
      animation={cell.animation}
    >
      <p style={{
        color: hp ? 'red' : ''
      }}>{`${index} ${fill} ${hp ? 'hp:' + hp : ''}`}</p>
    </StyledCellContent>
  );
};

Element.propTypes = {
  cell: PropTypes.object.isRequired,
};

Element.defaultProps = {};

export default CellContent;
