import React from 'react';
import PropTypes from 'prop-types';
import Console from './Console';
import SidebarInfo from './SidebarInfo';
import StyledSidebar from './styledSidebar';

const Sidebar = props => {
  const { action } = props;

  return (
      <StyledSidebar>
          <SidebarInfo />
          <Console action={action}/>
      </StyledSidebar>
  );
};

Sidebar.propTypes = {
  action: PropTypes.object,
};

Sidebar.defaultProps = {
  action: null,
};

export default Sidebar;
