import React from 'react';
import PropTypes from 'prop-types';
import Console from './Console';
import SidebarInfo from './SidebarInfo';
import StyledSidebar from './styledSidebar';

const Sidebar = props => {
  const { action, gameInProgress } = props;

  return (
    <StyledSidebar>
      <SidebarInfo />
      <Console action={action} gameInProgress={gameInProgress} />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  action: PropTypes.object,
  gameInProgress: PropTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  action: null,
};

export default Sidebar;
