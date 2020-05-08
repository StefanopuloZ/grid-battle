import React from 'react';
import PropTypes from 'prop-types';
import { StyledHpOverlay, StyledHpOverlayFill } from './styledHpOverlay';

const HpOverlay = props => {
  const { hp, maxHp } = props;
  const array = [];
  const difference = maxHp - hp;

  for (let i = 0; i < maxHp; i++) {
    const fill = difference > i ? 'true' : '';
    array.unshift(<StyledHpOverlayFill key={i} fill={fill} />);
  }

  return <StyledHpOverlay>{array}</StyledHpOverlay>;
};

HpOverlay.propTypes = {
  hp: PropTypes.number.isRequired,
  maxHp: PropTypes.number.isRequired,
};

HpOverlay.defaultProps = {};

export default HpOverlay;
