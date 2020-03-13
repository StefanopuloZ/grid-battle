import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledInfoBar, StyledPortrait } from './styledInfoBar';

const InfoBar = props => {
  const { allCharacters } = props;

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

  return (
    <>
      <h3>Turn order:</h3>
      <StyledInfoBar>{mapCharactersToView(allCharacters)}</StyledInfoBar>
    </>
  );
};

InfoBar.propTypes = {
  grid: PropTypes.object.isRequired,
  allCharacters: PropTypes.array,
};

InfoBar.defaultProps = {
  allCharacters: [],
};

const mapStateToProps = state => ({
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
