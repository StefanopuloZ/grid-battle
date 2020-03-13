import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledGrid, StyledGridWrapper } from './styledGrid';
import { GridActions, TurnActions } from '../../actions';
import { GridHelper, Animations, TurnFunctions } from '../../logic-functions';
import Cell from '../Cell';
import Sidebar from '../Sidebar';
import AudioComponent from '../AudioComponent';
import Sounds from '../../assets/sounds';
import InforBar from '../InforBar';

const Grid = props => {
  let {
    grid,
    updateGrid,
    settings,
    createGrid,
    destroyGrid,
    activeCharacter,
    updateTurnInfo,
    allCharacters,
    turnInfo,
    startTurn,
  } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [animationProgress, setAnimationProgress] = useState(false);
  const [playWalkingSound, setPlayWalkingSound] = useState(false);
  const [action, setAction] = useState();

  useEffect(() => {
    createGrid(settings);

    return () => destroyGrid();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (activeCharacter && activeCharacter.name) {
      updateSelectedCharacter(grid.get(activeCharacter.index));
    }
    // eslint-disable-next-line
  }, [activeCharacter]);

  useEffect(() => {
    if (allCharacters.length === 0 && grid.size > 0) {
      startTurn(grid);
      console.log('startTurn');
      // const characters = TurnFunctions.findCharactersSorted(grid);
      // let newTurnInfo = turnInfo.setIn(['allCharacters'], characters.allCharacters);
      // newTurnInfo = newTurnInfo.setIn(['activeCharacter'], characters.allCharacters[0]);
      // updateTurnInfo(newTurnInfo);
    }

    // eslint-disable-next-line
  }, [grid]);

  const clearSelectedCharacter = () => {
    setIsSelected(false);
    setSelected(null);
    setSelectedCharacter({});
    updateGrid(GridHelper.clearPath(grid));
  };

  const updateSelectedCharacter = cell => {
    setIsSelected(true);
    setSelected(cell.index);
    setSelectedCharacter(cell.stats);
    updateGrid(GridHelper.clearPath(grid));
  };

  const waitFor = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  async function animateAndMove(path, attackResult, defenderIndex) {
    setPlayWalkingSound(true);
    setAnimationProgress(true);

    updateGrid(
      grid.setIn(
        [selected, 'animation'],
        Animations.moveAnimationBuilder(path, 'move', 300),
      ),
    );

    await waitFor(path.length * 300);
    clearSelectedCharacter();
    setPlayWalkingSound(false);

    let newGrid = grid;

    newGrid = GridHelper.moveCharacter(
      newGrid,
      selectedCharacter,
      newGrid.get(path[path.length - 1].index),
    );

    let defender = attackResult ? newGrid.getIn([defenderIndex]) : null;

    if (defender) {
      newGrid = newGrid.setIn([defender.index, 'attack'], true);
    }

    if (attackResult && attackResult.attackResult.isHit) {
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

    updateGrid(newGrid);
    setAnimationProgress(false);
    let newAllCharacters = TurnFunctions.findCharacters(newGrid).allCharacters;
    let newTurnInfo = turnInfo.setIn(
      ['allCharacters'],
      TurnFunctions.setNextCharacter(newAllCharacters),
    );
    newTurnInfo = newTurnInfo.setIn(['activeCharacter'], newAllCharacters[0]);
    updateTurnInfo(newTurnInfo);
  }

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected || animationProgress) {
      if (cell.fill !== 'C') {
        return;
      }
      // updateSelectedCharacter(cell);
    } else {
      if (selected === cell.index) {
        clearSelectedCharacter();
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
            searchResult.defenderIndex,
          );
        }
      }
    }
  };

  const startSearch = cell => {
    const result = GridHelper.startSearch(
      grid,
      selected,
      cell.index,
      selectedCharacter,
    );

    let moveAllowed = false;
    let path = [];
    let attackResult = false;

    if (result && result.grid) {
      updateGrid(result.grid);
      path = result.result;
      attackResult = result.attackResult;
      moveAllowed = true;
    }

    return { moveAllowed, path, attackResult, defenderIndex: cell.index };
  };

  return (
    <StyledGridWrapper>
      <InforBar grid={grid} />
      <StyledGrid>
        {playWalkingSound && <AudioComponent url={Sounds.walking} />}
        {grid.map(cell => {
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
                isSelected && !animationProgress && startSearch(cell);
              }}
            />
          );
        })}
      </StyledGrid>

      <Sidebar action={action} />
    </StyledGridWrapper>
  );
};

Grid.propTypes = {
  updateGrid: PropTypes.func.isRequired,
};

Grid.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
  settings: state.ConfigReducer.settings,
  turnInfo: state.TurnReducer.turnInfo,
  activeCharacter: state.TurnReducer.turnInfo.get('activeCharacter'),
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
  createGrid: settings => dispatch(GridActions.createGrid(settings)),
  destroyGrid: () => dispatch(GridActions.destroyGrid()),
  startTurn: grid => dispatch(TurnActions.startTurn(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
