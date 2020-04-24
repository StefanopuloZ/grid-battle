import styled from "styled-components";
import { backgroundImg } from "../../assets/images";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImg}) center center/cover no-repeat;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;
