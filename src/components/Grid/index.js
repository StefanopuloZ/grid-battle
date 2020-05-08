import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledGrid, StyledGridWrapper } from './styledGrid';
import { GridActions, TurnActions } from '../../actions';
import { GridHelper, Animations, AiFunctions } from '../../logic-functions';
import Cell from '../Cell';
import Sidebar from '../Sidebar';
import { waitFor } from '../../logic-functions/helper-functions';
import GridHeader from '../GridHeader';

const Grid = props => {
  const {
    grid,
    updateGrid,
    settings,
    createGrid,
    destroyGrid,
    activeCharacter,
    allCharacters,
    startTurn,
    nextMove,
    resetTurn,
    humanCharacters,
    aiCharacters,
  } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [animationProgress, setAnimationProgress] = useState(false);
  const [action, setAction] = useState();
  const [hoverCharacter, setHoverCharacter] = useState({});
  const [gameId, setGameId] = useState(null);

  const gameInProgress = useRef(false);

  // end game calculator
  useEffect(() => {
    if (allCharacters.length > 0) {
      if (aiCharacters.length < 1) {
        alert('You win!');
        endGame();
      }

      if (humanCharacters.length < 1) {
        alert('You lose!');
        endGame();
      }
    }
    // eslint-disable-next-line
  }, [allCharacters]);

  // update selected character
  useEffect(() => {
    if (activeCharacter && activeCharacter.name) {
      updateSelectedCharacter(grid.get(activeCharacter.index));
    }
    // eslint-disable-next-line
  }, [activeCharacter]);

  // start turn
  useEffect(() => {
    if (allCharacters.length === 0 && grid.size > 0) {
      startTurn(grid, gameId);
    }
    // eslint-disable-next-line
  }, [grid]);

  // ai turn calculator
  useEffect(() => {
    if (activeCharacter.player === 'ai' && selectedCharacter && selected) {
      const tileToMove = AiFunctions.calculateAiMove(
        grid,
        activeCharacter,
        humanCharacters
      );

      if (tileToMove || tileToMove === 0) {
        const searchResult = startSearch(grid.get(tileToMove));

        if (searchResult.path.length > 0) {
          setTimeout(() => {
            animateAndMove(
              searchResult.path,
              searchResult.attackResult,
              searchResult.defenderIndex
            );
          }, 1300);
        }
      } else {
        setTimeout(() => {
          setAction({
            selected: grid.getIn([selected]),
            skipped: true,
          });
          nextMoveCheck(grid, gameId);
        }, 500);
      }
    }

    // eslint-disable-next-line
  }, [selectedCharacter]);

  const updateGridCheck = (grid, gameIdd) => {
    if (gameInProgress.current) {
      updateGrid(grid, gameIdd);
    }
  };

  const nextMoveCheck = (grid, gameIdd) => {
    if (gameInProgress.current) {
      nextMove(grid, gameIdd);
    }
  };

  const startGame = () => {
    const gameId = Date.now();
    setGameId(gameId);
    gameInProgress.current = true;
    createGrid(settings, gameId);
    resetTurn(gameId);
  };

  const endGame = () => {
    gameInProgress.current = false;
    setAction();
    destroyGrid();
    resetTurn();
  };

  const skipTurn = () => {
    if (activeCharacter.player !== 'ai') {
      setAction({
        selected: grid.getIn([selected]),
        skipped: true,
      });
      nextMoveCheck(grid, gameId);
    }
  };

  const clearSelectedCharacter = () => {
    setIsSelected(false);
    setSelected(null);
    setSelectedCharacter({});
    updateGridCheck(GridHelper.clearPath(grid, gameId));
  };

  const updateSelectedCharacter = cell => {
    setIsSelected(true);
    setSelected(cell.index);
    setSelectedCharacter(cell.stats);
    updateGridCheck(GridHelper.clearPath(grid, gameId));
  };

  async function animateAndMove(path, attackResult, defenderIndex) {
    const isHit = attackResult && attackResult.attackResult.isHit;
    setAnimationProgress(true);

    updateGridCheck(
      grid.setIn(
        [selected, 'animation'],
        Animations.moveAnimationBuilder(path, 300, {
          attackResult,
          defender: grid.getIn([defenderIndex]),
        })
      ),
      gameId
    );

    const attackTime = attackResult ? 900 : 0;

    await waitFor(path.length * 300 + attackTime);
    clearSelectedCharacter();

    let newGrid = grid;

    newGrid = GridHelper.moveCharacter(
      newGrid,
      selectedCharacter,
      newGrid.get(path[path.length - 1].index)
    );

    let defender = attackResult ? newGrid.getIn([defenderIndex]) : null;

    if (defender) {
      newGrid = newGrid.setIn([defender.index, 'attack'], true);
    }

    if (isHit) {
      defender.stats.hp = attackResult.damageResult.hp;
      if (defender.stats.hp > 0) {
        newGrid = GridHelper.updateCharacter(newGrid, defender);
      } else {
        newGrid = GridHelper.clearTile(newGrid, defenderIndex);
      }
    }

    setAction({
      selected: grid.getIn([selected]),
      path,
      attackResult,
      defender,
    });

    updateGridCheck(newGrid, gameId);
    await waitFor(attackResult ? 500 : 0);
    setAnimationProgress(false);
    nextMoveCheck(newGrid, gameId);
  }

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected || animationProgress || activeCharacter.player === 'ai') {
      if (cell.fill !== 'C') {
        return;
      }
    } else {
      const searchResult = startSearch(cell);
      if (
        cell.fill !== 'X' &&
        searchResult.path.length > 0 &&
        searchResult.moveAllowed
      ) {
        animateAndMove(
          searchResult.path,
          searchResult.attackResult,
          searchResult.defenderIndex
        );
      }
    }
  };

  const startSearch = cell => {
    const result = GridHelper.startSearch(
      grid,
      selected,
      cell.index,
      selectedCharacter
    );

    let moveAllowed = false;
    let path = [];
    let attackResult = false;

    if (result && result.grid) {
      updateGridCheck(result.grid, gameId);
      path = result.result;
      attackResult = result.attackResult;
      moveAllowed = true;
    }

    return { moveAllowed, path, attackResult, defenderIndex: cell.index };
  };

  return (
    <StyledGridWrapper>
      <GridHeader
        grid={grid}
        selected={selected}
        startGame={startGame}
        endGame={endGame}
        skipTurn={skipTurn}
        gameInProgress={gameInProgress.current}
      />
      <StyledGrid empty={allCharacters.length === 0}>
        {allCharacters.length > 0
          ? grid.map(cell => {
              const cellSelected = cell.index === selected;
              return (
                <Cell
                  key={cell.index}
                  cell={cell}
                  selected={cellSelected}
                  onClick={() => {
                    onClick(cell);
                  }}
                  onMouseEnter={() => {
                    if (
                      cell &&
                      cell.stats &&
                      cell.stats.name &&
                      cell.stats.player
                    ) {
                      setHoverCharacter(cell.stats);
                    } else {
                      setHoverCharacter({});
                    }
                    isSelected &&
                      !animationProgress &&
                      activeCharacter.player !== 'ai' &&
                      startSearch(cell);
                  }}
                />
              );
            })
          : null}
      </StyledGrid>

      <Sidebar
        action={action}
        gameInProgress={gameInProgress.current}
        activeCharacter={activeCharacter}
        hoverCharacter={hoverCharacter}
      />
    </StyledGridWrapper>
  );
};

