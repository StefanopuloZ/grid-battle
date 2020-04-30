import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderWrapper, HeaderList } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import Button from '../Button';

const Header = props => {
  let location = useLocation().pathname;

  return (
    <HeaderWrapper>
      <StyledContainer>
        <nav>
          <HeaderList>
            <Link to={routes.home}>
              <Button
                type={'primary'}
                disabled={location === routes.home}
                text={'Home'}
              />
            </Link>
            <Link to={routes.battle}>
              <Button
                type={'primary'}
                disabled={location === routes.battle}
                text={'Battle'}
              />
            </Link>
            <Link to={routes.about}>
              <Button
                type={'primary'}
                disabled={location === routes.about}
                text={'About'}
              />
            </Link>
          </HeaderList>
        </nav>
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
