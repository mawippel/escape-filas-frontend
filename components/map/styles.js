import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  height: 11%;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
`;

export const RequestButton = styled.TouchableOpacity`
  background: #222;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 44px;
  align-self: stretch;
  margin: 10px;
`;

export const RequestButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;