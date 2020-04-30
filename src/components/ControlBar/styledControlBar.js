import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../theme';

export const StyledControlBarWrapper = styled.div`
  width: 33.3%;
  padding-left: 10px;
`;

export const StyledControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.glass};
`;
