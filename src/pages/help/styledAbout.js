import styled from 'styled-components';
import { StyledHome } from '../home/StyledHome';
import { fonts } from '../../theme';

export const StyledAbout = styled(StyledHome)`
  text-align: left;
  font-size: 16px;

  p {
    margin-top: 10px;
    line-height: 1.4;
    font-size: 16px;
    font-family: ${fonts.regular};
    text-align: left;
  }
`;
