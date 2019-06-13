import styled from "styled-components/native";
import { Platform } from "react-native";

export const StyledBack = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;

export const StyledDisabledInput = styled.TextInput`
  position: absolute;
  top: ${Platform.select({ ios: 50, android: 45 })};
  left: 60px;
  height: 40px;
  width: 80%;
  border-width: 1px;
  background-color: #FFF;
  border-radius: 4px;
  border-color: #FFF;
  color: #000;
  padding-left: 10px;
  font-size: 14px;
`;

export const StyledButtonSeeLines = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 76, android: 56 })};
  right: 20px;
`;

export const QRCodeButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const ViewBottomInfo = styled.View`
  justify-content: center;
  padding-top: 16;
  flex-direction: row;
  width: 100%;
`;

export const DefaultText = styled.Text`
  color: #000;
  font-size: 16;
`;

export const BoldText = styled.Text`
  color: #666;
  font-size: 16;
  font-weight: 500;
`;

export const CenteredWhiteText = styled.Text`
  font-size: 16;
  font-weight: 500;
  color: #FFF;
  text-align: center;
`