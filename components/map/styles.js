import styled from "styled-components/native";
import { Platform } from "react-native";

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;