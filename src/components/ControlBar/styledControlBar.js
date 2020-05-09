import styled from 'styled-components';
import { colors, boxShadow, borderRadius, media } from '../../theme';

export const StyledControlBarWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;

  @media ${media.medium} {
    width: 33.3%;
    padding-bottom: 0;
    padding-left: 10px;
  }
`;

export const StyledControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.glass};

  @media ${media.medium} {
    height: 60px;
  }
`;
