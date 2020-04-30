import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledConsole from './styledConsole';

const Console = props => {
  const { action, gameInProgress } = props;

  const [actions, setActions] = useState([]);

  useEffect(() => {
    if (action && gameInProgress) {
      let story = '';
      const character = action.selected.stats;
      const index = action.selected.index;
      const path = action.path;
      const defender = action.defender ? action.defender.stats : null;
      const defenderIndex = action.defender ? action.defender.index : null;
      const attackResult = action.attackResult
        ? action.attackResult.attackResult
        : null;
      const damageResult = action.attackResult
        ? action.attackResult.damageResult
        : null;

      story += `<span style='color: purple;'>${character.name}</span>(speed:${character.speed -
        1}) moved for ${path.length - 1} tiles from tile-${index} to tile-${
        path[path.length - 1].index
      }`;

      if (action.defender) {
        story += `<span style='color: purple;'>${character.name}</span> attacked <span style='color: teal;'>${defender.name}</span> at tile-${defenderIndex}<br>`;
        story += `${character.name} rolled ${attackResult.attack} 1d20(${
          attackResult.attackRoll
        }) + ${attackResult.attackBonus} vs. AC:${
          attackResult.defenderAC
        } and ${
          attackResult.isHit
            ? `<span style='color: red;'>${damageResult.isDead ? 'KILLED!' : 'HIT!'} for ${damageResult.damage} damage.</span>`
            : `<span style='color: red;'>MISSED!</span>`
        }`;
      }

      story += '<br><br>';

      setActions([story, ...actions]);
    } else {
      setActions([]);
    }
    // eslint-disable-next-line
  }, [action]);

  return (
    <StyledConsole>
      {actions.map((action, index) => (
        <p key={index} dangerouslySetInnerHTML={{__html: action}} />
      ))}
    </StyledConsole>
  );
};

Console.propTypes = {
  action: PropTypes.object,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  gameInProgress: PropTypes.bool.isRequired,
};

Console.defaultProps = {
  selected: false,
  action: {},
};

export default Console;
