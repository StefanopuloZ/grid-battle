import React from 'react';
import PropTypes from 'prop-types';
import Console from './Console';
import SidebarInfo from './SidebarInfo';
import StyledSidebar from './styledSidebar';

const Sidebar = props => {
  const { action, gameInProgress, activeCharacter } = props;

  return (
    <StyledSidebar>
      <SidebarInfo gameInProgress={gameInProgress} activeCharacter={activeCharacter} />
      <Console action={action} gameInProgress={gameInProgress} />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  action: PropTypes.object,
  gameInProgress: PropTypes.bool.isRequired,
  activeCharacter: PropTypes.object,
};

Sidebar.defaultProps = {
  action: null,
  activeCharacter: {},
};

export default Sidebar;
