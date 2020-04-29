import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledTurnBar,
  StyledTBCellContent,
  StyledTBIndicator,
  StyledTBContentWrapper,
  StyledTitle,
} from './styledTurnBar';

const waitFor = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const TurnBar = props => {
  const { allCharacters, selected } = props;
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    console.log('allCharacters Changed');

    if (allCharacters.length > 0) {
      if (!characters) {
        setCharacters(allCharacters);
      } else {
        changeTurnOrder();
      }
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
          <StyledTBIndicator player={character.player} />
        </StyledTBContentWrapper>
      );
    });
  };

  return (
    <>
      <StyledTurnBar>
        <StyledTitle>Turn<br/>Order:</StyledTitle>
        {mapCharactersToView(characters)}
      </StyledTurnBar>
    </>
  );
};

TurnBar.propTypes = {
  grid: PropTypes.object.isRequired,
  allCharacters: PropTypes.array,
};

TurnBar.defaultProps = {
  allCharacters: [],
};

const mapStateToProps = state => ({
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TurnBar);
