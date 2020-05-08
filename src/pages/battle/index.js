import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import { GridActions, TurnActions } from '../../actions';
import { StyledContainer } from '../../components/StyledContainer';

const Battle = props => {
  const { destroyGrid, resetTurn } = props;

  useEffect(() => {
    destroyGrid();
    resetTurn();

    return function cleanUp() {
      destroyGrid();
      resetTurn();
    };
  });

  return (
    <StyledContainer>
      <Grid />
    </StyledContainer>
  );
};

Battle.propTypes = {
  destroyGrid: PropTypes.func.isRequired,
  resetTurn: PropTypes.func.isRequired,
};

Battle.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  destroyGrid: () => dispatch(GridActions.destroyGrid()),
  resetTurn: () => dispatch(TurnActions.resetTurn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
