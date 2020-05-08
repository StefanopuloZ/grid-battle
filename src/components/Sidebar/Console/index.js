import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledConsole from './styledConsole';

const playerColors = {
  human: 'green',
  ai: 'red',
};

const Console = props => {
  const { action, gameInProgress } = props;

  const [actions, setActions] = useState([]);

  useEffect(() => {
    if (action && gameInProgress) {
      let story = '';
      const playerColor = playerColors[action.selected.stats.player];
      const skipped = action.skipped;
      const character = action.selected.stats;
      const path = action.path;
      const defender = action.defender ? action.defender.stats : null;
      const attackResult = action.attackResult
        ? action.attackResult.attackResult
        : null;
      const damageResult = action.attackResult
        ? action.attackResult.damageResult
        : null;

      if (skipped) {
        story += `<span style='color: ${playerColor};'>${character.name}</span> SKIPPED turn `;
      } else {
        if (path.length - 1 > 0) {
          story += `<span style='color: ${playerColor};'>${
            character.name
          }</span> moved ${path.length - 1} tile${
            path.length - 1 > 1 ? 's' : ''
          }${action.defender ? '<br>' : ''}`;
        }

        if (action.defender) {
          story += `<span style='color: ${playerColor};'>${character.name}</span> attacked <span style='color: ${playerColors[defender.player]};'>${defender.name}</span><br>`;
          story += `${character.name} rolled ${attackResult.attack} 1d20(${
            attackResult.attackRoll
          }) + ${attackResult.attackBonus} vs. AC:${
            attackResult.defenderAC
          } and ${
            attackResult.isHit
              ? `<span style='color: purple;'>${
                  damageResult.isDead ? 'KILLED!' : 'HIT!'
                } for ${damageResult.damage} damage.</span>`
              : `<span style='color: purple;'>MISSED!</span>`
          }`;
        }
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
        <p key={index} dangerouslySetInnerHTML={{ __html: action }} />
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
