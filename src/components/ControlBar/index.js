import React from 'react';
import PropTypes from 'prop-types';
import { StyledControlBarWrapper, StyledControlBar } from './styledControlBar';
import Button from '../Button';

const ControlBar = props => {
  const { endGame, startGame, skipTurn, gameInProgress } = props;

  return (
    <StyledControlBarWrapper>
      <StyledControlBar>
        {gameInProgress && (
          <Button type={'secondary'} func={endGame} text={'Surrender'}/>
        )}
        {!gameInProgress && (
          <Button type={'secondary'} func={startGame} text={'Start'}/>
        )}
        <Button type={'secondary'} func={skipTurn} text={'Skip Turn'}/>
      </StyledControlBar>
    </StyledControlBarWrapper>
  );
};

ControlBar.propTypes = {
  endGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
};

ControlBar.defaultProps = {};

export default ControlBar;
