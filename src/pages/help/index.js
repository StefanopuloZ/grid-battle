import React from 'react';
import { StyledAbout } from './styledAbout';
import { StyledContainer } from '../../components/StyledContainer';

const Help = props => {
  return (
    <StyledContainer>
      <StyledAbout>
        <h3>About:</h3>
        <p>
          Hello, there! Grid Battle is a snapshot of fantasy setting turn-based
          battle in a square grid. It is not meant to be a full game (not yet at
          least), but more of a showcase what can be done in React with a lot of
          work and a little bit of imagination. This project was done in free
          time aside from my regular job as a Fronted developer. Currently, most
          of the features I have set out to do in the begining are complete so I
          decided to put it here for everyone to see and, hopefully, have a bit
          of fun. Code base is free to be inspected and used in my{' '}
          <a
            href="https://github.com/StefanopuloZ/grid-battle"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>{' '}
          where you can find adittional technical info as well. Here, I will
          state that I have used
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            React.js 16.10.2
          </a>{' '}
          with{' '}
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
          library for css. No other graphical library has been used.
        </p>
        <h3>Rules:</h3>
        <p>
          Rules are just loosely based on Dungeons and Dragons d20 system. d20
          means that each attack generates a number in 1-20 range which is
          equivalent to the tweanty sided die roll. I have chosen this system as
          my times being DM (Dungeon Master) are something that brings good
          memories of long daily sessions with a lot of fun. So how does it
          work?
        </p>
        <ul>
          <li>
            HP: Characters hit points. Once this goes to 0 or less character is
            dead.
          </li>
          <li>
            AC: Armor Class. Number that represents characters defense. If
            attack roll with bonuses equals to or is greater then this number
            there is a HIT and damage will be rolled.
          </li>
          <li>
            Damage: Once character is hit, attacking characters rolls damage in
            said damage range. (1-6) for example and deducts that from hp.
          </li>
          <li>
            Attack: Bonus that is added to 1d20 roll and compared against
            targets AC to calculate if a HIT is being made.
          </li>
          <li>Speed: How far character can move</li>
          <li>
            Initiative: Characters with greater initiative will act before
          </li>
        </ul>
        <h3>Features:</h3>
        <ul>
          <li>Working AI with assigned weight system for each move</li>
          <li>Random map generation and character placement</li>
          <li>Custom attack and movement animations</li>
          <li>Complete basic battle system with rules</li>
        </ul>
      </StyledAbout>
    </StyledContainer>
  );
};

export default Help;
