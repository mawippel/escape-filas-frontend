import React from 'react'
import { Image } from 'react-native'
import { StyledButtonSeeLines } from './styles';


const ButtonSeeLines = (props) => (
  <StyledButtonSeeLines onPress={props.backHandler}>
    <Image source={props.imageSource} />
  </StyledButtonSeeLines>
);

export default ButtonSeeLines;
