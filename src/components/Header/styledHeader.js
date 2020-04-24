import styled from "styled-components";
import { colors, boxShadow, borderRadius, media } from "../../theme";

export const HeaderWrapper = styled.div`
  box-shadow: ${boxShadow.large};
  border-radius: 20px;
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

  li {
    padding: 10px 40px;
    background-color: ${colors.white};
    min-width: 100px;
    border-radius: ${borderRadius.standard};
    box-shadow: ${boxShadow.standardInset}, 0 0 0 rgba(255, 255, 255, 0);
    transition: all 300ms ease-in-out;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${boxShadow.standard};
      font-size: 17px;
    }

    @media ${media.small} {
      margin-bottom: 0;
    }
  }
`;
