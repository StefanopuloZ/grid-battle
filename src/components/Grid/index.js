import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledGrid from './styledGrid';
import { GridActions } from '../../actions';
import Cell from '../Cell';
import { GridHelper, Animations } from '../../helper-functions';
import AudioComponent from '../AudioComponent';
import Sounds from '../../assets/sounds';

const Grid = props => {
  let { grid, updateGrid } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [animationProgress, setAnimationProgress] = useState(false);
  const [playWalkingSound, setPlayWalkingSound] = useState(false);

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

  async function animateAndMove(path) {
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
    updateGrid(
      GridHelper.moveCharacter(
        grid,
        selectedCharacter,
        grid.get(path[path.length - 1].index),
      ),
    );
    setAnimationProgress(false);
  }

  const onClick = cell => {
    console.log('cell', cell);

    if (!isSelected) {
      if (cell.fill !== 'C') {
        return;
      }
      updateSelectedCharacter(cell);
    } else {
      if (selected === cell.index) {
        clearSelectedCharacter();
      } else {
        const searchResult = startSearch(cell);
        if (cell.fill !== 'X' && searchResult.path.length > 0 && searchResult.moveAllowed) {
          console.log('attackResult', searchResult.possibleAttack);
          animateAndMove(searchResult.path);
        }
      }
    }
  };

  const startSearch = (cell, check) => {
    const result = GridHelper.startSearch(
      grid,
      selected,
      cell.index,
      selectedCharacter,
    );

    let moveAllowed = false;
    let path = [];
    let possibleAttack = false;
    
    if (result && result.grid) {
      updateGrid(result.grid);
      // setPath(result.result);
      path = result.result;
      possibleAttack = result.attackResult;
      moveAllowed = true;
    }

    return {moveAllowed, path, possibleAttack};
  };

  return (
    <StyledGrid>
      {playWalkingSound && (
        <AudioComponent url={Sounds.walking} />
      )}
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
  );
};

Element.propTypes = {
  children: PropTypes.element.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(GridActions.updateGrid(grid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
