import styled from "styled-components/native";

export const ModalView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 15px;
    justify-content: space-between;
    height: 30%;
    background-color: white;
    align-items: center;
    border-radius: 4;
    border-color: rgba(0, 0, 0, 0.1);
`;

export const ModalButton = styled.TouchableOpacity`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: lightgray;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 4;
    border-color: rgba(0, 0, 0, 0.1);
`;