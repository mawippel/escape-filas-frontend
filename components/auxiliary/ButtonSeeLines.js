import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StyledButtonSeeLines } from './styles';


const ButtonSeeLines = (props) => (
  <StyledButtonSeeLines onPress={props.backHandler}>
    <Ionicons name="ios-apps" size={30} color="black" />
  </StyledButtonSeeLines>
);

export default ButtonSeeLines;
