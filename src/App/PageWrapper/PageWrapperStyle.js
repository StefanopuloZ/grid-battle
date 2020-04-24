import styled from "styled-components";
import { backgroundImg } from "../../assets/images";
import { colors, boxShadow, borderRadius } from '../../theme';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImg}) center center/cover no-repeat;
  overflow: hidden;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
  background-color: ${colors.whiteTransparent};
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.large};
  height: 50px;
  padding: 5px 20px;
  display: flex;
  position: relative;
  top: 27px;
  font-size: 14px;
  justify-content: center;
`;
