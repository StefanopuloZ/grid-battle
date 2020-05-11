import styled from 'styled-components';
import { colors } from '../../theme';

export const StyledHpOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  z-index: 99999;
  overflow: hidden;
`;

export const StyledHpOverlayFill = styled.div`
  flex: 1;
  background-color: ${props =>
    props.fill ? colors.redTransparent : 'transparent'};
`;
