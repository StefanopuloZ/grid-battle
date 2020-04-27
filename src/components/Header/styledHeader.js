import styled from 'styled-components';
import { colors, boxShadow, media, borderRadius } from '../../theme';

export const HeaderWrapper = styled.div`
  box-shadow: ${boxShadow.large};
  border-radius: ${borderRadius.large};
  position: relative;
  top: -20px;
  padding: 30px 10px 10px 10px;
  background-color: ${colors.whiteTransparent};
  max-height: 142px;
  padding-bottom: 0;

  @media ${media.small} {
    max-height: 96px;
    padding-bottom: 10px;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media ${media.small} {
    flex-wrap: nowrap;
  }
`;
