import React from "react";
import { connect } from "react-redux";
import { GridActions } from "../../actions";

const Battle = props => {
  return (
    <div>
      <h1>Battle</h1>

      <div>
        {props.grid.map(cell => (
          <span key={cell.index}>{cell.index}</span>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  grid: state.GridReducer.grid,
});

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(GridActions.GRID_TEST()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
