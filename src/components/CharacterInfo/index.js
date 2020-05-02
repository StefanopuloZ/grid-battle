import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCharacterInfo,
  StyledCharacterInfoTitle,
  StyledCharacterInfoImage,
  StyledCharacterInfoStat,
} from './styledCharacterInfo';

const CharacterInfo = props => {
  const { name, speed, image, hp, attack, ac } = props;

  return (
    <StyledCharacterInfo>
      <StyledCharacterInfoTitle>
        <StyledCharacterInfoImage image={image} />
        <h2>{name}</h2>
      </StyledCharacterInfoTitle>
      <StyledCharacterInfoStat>
        HP:<span>{hp}</span>
      </StyledCharacterInfoStat>
      <StyledCharacterInfoStat>
        Attack:<span>{attack}</span>
      </StyledCharacterInfoStat>
      <StyledCharacterInfoStat>
        AC:<span>{ac}</span>
      </StyledCharacterInfoStat>
      <StyledCharacterInfoStat>
        Speed:<span>{speed}</span>
      </StyledCharacterInfoStat>
    </StyledCharacterInfo>
  );
};

CharacterInfo.propTypes = {
  name: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  ac: PropTypes.number.isRequired,
};

CharacterInfo.defaultProps = {};

export default CharacterInfo;
