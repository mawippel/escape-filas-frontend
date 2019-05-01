import React from 'react'
import { Image } from 'react-native'
import { StyledBack } from '../auxiliary/styles'

const Back = (props) => (
  <StyledBack onPress={props.backHandler}>
    <Image source={props.imageSource} />
  </StyledBack>
);

export default Back;
