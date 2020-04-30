import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridHeader } from './styledGridHeader';
import TurnBar from '../TurnBar';
import ControlBar from '../ControlBar';

const GridHeader = props => {
  const { grid, selected, startGame, endGame, skipTurn } = props;

  return (
    <StyledGridHeader>
      <TurnBar grid={grid} selected={selected} />
      <ControlBar startGame={startGame} endGame={endGame} skipTurn={skipTurn} />
    </StyledGridHeader>
  );
};

GridHeader.propTypes = {
  grid: PropTypes.object.isRequired,
  selected: PropTypes.number,
  endGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
};

GridHeader.defaultProps = {
  selected: null,
};

export default GridHeader;
