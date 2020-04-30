import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledCell, StyledCellContent } from './styledCell';
import CellContent from '../CellContent';
import AudioComponent from '../AudioComponent';
import Sounds from '../../assets/sounds';

const Cell = props => {
  const { columns, cell, selected, onClick, onMouseEnter } = props;
  const [playClickSound, setPlayClickSound] = useState(false);
  const sound = cell.stats ? cell.stats.sound : '';

  const basis = 100 / columns + '%';
  let fill = '';
  if (cell.fill === 'S') {
    fill = 'lightgreen';
  } else if (cell.fill === 'X') {
    fill = 'brown';
  }

  return (
    <StyledCell basis={basis} fill={fill} image={cell.terrain}>
      {playClickSound && sound && selected && (
        <AudioComponent url={Sounds[sound]} />
      )}
      <StyledCellContent
        onClick={() => {
          onClick();
          setPlayClickSound(true);
        }}
        selected={selected}
        onMouseEnter={onMouseEnter}
        path={cell.path}
      >
        <CellContent cell={cell} selected={selected} />
      </StyledCellContent>
    </StyledCell>
  );
};

Cell.propTypes = {
  cell: PropTypes.object,
  columns: PropTypes.number.isRequired,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

Cell.defaultProps = {
  cell: {},
  selected: false,
};

const mapStateToProps = state => ({
  columns: state.ConfigReducer.settings.columns,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
