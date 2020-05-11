import styled from 'styled-components';
import { colors, boxShadow, borderRadius, fonts } from '../../theme';

export const StyledHome = styled.div`
  min-height: calc(100vh - 200px);
  background-color: ${colors.whiteTransparent};
  border-radius: ${borderRadius.large};
  box-shadow: ${boxShadow.standard};
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  padding-bottom: 40px;
  margin-bottom: -12px;

  h1 {
    margin-top: 80px;
    font-size: 42px;
    text-align: center;
    width: 100%;
    font-family: ${fonts.bold};
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 20px;
    font-size: 36px;
    text-align: center;
    width: 100%;
    font-family: ${fonts.bold};
    margin-bottom: 40px;
  }

  h3 {
    margin-top: 30px;
    font-size: 24px;
    text-align: center;
    width: 100%;
    font-family: ${fonts.bold};
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    font-size: 22px;
    font-family: ${fonts.bold};
  }

  ul {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.4;
    list-style: circle;
    margin-left: 40px;
  }

  a {
    color: ${colors.blue};
    border-radius: ${borderRadius.standard};
    cursor: pointer;
    box-shadow: ${boxShadow.standardInset}, 0 0 0 rgba(255, 255, 255, 0);
    display: inline-block;
    padding: 0 4px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${boxShadow.standard};
      color: ${colors.blue};
    }

    &:visited,
    &:focus {
      color: ${colors.blue};
    }
  }
`;
