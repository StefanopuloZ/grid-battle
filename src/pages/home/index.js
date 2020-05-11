import React from 'react';
import { StyledHome } from './StyledHome';
import { StyledContainer } from '../../components/StyledContainer';

const Home = props => {
  return (
    <StyledContainer>
      <StyledHome>
        <h1>React.js Grid Battle</h1>
        <p>Welcome!</p>
        <p>Battle against AI in a procedurally generated maps.</p>
      </StyledHome>
    </StyledContainer>
  );
};

export default Home;
