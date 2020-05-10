import styled from 'styled-components';
import { StyledHome } from '../home/StyledHome';
import { colors, boxShadow, borderRadius, fonts } from '../../theme';

export const StyledAbout = styled(StyledHome)`
  p {
      margin-top: 10px;
      line-height: 1.4;
      font-size: 18px;
      font-family: ${fonts.regular};
      text-align: left;
  }
`;
