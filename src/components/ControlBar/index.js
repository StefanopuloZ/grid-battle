import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledControlBarWrapper, StyledControlBar } from './styledControlBar';
import Button from '../Button';
import Spinner from '../Spinner';

const ControlBar = props => {
  const { endGame, startGame, skipTurn, gameInProgress, isAiTurn } = props;

  const [waitForCleanUp, setWaitForCleanUp] = useState(false);

  const onSurrenderClick = () => {
    endGame();
    if (isAiTurn) {
      setWaitForCleanUp(true);
      setTimeout(() => {
        setWaitForCleanUp(false);
      }, 3500);
    }
  };

  return (
    <StyledControlBarWrapper>
      <StyledControlBar>
        {gameInProgress && (
          <Button
            type={'secondary'}
            func={onSurrenderClick}
            text={'Surrender'}
          />
        )}
        {!gameInProgress && (
          <Button
            disabled={waitForCleanUp}
            type={'secondary'}
            func={startGame}
            text={'Start'}
          />
        )}
        {(waitForCleanUp || (isAiTurn && gameInProgress)) && <Spinner />}
        <Button
          type={'secondary'}
          disabled={!gameInProgress || isAiTurn}
          func={skipTurn}
          text={'Skip Turn'}
        />
      </StyledControlBar>
    </StyledControlBarWrapper>
  );
};

ControlBar.propTypes = {
  endGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
  isAiTurn: PropTypes.bool,
};

ControlBar.defaultProps = {
  isAiTurn: false,
};

export default ControlBar;
