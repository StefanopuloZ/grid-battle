import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyledGrid, StyledGridWrapper } from "./styledGrid";
import { GridActions, TurnActions } from "../../actions";
import { GridHelper, Animations, AiFunctions } from "../../logic-functions";
import Cell from "../Cell";
import Sidebar from "../Sidebar";
import AudioComponent from "../AudioComponent";
import Sounds from "../../assets/sounds";
import InforBar from "../InforBar";

const Grid = (props) => {
  let {
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
  } = props;

  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [animationProgress, setAnimationProgress] = useState(false);
  const [playWalkingSound, setPlayWalkingSound] = useState(false);
  const [action, setAction] = useState();

  useEffect(() => {
    createGrid(settings);

    return () => {
      resetTurn();
      destroyGrid();
    };
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
      console.log("startTurn");
    }
    // eslint-disable-next-line
  }, [grid]);

  // ai turn calculator
  useEffect(() => {
    if (activeCharacter.player === "ai" && selectedCharacter && selected) {
      console.log("aiTurn", grid, grid.get(1));

      const tileToMove = AiFunctions.calculateAiMove(
        grid,
        activeCharacter,
        humanCharacters
      );

      const searchResult = startSearch(grid.get(tileToMove));

      if (searchResult.path.length > 0) {
        setTimeout(() => {
          animateAndMove(
            searchResult.path,
            searchResult.attackResult,
            searchResult.defenderIndex
          );
        }, 300);
      } else {
        setTimeout(() => {
          nextMove(grid);
        }, 300);
      }
    }

    // eslint-disable-next-line
  }, [activeCharacter, selectedCharacter, selected]);

  const clearSelectedCharacter = () => {
    setIsSelected(false);
    setSelected(null);
    setSelectedCharacter({});
    updateGrid(GridHelper.clearPath(grid));
  };

  const updateSelectedCharacter = (cell) => {
    setIsSelected(true);
    setSelected(cell.index);
    setSelectedCharacter(cell.stats);
    updateGrid(GridHelper.clearPath(grid));
  };

  const waitFor = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  async function animateAndMove(path, attackResult, defenderIndex) {
    const isHit = attackResult && attackResult.attackResult.isHit;
    setPlayWalkingSound(true);
    setAnimationProgress(true);

    updateGrid(
      grid.setIn(
        [selected, "animation"],
        Animations.moveAnimationBuilder(path, "move", 300)
      )
    );

    await waitFor(path.length * 300);
    clearSelectedCharacter();
    setPlayWalkingSound(false);

    let newGrid = grid;

    newGrid = GridHelper.moveCharacter(
      newGrid,
      selectedCharacter,
      newGrid.get(path[path.length - 1].index)
    );

    let defender = attackResult ? newGrid.getIn([defenderIndex]) : null;

    if (defender) {
      newGrid = newGrid.setIn([defender.index, "attack"], true);
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

    updateGrid(newGrid);
    await waitFor(attackResult ? 500 : 0);
    setAnimationProgress(false);
    nextMove(newGrid);
  }

  const onClick = (cell) => {
    console.log("cell", cell);

    if (!isSelected || animationProgress || activeCharacter.player === "ai") {
      if (cell.fill !== "C") {
        return;
      }
    } else {
      const searchResult = startSearch(cell);
      if (
        cell.fill !== "X" &&
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

  const startSearch = (cell) => {
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
        {grid.map((cell) => {
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
                isSelected &&
                  !animationProgress &&
                  activeCharacter.player !== "ai" &&
                  startSearch(cell);
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
  grid: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  createGrid: PropTypes.func.isRequired,
  destroyGrid: PropTypes.func.isRequired,
  activeCharacter: PropTypes.object,
  allCharacters: PropTypes.array.isRequired,
  startTurn: PropTypes.func.isRequired,
  nextMove: PropTypes.func.isRequired,
  resetTurn: PropTypes.func.isRequired,
};

Grid.defaultProps = {
  activeCharacter: null,
};

const mapStateToProps = (state) => ({
  grid: state.GridReducer.grid,
  settings: state.ConfigReducer.settings,
  turnInfo: state.TurnReducer.turnInfo,
  activeCharacter: state.TurnReducer.turnInfo.get("activeCharacter"),
  allCharacters: state.TurnReducer.turnInfo.get("allCharacters"),
  humanCharacters: state.TurnReducer.turnInfo.get("humanCharacters"),
});

const mapDispatchToProps = (dispatch) => ({
  updateGrid: (grid) => dispatch(GridActions.updateGrid(grid)),
  createGrid: (settings) => dispatch(GridActions.createGrid(settings)),
  destroyGrid: () => dispatch(GridActions.destroyGrid()),
  startTurn: (grid) => dispatch(TurnActions.startTurn(grid)),
  nextMove: (grid) => dispatch(TurnActions.nextMove(grid)),
  resetTurn: () => dispatch(TurnActions.resetTurn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
