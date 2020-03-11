import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledInfoBar, StyledPortrait } from './styledInfoBar';
import { TurnFunctions } from '../../logic-functions';
import { TurnActions } from '../../actions';

const InfoBar = props => {
  const { turnInfo, grid, updateTurnInfo } = props;
  const [characters, setCharacters] = useState([]);

  const mapCharactersToView = characters => {
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
    const characters = TurnFunctions.findCharacters(grid);
    if (characters.size > 0) {
      setCharacters(mapCharactersToView(characters.get('allCharacters')));
    }
  }, [grid]);

  console.log('characters', characters);

  return (
    <>
      <h3>Turn order:</h3>
      <StyledInfoBar>{characters}</StyledInfoBar>
    </>
  );
};

Element.propTypes = {
  grid: PropTypes.object.isRequired,
  turnInfo: PropTypes.func.isRequired,
  updateTurnInfo: PropTypes.func.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  turnInfo: state.TurnReducer,
});

const mapDispatchToProps = dispatch => ({
  updateTurnInfo: turnInfo => dispatch(TurnActions.updateTurnInfo(turnInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
