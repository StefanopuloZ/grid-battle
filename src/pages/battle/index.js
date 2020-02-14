import React from 'react';
import { connect } from 'react-redux';
import { GridActions } from '../../actions';
import PropTypes from 'prop-types';
import Cell from '../../components/Cell';
import Grid from '../../components/Grid';

const Battle = props => {
  return (
    <div>
      <h1>Battle</h1>

      <Grid>
        {props.grid.map(cell => (
          <Cell key={cell.index} cell={cell} />
        ))}
      </Grid>
    </div>
  );
};

Element.propTypes = {
  gird: PropTypes.object.isRequired,
};

Element.defaultProps = {
};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid
});

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(GridActions.GRID_TEST())
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
