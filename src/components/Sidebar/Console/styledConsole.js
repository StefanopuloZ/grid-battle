import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../../theme';

const StyledConsole = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: calc(50% - 10px);
  max-height: 315px;
  padding: 4px 8px;
  margin-top: auto;
  text-align: left;
  font-size: 14px;
  overflow-y: scroll;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.glassTransparent};

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px !important;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${colors.gray};
    box-shadow: ${boxShadow.standard};
  }
`;

export default StyledConsole;
