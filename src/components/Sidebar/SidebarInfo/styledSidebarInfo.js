import styled from 'styled-components';
import { colors, boxShadow, borderRadius, media } from '../../../theme';

const StyledSidebarInfo = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.glass};
  padding: 4px 8px;

  @media ${media.small} {
    width: calc(50% - 5px);
  }

  @media ${media.medium} {
    height: 50%;
    width: 100%;
  }
`;

export default StyledSidebarInfo;
