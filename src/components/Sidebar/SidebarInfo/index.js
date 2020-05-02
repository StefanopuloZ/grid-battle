import React from 'react';
import PropTypes from 'prop-types';
import StyledSidebarInfo from './styledSidebarInfo';

const SidebarInfo = props => {
  const { gameInProgress, activeCharacter } = props;

  console.log('activeCharacter', activeCharacter);

  return (
    <>
      <StyledSidebarInfo>
  <div>asdasd</div>
        </StyledSidebarInfo>;
    </>
  );
};

SidebarInfo.propTypes = {
  gameInProgress: PropTypes.bool,
  activeCharacter: PropTypes.object,
};

SidebarInfo.defaultProps = {
  gameInProgress: false,
  activeCharacter: {},
};

export default SidebarInfo;