Grid.propTypes = {
  updateGrid: PropTypes.func.isRequired,
  grid: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  createGrid: PropTypes.func.isRequired,
  destroyGrid: PropTypes.func.isRequired,
  activeCharacter: PropTypes.object,
  allCharacters: PropTypes.array.isRequired,
  startTurn: PropTypes.func.isRequired,
  nextMove: PropTypes.func.isRequired,
  resetTurn: PropTypes.func.isRequired,
  humanCharacters: PropTypes.array,
  aiCharacters: PropTypes.array,
};

Grid.defaultProps = {
  activeCharacter: null,
  humanCharacters: [],
  aiCharacters: [],
};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
  settings: state.ConfigReducer.settings,
  turnInfo: state.TurnReducer.turnInfo,
  activeCharacter: state.TurnReducer.turnInfo.get('activeCharacter'),
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
  humanCharacters: state.TurnReducer.turnInfo.get('humanCharacters'),
  aiCharacters: state.TurnReducer.turnInfo.get('aiCharacters'),
});

const mapDispatchToProps = dispatch => ({
  updateGrid: (grid, gameId) => dispatch(GridActions.updateGrid(grid, gameId)),
  createGrid: (settings, gameId) =>
    dispatch(GridActions.createGrid(settings, gameId)),
  destroyGrid: () => dispatch(GridActions.destroyGrid()),
  startTurn: (grid, gameId) => dispatch(TurnActions.startTurn(grid, gameId)),
  nextMove: (grid, gameId) => dispatch(TurnActions.nextMove(grid, gameId)),
  resetTurn: () => dispatch(TurnActions.resetTurn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
