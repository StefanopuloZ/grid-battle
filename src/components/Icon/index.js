import React from 'react';
import IcoMoon from 'react-icomoon';
import { StyledIcoMoon } from './styledIcoMoon';

const iconSet = require('./selection.json');

const Icon = ({ ...props }) => {
  return (
    <StyledIcoMoon>
      <IcoMoon iconSet={iconSet} {...props} />
    </StyledIcoMoon>
  );
};

export default Icon;
