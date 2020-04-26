import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../../theme';

const StyledSidebarInfo = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.whiteTransparent};
  padding: 4px 8px;
`;

export default StyledSidebarInfo;
