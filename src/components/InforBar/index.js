import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledInfoBar } from './styledInfoBar';
import { TurnFunctions } from '../../logic-functions';
import { TurnActions } from '../../actions';

const InfoBar = props => {
  const { turnInfo, grid, updateTurnInfo } = props;

  useEffect(() => {
    if (grid) {
      const characters = TurnFunctions.findCharacters(grid);
      console.log('characters', characters);
    }
  }, [grid]);

  console.log('turnInfo', turnInfo);

  return (
    <StyledInfoBar>
      <div>Info Bar</div>
    </StyledInfoBar>
  );
};

Element.propTypes = {
  grid: PropTypes.object.isRequired,
  turnInfo: PropTypes.func.isRequired,
  updateTurnInfo: PropTypes.func.isRequired,
};

Element.defaultProps = {};

const mapStateToProps = state => ({
  turnInfo: state.TurnReducer,
});

const mapDispatchToProps = dispatch => ({
  updateTurnInfo: turnInfo => dispatch(TurnActions.updateTurnInfo(turnInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
