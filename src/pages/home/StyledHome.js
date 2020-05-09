import styled from 'styled-components';
import { colors, boxShadow, borderRadius, fonts } from '../../theme';

export const StyledHome = styled.div`
  min-height: calc(100vh - 200px);
  background-color: ${colors.whiteTransparent};
  border-radius: ${borderRadius.large};
  box-shadow: ${boxShadow.standard};
  display: flex;
  flex-direction: column;
  padding: 10px;
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

  p {
      margin-top: 20px;
      font-size: 22px;
      font-family: ${fonts.bold};
  }
`;
