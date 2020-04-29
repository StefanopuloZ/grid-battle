import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderWrapper, HeaderList } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import { StyledLink } from './StyledLink';
import routes from '../../App/routes';

const Header = props => {
  let location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <StyledContainer>
        <nav>
          <HeaderList>
            <Link to={routes.home}>
              <StyledLink selected={location === routes.home}>Home</StyledLink>
            </Link>
            <Link to={routes.battle}>
              <StyledLink selected={location === routes.battle}>Battle</StyledLink>
            </Link>
            <Link to={routes.about}>
              <StyledLink selected={location === routes.about}>About</StyledLink>
            </Link>
          </HeaderList>
        </nav>
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
