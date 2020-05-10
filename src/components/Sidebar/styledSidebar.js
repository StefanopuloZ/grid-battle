import styled from 'styled-components';
import { media } from '../../theme';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  padding-left: 0;
  margin-top: 20px;

  @media ${media.small} {
    flex-direction: row;
  }

  @media ${media.medium} {
    flex-direction: column;
    width: 33.3%;
    margin-top: 0px;
    padding-left: 10px;
  }
`;

export default StyledSidebar;
