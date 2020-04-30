import React from 'react';
import PropTypes from 'prop-types';
import { StyledControlBarWrapper, StyledControlBar } from './styledControlBar';

const ControlBar = props => {
  const { endGame, startGame, skipTurn } = props;

  return (
    <StyledControlBarWrapper>
      <StyledControlBar>
        <div>
          <button
            onClick={() => {
              endGame();
            }}
          >
            END GAME
          </button>
          <button
            onClick={() => {
              skipTurn();
            }}
          >
            SKIP TURN
          </button>
          <button
            onClick={() => {
              startGame();
            }}
          >
            START
          </button>
        </div>
      </StyledControlBar>
    </StyledControlBarWrapper>
  );
};

ControlBar.propTypes = {
  endGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
};

ControlBar.defaultProps = {};

export default ControlBar;
