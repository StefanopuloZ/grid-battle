import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HpOverlay from '../HpOverlay';
import {
  StyledTurnBar,
  StyledTBCellContent,
  StyledTBIndicator,
  StyledTBContentWrapper,
  StyledTitle,
} from './styledTurnBar';
import { waitFor } from '../../logic-functions/helper-functions';

const TurnBar = props => {
  const { allCharacters, selected, gameInProgress } = props;
  const [characters, setCharacters] = useState(null);

  /* **  Handle character order change  ** */
  useEffect(() => {
    if (allCharacters.length > 0) {
      if (!characters) {
        setCharacters(allCharacters);
      } else {
        changeTurnOrder();
      }
    } else {
      setCharacters(null);
    }
    // eslint-disable-next-line
  }, [allCharacters]);

  async function changeTurnOrder() {
    let animatedCharacters = JSON.parse(JSON.stringify(characters));
    animatedCharacters[0].moved = 'first';
    setCharacters(animatedCharacters);

    await waitFor(1000);

    animatedCharacters = JSON.parse(JSON.stringify(allCharacters));
    animatedCharacters[animatedCharacters.length - 1].moved = 'last';
    setCharacters(animatedCharacters);

    await waitFor(500);

    setCharacters(allCharacters);
  }

  const mapCharactersToView = characters => {
    if (!characters) {
      return;
    }
    return characters.map((character, index) => {
      const cellSelected = character.index === selected;
      const hp = character.hp;
      const maxHp = character.maxHp;

      return (
        <StyledTBContentWrapper
          selected={cellSelected}
          animation={character.animation}
          key={index}
          moved={character.moved}
        >
          <StyledTBCellContent
            selected={cellSelected}
            image={character.image}
            player={character.player}
          />
          <HpOverlay hp={hp} maxHp={maxHp} />
          <StyledTBIndicator player={character.player} />
        </StyledTBContentWrapper>
      );
    });
  };

  return (
    <>
      <StyledTurnBar>
        <StyledTitle>
          Turn
          <br />
          Order:
        </StyledTitle>
        {gameInProgress && mapCharactersToView(characters)}
      </StyledTurnBar>
    </>
  );
};

TurnBar.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  allCharacters: PropTypes.array,
  gameInProgress: PropTypes.bool.isRequired,
};

TurnBar.defaultProps = {
  allCharacters: [],
  selected: false,
};

const mapStateToProps = state => ({
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TurnBar);
