### REACT GRID BATTLE

## About:

Hello, there! Grid Battle is a snapshot of fantasy setting turn-based battle in a square grid. It is not meant to be a full game (not yet at least), but more of a showcase what can be done in React with a lot of work and a little bit of imagination. This project was done in free time aside from my regular job as a Fronted developer. Currently, most of the features I have set out to do in the begining are complete so I decided to put it here for everyone to see and, hopefully, have a bit of fun. Code base is free to be used. I have used React.js 16.10.2 with Styled Components library for css. No other graphical library has been used.


## Rules:

Rules are just loosely based on Dungeons and Dragons d20 system. d20 means that each attack generates a number in 1-20 range which is equivalent to the tweanty sided die roll. I have chosen this system as my times being DM (Dungeon Master) are something that brings good memories of long daily sessions with a lot of fun. So how does it work?

- HP: Characters hit points. Once this goes to 0 or less character is dead.
- AC: Armor Class. Number that represents characters defense. If attack roll with bonuses equals to or is greater then this number there is a HIT and damage will be rolled.
- Damage: Once character is hit, attacking characters rolls damage in said damage range. (1-6) for example and deducts that from hp.
- Attack: Bonus that is added to 1d20 roll and compared against targets AC to calculate if a HIT is being made.
- Speed: How far character can move
- Initiative: Characters with greater initiative will act before


## Features:

- Working AI with assigned weight system for each move
- Random map generation and character placement
- Custom attack and movement animations
- Complete basic battle system with rules