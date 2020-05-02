import React from 'react';
import PropTypes from 'prop-types';
import Console from './Console';
import SidebarInfo from './SidebarInfo';
import StyledSidebar from './styledSidebar';

const Sidebar = props => {
  const { action, gameInProgress, activeCharacter, hoverCharacter } = props;

  return (
    <StyledSidebar>
      <SidebarInfo gameInProgress={gameInProgress} activeCharacter={activeCharacter} hoverCharacter={hoverCharacter} />
      <Console action={action} gameInProgress={gameInProgress} />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  action: PropTypes.object,
  gameInProgress: PropTypes.bool.isRequired,
  activeCharacter: PropTypes.object.isRequired,
  hoverCharacter: PropTypes.object.isRequired,
};

Sidebar.defaultProps = {
  action: null,
};

export default Sidebar;
