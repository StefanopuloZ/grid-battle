import React from 'react';
// import PropTypes from 'prop-types';
import { StyledSpinner } from './styledSpinner';

const Spinner = props => {
  return (
    <StyledSpinner>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledSpinner>
  );
};

Spinner.propTypes = {};

Spinner.defaultProps = {};

export default Spinner;
