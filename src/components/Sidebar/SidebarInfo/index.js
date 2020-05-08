import React from 'react';
import PropTypes from 'prop-types';
import StyledSidebarInfo from './styledSidebarInfo';
import CharacterInfo from '../../CharacterInfo';

const SidebarInfo = props => {
  const { gameInProgress, activeCharacter, hoverCharacter } = props;

  return (
    <>
      <StyledSidebarInfo>
        {activeCharacter.name && (
          <CharacterInfo
            name={activeCharacter.name}
            attack={activeCharacter.attack}
            hp={activeCharacter.hp}
            ac={activeCharacter.ac}
            speed={activeCharacter.speed}
            image={activeCharacter.image}
            player={activeCharacter.player}
          />
        )}
        {hoverCharacter.name && (
          <CharacterInfo
            name={hoverCharacter.name}
            attack={hoverCharacter.attack}
            hp={hoverCharacter.hp}
            ac={hoverCharacter.ac}
            speed={hoverCharacter.speed}
            image={hoverCharacter.image}
            player={hoverCharacter.player}
          />
        )}
      </StyledSidebarInfo>
      ;
    </>
  );
};

SidebarInfo.propTypes = {
  gameInProgress: PropTypes.bool,
  activeCharacter: PropTypes.object.isRequired,
  hoverCharacter: PropTypes.object.isRequired,
};

SidebarInfo.defaultProps = {
  gameInProgress: false,
};

export default SidebarInfo;
