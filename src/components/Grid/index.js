import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledGrid, StyledGridWrapper } from './styledGrid';
import { GridActions } from '../../actions';
import { GridHelper, Animations } from '../../logic-functions';
import Cell from '../Cell';
import Sidebar from '../Sidebar';
import AudioComponent from '../AudioComponent';
import Sounds from '../../assets/sounds';

const Grid = props => {
  let { grid, updateGrid, settings, createGrid, destroyGrid } = props;

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
  }

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected || animationProgress) {
      if (cell.fill !== 'C') {
        return;
      }
      updateSelectedCharacter(cell);
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

Element.propTypes = {
  children: PropTypes.element.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
  settings: state.ConfigReducer.settings,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
  createGrid: settings => dispatch(GridActions.createGrid(settings)),
  destroyGrid: () => dispatch(GridActions.destroyGrid()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
