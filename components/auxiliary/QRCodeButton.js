import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { QRCodeButton } from './styles';

const ButtonQRCode = (props) => (
  <QRCodeButton onPress={props.onPress}>
    <Ionicons name="ios-barcode" size={30} color="black" />
  </QRCodeButton>
);

export default ButtonQRCode;
