import styled from 'styled-components';
import { colors, boxShadow, borderRadius, media } from '../../theme';

export const StyledLink = styled.div`
  padding: 10px 40px;
  background-color: ${colors.white};
  min-width: 100px;
  border-radius: ${borderRadius.standard};
  box-shadow: ${boxShadow.standardInset}, 0 0 0 rgba(255, 255, 255, 0);
  transition: all 300ms ease-in-out;
  cursor: ${props => props.selected ? 'default' : 'pointer'};
  margin-bottom: 10px;
  background-color: ${props => (props.selected ? colors.gray : '')};

  ${props =>
    props.selected
      ? ''
      : `  &:hover {
    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${boxShadow.standard};
  }`}

  @media ${media.small} {
    margin-bottom: 0;
  }
`;
