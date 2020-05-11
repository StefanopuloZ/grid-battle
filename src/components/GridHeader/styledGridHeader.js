import styled from 'styled-components';
import { media } from '../../theme';

export const StyledGridHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column-reverse;

  @media ${media.medium} {
    border: none;
    flex-direction: row;
  }
`;
