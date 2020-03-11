import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledInfoBar, StyledPortrait } from './styledInfoBar';
import { TurnFunctions } from '../../logic-functions';
import { TurnActions } from '../../actions';

const InfoBar = props => {
  const { turnInfo, grid, updateTurnInfo, activeCharacter, allCharacters } = props;

  const mapCharactersToView = characters => {
    if (!characters) {
      return;
    }
    return characters.map((character, index) => (
      <StyledPortrait
        key={index}
        image={character.image}
        player={character.player}
      >
        <p
          style={{
            backgroundColor: 'rgba(94, 94, 94, 0.6)',
          }}
        >
          name: {character.name}
          <br />
          init: {character.initiative}
          <br />
          hp: {character.hp}
          <br />
          att: {character.attack}
          <br />
          dmg: {character.damage[0]}-{character.damage[1]}
        </p>
      </StyledPortrait>
    ));
  };

  useEffect(() => {
    if (allCharacters.length === 0 && grid.size > 0) {
      const characters = TurnFunctions.findCharactersSorted(grid);
      let newTurnInfo = turnInfo.setIn(['allCharacters'], characters.allCharacters);
      newTurnInfo = newTurnInfo.setIn(['activeCharacter'], characters.allCharacters[0]);
      updateTurnInfo(newTurnInfo);
    }

    // eslint-disable-next-line
  }, [grid]);

  useEffect(() => {
    if (activeCharacter) {
      
    }
  }, [activeCharacter]);

  return (
    <>
      <h3>Turn order:</h3>
      <StyledInfoBar>{mapCharactersToView(allCharacters)}</StyledInfoBar>
    </>
  );
};

Element.propTypes = {
  grid: PropTypes.object.isRequired,
  turnInfo: PropTypes.object.isRequired,
  updateTurnInfo: PropTypes.func.isRequired,
  allCharacters: PropTypes.array,
};

Element.defaultProps = {
  allCharacters: [],
};

const mapStateToProps = state => ({
  turnInfo: state.TurnReducer.turnInfo,
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({
  updateTurnInfo: turnInfo => dispatch(TurnActions.updateTurnInfo(turnInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
