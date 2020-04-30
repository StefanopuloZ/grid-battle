import styled from 'styled-components';
import { colors, boxShadow, borderRadius, media } from '../../theme';

export const StyledButton = styled.div`
  padding: 5px 10px;
  background-color: ${colors.white};
  min-width: 100px;
  border-radius: ${borderRadius.standard};
  box-shadow: ${boxShadow.standardInset}, 0 0 0 rgba(255, 255, 255, 0);
  transition: all 300ms ease-in-out;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background-color: ${props => (props.disabled ? colors.gray : '')};

  ${props =>
    props.disabled
      ? ''
      : `  &:hover {
    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0), ${boxShadow.standard};
  }`}

  @media ${media.small} {
    margin-bottom: 0;
  }
`;

export const StyledButtonPrimary = styled(StyledButton)`
  padding: 10px 40px;
  margin-bottom: 10px;
`;

export const StyledButtonSecondary = styled(StyledButton)`
  padding: 7px 14px;
`;
