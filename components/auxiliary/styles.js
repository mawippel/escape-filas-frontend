import styled from "styled-components/native";
import { Platform } from "react-native";

export const StyledBack = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;

export const StyledButtonSeeLines = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 76, android: 56 })};
  right: 20px;
`;