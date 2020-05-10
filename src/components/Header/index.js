import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderList } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import Button from '../Button';

const Header = props => {
  const { allCharacters } = props;

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmationRoute, setConfirmationRoute] = useState('');

  const location = useLocation().pathname;
  const gameInProgress = allCharacters.length > 0;

  const confirmPageChange = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <HeaderWrapper>
      <StyledContainer>
        <nav>
          <HeaderList>
            {!showConfirm ? (
              <>
                <Link
                  to={routes.home}
                  onClick={e => {
                    if (gameInProgress) {
                      e.preventDefault();
                      setConfirmationRoute(routes.home);
                      confirmPageChange();
                    }
                  }}
                >
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
                <Link
                  to={routes.about}
                  onClick={e => {
                    if (gameInProgress) {
                      e.preventDefault();
                      setConfirmationRoute(routes.about);
                      confirmPageChange();
                    }
                  }}
                >
                  <Button
                    type={'primary'}
                    disabled={location === routes.about}
                    text={'About'}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={confirmationRoute}
                  onClick={() => {
                    confirmPageChange();
                  }}
                >
                  <Button type={'primary'} text={'Confirm'} />
                </Link>
                <div>This will end current game. Proceed?</div>
                <Button
                  type={'primary'}
                  text={'Cancel'}
                  func={() => {
                    confirmPageChange();
                  }}
                />
              </>
            )}
          </HeaderList>
        </nav>
      </StyledContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  allCharacters: PropTypes.array,
};

Header.defaultProps = {
  allCharacters: [],
};

const mapStateToProps = state => ({
  allCharacters: state.TurnReducer.turnInfo.get('allCharacters'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
