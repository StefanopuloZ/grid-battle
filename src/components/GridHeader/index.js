import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridHeader } from './styledGridHeader';
import TurnBar from '../TurnBar';
import ControlBar from '../ControlBar';

const GridHeader = props => {
  const { grid, selected, startGame, endGame, skipTurn, gameInProgress } = props;

  return (
    <StyledGridHeader>
      <TurnBar grid={grid} selected={selected} gameInProgress={gameInProgress} />
      <ControlBar startGame={startGame} endGame={endGame} skipTurn={skipTurn} gameInProgress={gameInProgress} />
    </StyledGridHeader>
  );
};

GridHeader.propTypes = {
  grid: PropTypes.object.isRequired,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  endGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
};

GridHeader.defaultProps = {
  selected: false,
};

export default GridHeader;
