import styled from 'styled-components';
import { characterImg } from '../../assets/images';
import { colors, boxShadow, borderRadius, fonts } from '../../theme';

export const StyledCharacterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.regular};
  padding: 0 10px;

  h2 {
    font-size: 24px;
    font-weight: bolder;
    text-shadow: 2px 2px 2px
      ${props =>
        props.player === 'ai'
          ? colors.redTransparent
          : colors.greenTransparent};
    margin: 10px auto;
  }
`;

export const StyledCharacterInfoStat = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 5px;
  padding: 0;
  font-weight: bolder;
  font-size: 16px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    box-shadow: ${props =>
      props.player === 'ai'
        ? boxShadow.standarInsetWithColor(colors.redTransparent)
        : boxShadow.standarInsetWithColor(colors.greenTransparent)};
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const StyledCharacterInfoTitle = styled.div``;

export const StyledCharacterInfoImage = styled.div`
  width: 70px;
  padding-top: 70px;
  border-radius: 50%;
  background: url(${props => characterImg[props.image]}) center center/cover
    no-repeat;
  margin: 5px auto;
  box-shadow: ${boxShadow.standardInset};
`;
