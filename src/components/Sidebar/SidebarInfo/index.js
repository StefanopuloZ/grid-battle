import React from 'react';
import PropTypes from 'prop-types';
import StyledSidebarInfo from './styledSidebarInfo';
import CharacterInfo from '../../CharacterInfo';

const SidebarInfo = props => {
  const { activeCharacter, hoverCharacter } = props;

  return (
    <>
      <StyledSidebarInfo>
        {activeCharacter.name && (
          <CharacterInfo
            name={activeCharacter.name}
            attack={activeCharacter.attack}
            hp={activeCharacter.hp}
            maxHp={activeCharacter.maxHp}
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
            maxHp={hoverCharacter.maxHp}
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
};

export default SidebarInfo;
