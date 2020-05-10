import React from 'react';
import { StyledAbout } from './styledAbout';
import { StyledContainer } from '../../components/StyledContainer';

const Help = props => {
  return (
    <StyledContainer>
      <StyledAbout>
        <h2>About</h2>
        <p>
          Grid Battle is a single page app built in React.js. Main intent was
          fun, learning and challange of building something like this as well as
          to showcase that limits are mostly a little bit farther away then we
          initially make them out to be. And love for good old turn-based games. ;)
          <br />
          As my job as a Frontend developer would not allow me to dedicate as
          much time as I would like to continue and implement everything, I have
          decided to leave it at a state where most of the goals defined at the
          start have been achivied.
          <br />
        </p>
        Main technologies used:
        <ul>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Styled Components</li>
          <li>Github pages</li>
        </ul>
        <p>If you want to check out code-base and know more here is a link to repo: asdasd</p>
      </StyledAbout>
    </StyledContainer>
  );
};

export default Help;
