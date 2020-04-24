import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../theme';

export const HeaderWrapper = styled.div`
  box-shadow: ${boxShadow.large};
  border-radius: 20px;
  position: relative;
  top: -20px;
  padding: 30px 10px 10px 10px;
  background-color: ${colors.whiteTransparent};
  max-height: 96px;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
      padding: 10px 40px;
      background-color: ${colors.white};
      min-width: 100px;
      border-radius: ${borderRadius.standard};
      box-shadow: ${boxShadow.standardInset}, 0 0 0 rgba(255, 255, 255, 0);
      transition: all 300ms ease-in-out;
      cursor: pointer;

      &:hover {
          box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${boxShadow.standard};
          font-size: 17px;
      }
  }
`;
