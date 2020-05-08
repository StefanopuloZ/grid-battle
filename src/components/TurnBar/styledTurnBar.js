import styled from 'styled-components';
import { colors, boxShadow, borderRadius, fonts } from '../../theme';
import {
  StyledCellContent,
  StyledIndicator,
  StyledCellContentWrapper,
} from '../CellContent/styledCellContent';
import { Animations } from '../../logic-functions';

const getAnimation = moved => {
  if (moved === 'first') {
    return [Animations.first, '800ms ease-in forwards'];
  } else if (moved === 'last') {
    return [Animations.last, '300ms ease-in forwards'];
  } else {
    return '';
  }
};

export const StyledTitle = styled.div`
  padding: 0 5px 0 10px;
  line-height: 1.3;
  font-weight: bold;
  font-size: 14px;
  width: 60px;
  min-width: 60px;
  font-family: ${fonts.bold};
`;

export const StyledTurnBar = styled.div`
  display: flex;
  border: 1px solid darkgray;
  width: 66.6%;
  align-items: center;
  height: 60px;
  overflow-x: auto;
  overflow-y: hidden;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.glassTransparent};

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px !important;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${colors.gray};
    box-shadow: ${boxShadow.standard};
  }
`;

export const StyledTBCellContent = styled(StyledCellContent)``;

export const StyledTBIndicator = styled(StyledIndicator)``;

export const StyledTBContentWrapper = styled(StyledCellContentWrapper)`
  width: 50px;
  min-width: 50px;
  height: 50px;
  animation: '';
  animation: ${props => getAnimation(props.moved)[0]} ${props =>
  getAnimation(props.moved)[1]};
`;
