import React from 'react';
import PropTypes from 'prop-types';
import StyledGrid from './styledGrid';

const Grid = props => {
    console.log(props);

  return (
    <StyledGrid>
      {props.children}
    </StyledGrid>
  );
};

Element.propTypes = {
  children: PropTypes.element.isRequired,
};

Element.defaultProps = {
};

export default Grid;
