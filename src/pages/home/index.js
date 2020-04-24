import React from 'react';
import { StyledHome } from './StyledHome';
import { StyledContainer } from '../../components/StyledContainer';

const Home = props => {
  return (
    <StyledContainer>
      <StyledHome>
        <h1>Home page</h1>
      </StyledHome>
    </StyledContainer>
  );
};

export default Home;
